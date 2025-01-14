import { SearchFilterTypes } from "../interfaces/SearchFilterType";

export function getSearchParam(selectedValues: SearchFilterTypes){
    let url = ""
for (const key in selectedValues) {
      const element = selectedValues[key as keyof SearchFilterTypes];
      
      if(typeof element === "string" && element.length > 0){
        url += `${key}=${element}&`
      }

      if(key === "titleMatch" && element === true){
        url += `${key}=${selectedValues.query}&`
      }

      if(key === "maxReadyTime"){
        url += `${key}=${element}&`
      }
      
      if(key === "servings" && Array.isArray(element)){
        url += `minServings=${element[0]}&maxServings=${element[1]}&`
      }
    }
    url = url.slice(0,-1)
    return url
}