import useSWR from 'swr';
import { backUrl, mutateFetcher } from '../../config/config';

import { Overview, MatchedDataArray } from '../Types/response';

export default class SWRInDataFetch {
  fetcher: any;
  constructor(fetcher = mutateFetcher) {
    this.fetcher = fetcher;
  }

  getSummuryInUserItems() {
    const { data, isLoading, error } = useSWR<Overview>(`${backUrl}/posts/overview`, this.fetcher);
    return { data, isLoading, error };
  }

  getItemsInSearchValue(searchValue: string | undefined) {
    const { data, isLoading, error } = useSWR<MatchedDataArray>(
      () => (searchValue ? `${backUrl}/posts/clothes/search?searchWord=${searchValue}` : null),
      this.fetcher
    );
    return { data, isLoading, error };
  }
}
