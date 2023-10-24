import React, { useState, useRef } from 'react';

const appendImage = (list: FileList) => {
  const imageFormData = new FormData();
  [].forEach.call(list, file => {
    imageFormData.append('image', file);
  });
  return imageFormData;
};

const useHandleDrag = (func: (form: FormData) => any) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    switch (e.type) {
      case 'dragenter': {
        setDragActive(true);
        break;
      }
      case 'dragover': {
        setDragActive(true);
        break;
      }
      case 'dragleave': {
        setDragActive(false);
        break;
      }
      default:
        break;
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const imageFormData = appendImage(e.dataTransfer.files);
      func(imageFormData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const imageFormData = appendImage(e.target.files);
      func(imageFormData);
    }
  };

  const onButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputRef.current) {
      // inputRef.current 가 null 일 수 있으니, 조건문으로 확인해주기
      inputRef.current.click();
    }
  };

  return { dragActive, inputRef, handleDrag, handleDrop, handleChange, onButtonClick };
};

export default useHandleDrag;
