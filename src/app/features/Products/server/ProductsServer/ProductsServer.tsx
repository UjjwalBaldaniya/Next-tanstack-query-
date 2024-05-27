import { ReactNode } from 'react';
import { getProducts } from '@/shared/api/products-api';
import { QueryKey } from '@/shared/constants/queryKey.constant';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

interface ProductsServerProps {
  children: ReactNode;
}

const ProductsServer = async ({ children }: ProductsServerProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKey.PRODUCTS],
    queryFn: getProducts,
  });

  const categories = queryClient.getQueryData([QueryKey.PRODUCTS]);

  if (!categories) {
    console.error('No categories available in the cache.');
    return null;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default ProductsServer;
