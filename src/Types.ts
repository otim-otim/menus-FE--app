
export interface Menu {
    id: string,
    name: string
    depth: number,
    parent?: number | null
    children?: Menu[]

}