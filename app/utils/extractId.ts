const extractId = (url: string): string => {
    return url?.split('/')[2]
};

export {
    extractId
}

