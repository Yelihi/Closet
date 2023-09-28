export function isEmail() {
  return (email: string) => {
    const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
    return emailRegExp.test(email) ? undefined : `이메일이 올바르지 않습니다`;
  };
}

export function maxLength(length: number) {
  return (password: string) => {
    return password.length < length ? `${length}자 이상 작성해주세요` : undefined;
  };
}

export function isEqual() {
  return (prevPassword: string, confirmPassword: string) => {
    return prevPassword === confirmPassword ? undefined : `비밀번호가 일치하지 않습니다`;
  };
}
