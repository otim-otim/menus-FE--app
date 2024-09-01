
export interface Menu {
    id?: number,
    name: string
    depth: number,
    parent?: number | null
    children?: Menu[]

}