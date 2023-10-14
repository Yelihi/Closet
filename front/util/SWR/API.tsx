import useSWR from 'swr';
import { backUrl, mutateFetcher } from '../../config/config';
import { usePagination } from '../../hooks/usePagination';

import { Overview, MatchedDataArray, ItemsArray, FetchingDataInDesktop, FetchingDataPerYear } from '../Types/response';

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

  getItemsPerPagenation(lastId: number, categori: string, windowWidth: 'desktop' | 'phone') {
    const FetchInDeskTop = useSWR<FetchingDataInDesktop>(
      `${backUrl}/posts/clothes/store?lastId=${lastId}&categori=${categori}&deviceType=${windowWidth}`,
      this.fetcher
    );
    const { data: itemsInDesk, error: errorInDesk, isLoading: isLoadingDesk, mutate: mutateInDesk } = FetchInDeskTop;

    const itemsArrayInDesk = itemsInDesk === undefined ? undefined : itemsInDesk.items;

    return { itemsInDesk, itemsArrayInDesk, isLoadingDesk, errorInDesk, mutateInDesk };
  }

  getInfiniteItems(categori: string, windowWidth: 'desktop' | 'phone') {
    const FetchInMobile = usePagination<ItemsArray>(categori, windowWidth);
    const {
      items: itemsInMobile,
      paginationPosts: itemsArrayInMobile,
      setSize,
      isReachedEnd,
      isItemsLoading: isLoadingMobile,
      infinitiMutate,
      infinitiValidating,
      postsError: errorInMobile,
    } = FetchInMobile;

    return {
      itemsInMobile,
      itemsArrayInMobile,
      setSize,
      isReachedEnd,
      isLoadingMobile,
      infinitiMutate,
      infinitiValidating,
      errorInMobile,
    };
  }

  getItemsPerYear(selectedYear: number) {
    const FetchPerYear = useSWR<FetchingDataPerYear>(`${backUrl}/posts/chart?year=${selectedYear}`, this.fetcher);
    const { data: itemsPerYear, isLoading, error } = FetchPerYear;

    return { itemsPerYear, isLoading, error };
  }
}

export const SWR = new SWRInDataFetch();
