'use client';

import { SingleProductCard } from '@/features/Products';
import { useGetSingleProductQuery } from '@/features/Products/api/products.api';

interface SingleProductClientProps {
  params: string;
}

const SingleProductClient = ({ params }: SingleProductClientProps) => {
  const { data, error, isLoading } = useGetSingleProductQuery(params);

  if (!data) {
    return null; // or any other fallback UI
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }
  return (
    <div>
      <SingleProductCard data={data} />
    </div>
  );
};

export default SingleProductClient;
