export interface UserState {
    user: User
}

export type User = {
    id: string
    name: string
    lastName: string
    salary: number
}