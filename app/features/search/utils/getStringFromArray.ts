
export function getStringFromArray<T,>(arr: T[], key: keyof T) {
    if (Array.isArray(arr)) {
        const result = arr.map((obj:T) => obj[key]).join(",");
        return result
    }else{
        return ""
    }
}