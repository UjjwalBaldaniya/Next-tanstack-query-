import { publicApi } from '@/shared/configs/api.configs';

export async function getProducts() {
  try {
    const response = await publicApi.get(`/products`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
}
