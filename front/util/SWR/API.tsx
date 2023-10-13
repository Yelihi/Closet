import useSWR from 'swr';
import { backUrl, mutateFetcher } from '../../config/config';

import { Overview } from '../Types/response';

export default class SWRInDataFetch {
  fetcher: any;
  constructor(fetcher = mutateFetcher) {
    this.fetcher = fetcher;
  }

  getSummuryInUserItems() {
    const { data, isLoading, error } = useSWR<Overview>(`${backUrl}/posts/overview`, this.fetcher);
    return { data, isLoading, error };
  }
}
