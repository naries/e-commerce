export function sleep(ms) {
    return new Promise(r => setTimeout(r, ms))
}


export const sleepAndWait = () => {
    return new Promise(r => {
        let timeOut = setTimeout(() =>{
            console.log('done')
        }, 3000)
        clearTimeout(timeOut)
        return r;
    })
}