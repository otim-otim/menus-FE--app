
export interface Menu {
    id: string,
    name: string
    depth: number,
    parent: string | null
    children: Menu[]

}