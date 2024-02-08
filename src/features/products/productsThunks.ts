import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product, ProductMutation } from '../../types';
import axiosApi from '../../axiosApi';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchAll',
  async () => {
    const dishesResponse = await axiosApi.get<Product[]>('/products');
    return dishesResponse.data;
  }
);

export const createProduct = createAsyncThunk<null, ProductMutation>(
  'dishes/create',
  async (productMutation) => {
    const serialized = {
      ...productMutation,
      price: parseInt(productMutation.price)
    };

    return axiosApi.post('/products', serialized);
  }
);
