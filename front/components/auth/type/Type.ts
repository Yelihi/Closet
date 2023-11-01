// Login Types

export interface MemberInfoProps {
  email: string;
  password: string;
}

export type IsValiedInfoProps = {
  [key in keyof MemberInfoProps]: string | undefined;
};

export type PartialMemberInfoProps = {
  [key in keyof MemberInfoProps]: Record<key, MemberInfoProps[key]>;
}[keyof MemberInfoProps];

export type PartialIsValiedInfoProps = {
  [key in keyof IsValiedInfoProps]: Record<key, IsValiedInfoProps[key]>;
}[keyof IsValiedInfoProps];

// SignUp Types

export interface SignUpInfoProps extends MemberInfoProps {
  nickName: string;
  confirmPassword: string;
}

export interface IsValiedSignUpInfoProps extends IsValiedInfoProps {
  nickName: string | undefined;
  confirmPassword: string | undefined;
}

export type PartialSignUpInfoProps = {
  [key in keyof SignUpInfoProps]: Record<key, SignUpInfoProps[key]>;
}[keyof SignUpInfoProps];

export type PartialIsValiedSignUpInfoProps = {
  [key in keyof IsValiedSignUpInfoProps]: Record<key, IsValiedSignUpInfoProps[key]>;
}[keyof IsValiedSignUpInfoProps];

// Utils Type

export type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never;
};
