function removeDuplicates(arr:any){
    return [...new Map(arr.map((obj: any) => [obj.id, obj])).values()]
}

export default removeDuplicates