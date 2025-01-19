import { SearchFilterTypes } from "../types/search/filters";

export function debounce<T extends (...args: (SearchFilterTypes)[]) => void>(func: T, delay: number) {
    let timeout: ReturnType<typeof setTimeout>;
  
    return function (this: unknown | SearchFilterTypes, ...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }