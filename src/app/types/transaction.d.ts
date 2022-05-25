export type Transaction = {
    addressTo: string,
    addressFrom?: string,
    timeStamp?: string,
    message: string,
    keyword: string,
    amount: number
}