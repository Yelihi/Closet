import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';

import * as t from '../../reducers/type';

import ProfileInput from './ProfileInput';
import { DefaultValueInAdmin, defaultValueInAdmin, InputFieldArray } from './data/InputData';
import { rootReducerType } from '../../reducers/types';

type RefObjType = {
  childSaveButtonRef: HTMLButtonElement | null;
  childCencelButtonRef: HTMLButtonElement | null;
};

const ProfileForm = React.forwardRef<RefObjType>((_, ref) => {
  const dispatch = useDispatch();
  const isReset = useRef<boolean>(false);
  const { me, userProfileImages, updateUserInfoLoading } = useSelector((state: rootReducerType) => state.user);
  const methods = useForm<DefaultValueInAdmin>({
    mode: 'onSubmit',
    defaultValues: defaultValueInAdmin,
  });

  const { current } = ref as React.MutableRefObject<RefObjType>;

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  let resetMyInfo = {};
  if (me) {
    const { nickname, src } = me;
    resetMyInfo = { nickname, src };
    if (!isReset.current) {
      isReset.current = true;
      reset(resetMyInfo);
    }
  }

  const onSubmit = (data: DefaultValueInAdmin) => {
    data.src = userProfileImages ? userProfileImages : '';
    console.log(data);
    dispatch({
      type: t.PATCH_USER_INFO_REQUEST,
      data: { info: data },
    });
  };

  const onCencel = () => {
    reset(resetMyInfo);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <button ref={el => (current.childSaveButtonRef = el)} type='submit' name='submit' hidden />
        <button ref={el => (current.childCencelButtonRef = el)} type='button' name='cencel' hidden onClick={onCencel} />
        {InputFieldArray.map((Field, index) => {
          return (
            <ProfileInput
              control={control}
              key={index}
              fieldName={Field.fieldName}
              information={Field.information}
              name={Field.name}
              elementType={Field.elementType}
              elementProps={Field.elementProps}
              rules={{ required: false }}
              isLoading={updateUserInfoLoading}
            />
          );
        })}
      </Form>
    </FormProvider>
  );
});

export default ProfileForm;

const Form = styled.form`
  width: 100%;
  height: auto;
`;
