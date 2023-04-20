import axios from 'axios';

export const backUrl = 'http://localhost:3065';
export const base64URL = 'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==';

export const mutateFetcher = (url: string) => axios.get(url, { withCredentials: true }).then(result => result.data);

export const fetcher = (url: string, queryParameter: string) => axios.get(`${url}${queryParameter}`, { withCredentials: true }).then(result => result.data);
