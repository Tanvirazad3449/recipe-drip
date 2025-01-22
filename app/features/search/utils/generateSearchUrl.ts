import { SearchFilterTypes } from "../../../types/search/filters";

export function generateSearchUrl(selectedValues: SearchFilterTypes){
    let url = ""
for (const key in selectedValues) {
      const element = selectedValues[key as keyof SearchFilterTypes];
      
      if(typeof element === "string" && element.length > 0){
        url += `${key}=${element}&`
      }

      if(key === "titleMatch" && element === true){
        url += `${key}=${selectedValues.query}&`
      }

      if(key === "maxReadyTime" || key === "minServings" || key === "maxServings"){
        url += `${key}=${element}&`
      }
      
    }
    url = url.slice(0,-1)
    return url
}