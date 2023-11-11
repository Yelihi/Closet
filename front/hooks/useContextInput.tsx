import { useEffect } from 'react';

// 전달되는 Value 에 한해 자동적으로 나머지 type이 설정이 된다.
interface UseContextInputProps<T extends Object> {
  value: T;
  setValue: (v: { [key in keyof T]: Record<key, T[key]> }[keyof T]) => void; // value 중 특정 source 에 해당하는 값만 변경 (ex. { ...value, name: 'newName'} 에서 { name: 'newName' } 부분)
  error: { [key in keyof T]: string | undefined }; // value 를 통해 자동 생성
  setError: (e: { [key in keyof T]: Record<key, 'string' | 'undefined'> }[keyof T]) => void; // 위 setValue 와 마찬가지
  source: keyof T; // name, email... 등등인데 Login, SignUp 내 source 가지수에서 차이가 나서 저번에 key 참조오류가 발생했었다.
  validate: any;
  connectType: keyof T;
}

const useContextInput = <T extends Object>({
  value,
  setValue,
  error,
  setError,
  source,
  validate,
  connectType,
}: UseContextInputProps<T>) => {
  useEffect(() => {
    // vaildFunc은 하나의 Element 에 여러개가 존재할 수 있음
    const errors: { [key in keyof T]: string | undefined }[] = validate.map((validFunc: any) => {
      if (connectType) {
        // valid 비교 기준이 다른 element value 와 연관된다면
        if (value[source] !== undefined && value[connectType] !== undefined) {
          return validFunc(value[connectType], value[source]);
        }
      } else {
        if (value[source] !== undefined) {
          return validFunc(value[source]);
        }
      }
    });
    const err = errors.find(error => error); // undefined 를 제외한 나머지
    setError({ [source]: err } as { [key in keyof T]: Record<key, 'string' | 'undefined'> }[keyof T]);
  }, [value[source]]);

  const onChange = (v: any) => {
    setValue({ [source]: v } as { [key in keyof T]: Record<key, T[key]> }[keyof T]);
  };

  return { error: error[source], value: value[source], onChange };
};

export default useContextInput;
