const extractId = (url: string): number => {
    return parseInt(url?.split('/')[2])
};

export {
    extractId
}

