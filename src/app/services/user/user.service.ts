import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'https://reqres.in/api/users'

  // documetação https://reqres.in
  constructor(
    private http: HttpClient
  ) { }

  // lista de usuários
  async list() {
    return await this.http.get(this.url).toPromise()
  }

  // pegar usuário pelo id
  async getOne(id: string) {
    return await this.http.get(`${this.url}/${id}`)
      .toPromise()
  }

  // criar novo usuário
  async add(user: Object) {
    return await this.http.post(this.url, user).toPromise()
  }

  // atualiza usuário pelo id
  async update(user: Object) {
    return this.http.put(`${this.url}/${user['id']}`, user).toPromise()
  }

  // deleta o usuário pelo id
  async delete(user: Object) {
    return this.http.delete(`${this.url}/${user['id']}`).toPromise()
  }
}
