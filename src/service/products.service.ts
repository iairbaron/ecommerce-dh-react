import { Product } from "../interface";

export const getProducts = async (page = 0): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://json-server-vercel-swart.vercel.app/products?_page=${page}&_per_page=10`
    );

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      throw new Error("Failed to fetch products");
    }
  } catch (error) {
    throw new Error("Network error");
  }
};
