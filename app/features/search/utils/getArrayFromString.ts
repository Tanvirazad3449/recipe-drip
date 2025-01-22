
export function getArrayFromString<T,>(str: string, ref: T[], key: keyof T) {
    const arr = str.split(',')
    const res = ref.filter((value: T) => value[key] && typeof value[key] === "string" && arr.includes(value[key]))
    return res
}