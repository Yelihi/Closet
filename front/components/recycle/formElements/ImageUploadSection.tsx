import React from 'react';

import InputPartial from '../inputElements/InputPartial';
import DropImageInput from '../../add/DropImageInput';

const ImageUploadSection = () => {
  return (
    <InputPartial
      title='IMAGE UPLOAD'
      subtitle='이미지를 하나씩 업로드 할 수 있습니다. 필수 기입사항입니다. 이미지를 업로드 할 시 vision AI 를 통해 이미지의 적합성을 판단하게 됩니다. 허나 이는 참고용으로서 부정확할 수 있으니 주의바랍니다.'
    >
      <DropImageInput />
    </InputPartial>
  );
};

export default ImageUploadSection;
