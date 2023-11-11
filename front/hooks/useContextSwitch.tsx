import { useContext } from 'react';

import { MemberInfoProps, SignUpInfoProps, Merge } from '../components/auth/type/Type';
import { LoginContext, SignUpContext } from '../components/auth/MemberContext';
import { memberInfo } from '../components/auth/Login';
import { signUpInfo } from '../components/auth/Signup';

import useContextInput from './useContextInput';

type StringKeys = keyof Merge<MemberInfoProps, SignUpInfoProps>;

interface useContextSwitchProps {
  source: StringKeys;
  validate: any;
  connectType?: StringKeys;
  context: 'Login' | 'SignUp';
}

const useContextSwitch = ({ source, validate, connectType, context }: useContextSwitchProps) => {
  // 한계점이라면 context 가 추가될 때마다 case 를 기입해줘야 한다는 점이있다.
  // 또한 case 에 맞는 context 를 MemberContext 에서 미리 생성해두어야 한다.
  let returnValue;
  switch (context) {
    case 'Login': {
      if (Object.keys(memberInfo).includes(source)) {
        const info = useContext(LoginContext);
        if (info === null || info === undefined) {
          throw new Error('생성된 context가 없습니다.');
        }
        const newSource = source as keyof MemberInfoProps;
        // 비밀번호 확인과 같은 경우 비밀번호 입력 value 의 값에 의존하여 valid 를 판단하여야 한다
        // 이에 connectType 을 같이 전달하여 valid 조건에 활용하도록 한다.
        const newConnectType = connectType as keyof MemberInfoProps;
        const { value, setValue, error, setError } = info;
        returnValue = useContextInput({
          value,
          setValue,
          error,
          setError,
          source: newSource,
          validate,
          connectType: newConnectType,
        });
      }
      break;
    }
    case 'SignUp': {
      if (Object.keys(signUpInfo).includes(source)) {
        const info = useContext(SignUpContext);
        if (info === null || info === undefined) {
          throw new Error('생성된 context가 없습니다.');
        }
        const newSource = source as keyof SignUpInfoProps;
        // 비밀번호 확인과 같은 경우 비밀번호 입력 value 의 값에 의존하여 valid 를 판단하여야 한다
        // 이에 connectType 을 같이 전달하여 valid 조건에 활용하도록 한다.
        const newConnectType = connectType as keyof SignUpInfoProps;
        const { value, setValue, error, setError } = info;
        returnValue = useContextInput({
          value,
          setValue,
          error,
          setError,
          source: newSource,
          validate,
          connectType: newConnectType,
        });
      }
      break;
    }
    default: {
      returnValue = null;
    }
  }

  return returnValue;
};

export default useContextSwitch;
