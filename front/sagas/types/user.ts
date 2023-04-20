import { AxiosHeaders } from 'axios';

export interface LoginSuccess {
  data: Object;
  status: number;
  statusText: string;
  headers: any;
  config: Object;
  request: any;
}

export interface IResult {
  config: any;
  data: { message: string; token: string };
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
