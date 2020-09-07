import {UserRepository as UserRepo} from '@/domain/types/repository'
import {User} from '@/domain/entity/index'
import {ErrorBadRequest} from '@/domain/entity/index'

export default class UserRepository implements UserRepo {

  private users: User[] = []

  async create(user: User) {
    const exist = this.users.find(u => u.id === user.id)
    if (exist) throw new ErrorBadRequest(409, 'already exists')
    this.users.push(user)
    return
  }

  async findAll() {
    return this.users
  }

  async findById(id: string) {
    const user = this.users.find(user => user.id === id)
    if (!user) throw new ErrorBadRequest(404, 'resource not found')
    return user
  }
  
  async findByEmail(email: string) {
    const user = this.users.find(user => user.email === email)
    if (!user) throw new ErrorBadRequest(404, 'resource not found')
    return user
  }

  async update(user: User) {
    const index = this.users.findIndex(u => u.id === user.id)
    if (index === -1) throw new ErrorBadRequest(404, 'resource not found')
    this.users.splice(index, 1, user)
    return
  }

  async delete(id: string) {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) throw new ErrorBadRequest(404, 'resource not found')
    this.users.splice(index, 1)
  }

}