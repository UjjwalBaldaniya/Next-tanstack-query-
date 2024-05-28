import { getSingleProduct } from '@/shared/api/products-api';
import { QueryKey } from '@/shared/constants/queryKey.constant';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

interface SingleProductsServerProps {
  params: string;
  children: (params: string) => ReactNode;
}

const SingleProductServer = async ({
  params,
  children,
}: SingleProductsServerProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKey.SINGLEPRODUCT],
    queryFn: () => getSingleProduct(params),
  });

  const categories = queryClient.getQueryData([QueryKey.SINGLEPRODUCT]);
  console.log('🚀 ~ categories:', categories);

  if (!categories) {
    console.error('No categories available in the cache.');
    return null;
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children(params)}
    </HydrationBoundary>
  );
};

export default SingleProductServer;
