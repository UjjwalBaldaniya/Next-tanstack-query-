import { getProducts, getSingleProduct } from '@/shared/api/products-api';
import { QueryKey } from '@/shared/constants/queryKey.constant';
import { useQuery } from '@tanstack/react-query';

export const useGetProductQuery = () => {
  return useQuery({
    queryKey: [QueryKey.PRODUCTS],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 20,
  });
};
export const useGetSingleProductQuery = (params: string) => {
  return useQuery({
    queryKey: [QueryKey.SINGLEPRODUCT],
    queryFn: () => getSingleProduct(params),
    staleTime: 1000 * 60 * 20,
  });
};
