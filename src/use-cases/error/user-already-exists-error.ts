export class UserAlreadyExistsError extends Error {
  constructor() {
    super('User (e-mail) already exists')
  }
}
