import { ProductsServer } from '../features/Products';
import ProductsClient from './page.client';

const Products = () => {
  return (
    <div>
      <ProductsServer>
        <ProductsClient />
      </ProductsServer>
    </div>
  );
};

export default Products;
