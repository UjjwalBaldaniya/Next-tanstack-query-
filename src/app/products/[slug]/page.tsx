import { SingleProductServer } from '@/features/Products';

import SingleProductClient from './page.client';

interface SingleProductProps {
  params: {
    slug: string;
  };
}

const SingleProduct = ({ params }: SingleProductProps) => {
  const { slug } = params;

  return (
    <div>
      <SingleProductServer params={slug}>
        {(params) => <SingleProductClient params={params} />}
      </SingleProductServer>
    </div>
  );
};

export default SingleProduct;
