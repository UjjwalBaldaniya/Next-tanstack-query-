'use client';

import { ProductCard } from '@/features/Products';
import { useGetProductQuery } from '@/features/Products/api/products.api';

const ProductsClient = () => {
  const { data, error, isLoading } = useGetProductQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="mx-auto flex flex-wrap gap-4">
          {data &&
            data?.map((item, index) => <ProductCard {...item} key={index} />)}
        </div>
      </div>
    </>
  );
};

export default ProductsClient;
