import { ReadonlyURLSearchParams } from 'next/navigation';

const getSearchUrl = (slug: string, searchParams: ReadonlyURLSearchParams): string => {
  let url = slug + "?";
  const keys = ["diet", "type", "cuisine", "ingredients"];

  keys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      url += `${key}=${value}&`;
    }
  });
console.log("this is the url from getSearchUrl: ", url)
  return url.endsWith("&") ? url.slice(0, -1) : url;
};

export default getSearchUrl;
