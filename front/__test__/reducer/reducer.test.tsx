import * as t from '../../reducers/type';
import user from '../../reducers/user';

describe('User Reducer', () => {
  it('로그인 시도 중이라면 logInLoading 이 true.', () => {
    const userInfo = { email: 'yelihi19@gmail.com', password: '123456!A' };
    const newState = user(undefined, { type: t.LOGIN_REQUEST, userInfo });
    expect(newState.logInLoading).toEqual(true);
  });
});
