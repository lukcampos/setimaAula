import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // framework que auxilia na criação de forms
import { UserService } from '../../services/index'
import { ActivatedRoute, Router } from '@angular/router' // framework de manipulação de rotas
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  userForm: FormGroup; // variavel do tipo FormGroup
  id: string = '1'
  user: any = {}
  constructor(
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {

    // função que pega o id do parametro n URL
    this.id = this.activatedRoute.snapshot.paramMap
      .get("id")

    // criar a estrutura do form
    this.userForm = this.formBuilder.group({
      id: this.id,
      first_name: '',
      last_name: '',
      avatar: ''
    })
  }

  // função chamada toda vez que a app inicia
  async ngOnInit() {

    // verificasr se têm o id e preencher o form do usuário
    if (this.userForm.value.id && this.userForm.value.id != 'new') {

      // pega op usuário pelo id
      var user = await this.userService.getOne(this.id)
      this.user = user['data']

      this.userForm = this.formBuilder.group({
        id: this.user['id'],
        first_name: this.user['first_name'],
        last_name: this.user['last_name'],
        avatar: this.user['avatar']
      })

    }
  }


  async save() {
    // metodo de recuperar dados do forkm
    const user = this.userForm.value

    if (user['id'] == 'new') {
      //adicionar novo usuário
      var novoUsuario = await this.userService.add(user)
      alert(`Usuário ${user.first_name} foi adicionado com sucesso!`)
    } else {
      //atualizar usuáriom existente
      var usuarioAtualoizado = await this.userService.update(user)
      console.log('usuarioAtualoizado', usuarioAtualoizado)
      alert(`Usuário ${usuarioAtualoizado['first_name']} foi atualizado com sucesso!`)
    }

    // voltar para lisat de usuários
    this.router.navigate(['/list'])
  }


  async delete() {
    // recuperar dados do form
    const user = this.userForm.value

    // deleta o usuário
    await this.userService.delete(user)


    //exibe o alert
    alert(`O usuário ${user['first_name']} foi deletado com sucesso!`)

    // volta par a listagem
    this.router.navigate(['/list'])

  }

}
