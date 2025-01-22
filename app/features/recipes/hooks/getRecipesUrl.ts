import { ReadonlyURLSearchParams } from 'next/navigation';

const getRecipesUrl = (searchParams: ReadonlyURLSearchParams): string => {
  let url = ""
  const keys = ["diet", "type", "cuisine", "includeIngredients"];

  keys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      url += `${key}=${value}&`;
    }
  });
  return url.endsWith("&") ? url.slice(0, -1) : url;
};

export default getRecipesUrl;
