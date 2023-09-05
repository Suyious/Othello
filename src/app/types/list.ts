export type Status = 'todo' | 'doing' | 'done';

export interface List {
    id: string,
    title: string,
    description: string,
    status: Status,
    created_at: string,
    updated_at: string,
}