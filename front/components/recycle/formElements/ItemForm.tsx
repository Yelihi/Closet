import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import dynamic from 'next/dynamic';
import { defaultValues } from './data/data';
import { AddInitialValue } from '../types/recycleElementsTypes';
import { visionAI } from '../../add/data/VisionAIData';
import { revertFetchDataToFormData } from '../../../util/Add/modifyFormData';

import PageMainLayout from '../layout/PageMainLayout';
import SortingResultComponent from '../submitSuccess/SortingResultComponent';
import SpecificationSection from './SpecificationSection';
import SelectCategoriSection from './SelectCategoriSection';
import ImageUploadSection from './ImageUploadSection';
import AboutItemSection from './AboutItemSection';
import SubmitButtonSection from './SubmitButtonSection';

import type { rootReducerType } from '../../../reducers/types';

const PreviewImageSection = dynamic(() => import('./PreviewImageSection'), { ssr: false });

export interface FormProps {
  title: string;
  subTitle: string;
  type: 'add' | 'details';
  itemId?: number;
  resultNumber: number | '';
  Submit: () => string;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemForm = ({ title, subTitle, type, itemId, Submit, resultNumber, setState }: FormProps) => {
  const dispatch = useDispatch();
  const [isClothes, setIsClothes] = useState(false);
  const { imagePath, uploadItemsDone, uploadItemsError, imageUploadLoding, lastAddDataIndex, singleItem } = useSelector(
    (state: rootReducerType) => state.post
  );
  const methods = useForm<AddInitialValue>({
    mode: 'onSubmit',
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (singleItem) {
      const fetchingClothesValues = revertFetchDataToFormData(singleItem, defaultValues);
      reset(fetchingClothesValues);
    } else {
      reset(defaultValues);
    }
  }, [singleItem]);

  // 어차피 singleItem 이 있다면 defaultValue -> beforeValues 로 변경된다.
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ defaultValues });
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (imagePath.length === 0) {
      return;
    }
    let visionSearch = imagePath.map(v => v.visionSearch?.some(i => visionAI.includes(i.name)));
    if (visionSearch.every(bool => bool === true)) {
      setIsClothes(true);
    } else {
      setIsClothes(false);
    }
  }, [imagePath]);

  const warnInvalidState = () => {
    alert('필수 입력란을 채워주세요..!');
  };

  const onSubmit = (data: AddInitialValue) => {
    data.image = imagePath;
    const Type = Submit();
    dispatch({
      type: Type,
      data: { items: data, clothId: itemId },
    });
  };

  return (
    <>
      {!uploadItemsDone ? (
        <PageMainLayout title={title} subTitle={subTitle}>
          <TestContainer>
            <AddSection>
              <FormProvider {...methods}>
                <AddForm onSubmit={handleSubmit(onSubmit, warnInvalidState)}>
                  <SpecificationSection control={control} />
                  <SelectCategoriSection control={control} watch={watch} />
                  <AboutItemSection control={control} />
                  <ImageUploadSection />
                  <PreviewImageSection imageUploadLoding={imageUploadLoding} imagePath={imagePath} watch={watch} />
                  <SubmitButtonSection type={type} isClothes={isClothes} setState={setState} />
                </AddForm>
              </FormProvider>
            </AddSection>
          </TestContainer>
        </PageMainLayout>
      ) : null}
      {uploadItemsDone ? <SortingResultComponent sort={type} id={resultNumber} setConvertState={setState} /> : null}
      {uploadItemsError ? (
        <SortingResultComponent sort={`${type}Failure`} id={resultNumber} setConvertState={setState} />
      ) : null}
    </>
  );
};

export default ItemForm;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

const AddSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const AddForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 10px 0;
`;
