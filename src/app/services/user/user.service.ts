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
}
