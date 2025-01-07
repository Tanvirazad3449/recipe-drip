// utils/api.ts
import axios from 'axios';

export const getRecipeDetails = async (id: string) => {
  // https://api.spoonacular.com/recipes/149199/information?apiKey=fd1e2b3809874b39adc37108b66a6f77


  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`);
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  return response.data;
};
