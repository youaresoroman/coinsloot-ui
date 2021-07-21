const debounce = (callback: () => any, wait: number) => {
    let timeout: any;
    return function (this:any, ...args: any) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}

export default debounce