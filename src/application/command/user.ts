interface CreateUserIF {
  email: string
  name: string
  password: string
  roleIDs: string[]
  validate(): void
}

export class CreateUser implements CreateUserIF {
  readonly email: string
  readonly name: string
  readonly password: string
  readonly roleIDs: string[]

  constructor(email: string, name: string, password: string, roleIDs: string[]) {
    this.email = email
    this.name = name
    this.password = password
    this.roleIDs = roleIDs
  }
  
  validate() {
    if (this.email === "") throw new Error("user email required")
    if (this.name === "") throw new Error("user name required")
    if (this.password === "") throw new Error("user password required")
  }
}
