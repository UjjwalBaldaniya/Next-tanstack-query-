import { getProducts } from '@/shared/api/products-api';
import { QueryKey } from '@/shared/constants/queryKey.constant';
import { useQuery } from '@tanstack/react-query';

export const useGetProductQuery = () => {
  return useQuery({
    queryKey: [QueryKey.PRODUCTS],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 2,
  });
};
