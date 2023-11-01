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
  let returnValue;
  switch (context) {
    case 'Login': {
      if (Object.keys(memberInfo).includes(source)) {
        const info = useContext(LoginContext);
        if (info === null || info === undefined) {
          throw new Error('생성된 context가 없습니다.');
        }
        const newSource = source as keyof MemberInfoProps;
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
