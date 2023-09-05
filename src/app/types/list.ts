export type Status = 'todo' | 'doing' | 'done';

export interface List {
    id: number,
    title: string,
    description: string,
    status: Status,
    created_at: string,
    updated_at: string,
}