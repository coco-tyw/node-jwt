export type UserView = {
  id: string
  name: string
  email: string
  roles: RoleView[]
  createdAt: number
  updatedAt: number
}

export type UsersView = {
  items: UserView[]
  perPage: number
  count: number
  nextCursor: number | null
}

export type RoleView = {
  id: string
  name: string
  users: UserView[]
  createdAt: number
  updatedAt: number
}

export type RolesView = {
  items: RoleView[]
  perPage: number
  count: number
  nextCursor: number | null
}