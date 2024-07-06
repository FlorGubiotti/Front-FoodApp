export default interface DataModel<T> {
    id: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: T | number | undefined | any[] | string | boolean | any;
}