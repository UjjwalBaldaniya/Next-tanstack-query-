import { Product } from '@/features/Products/types/product.type';
import publicApi from '@/shared/configs/api.configs';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await publicApi.get<Product[]>(`/products`);
    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};

export const getSingleProduct = async (params: string): Promise<Product> => {
  try {
    const response = await publicApi.get<Product>(`/products/${params}`);
    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};
