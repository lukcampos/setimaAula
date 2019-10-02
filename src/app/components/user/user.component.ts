import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // framework que auxilia na criação de forms
import { UserService } from '../../services/index'
import { ActivatedRoute } from '@angular/router'
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
    private activatedRoute: ActivatedRoute) {

    // função que pega o id do parametro n URL
    this.id = this.activatedRoute.snapshot.paramMap
      .get("id")
  }

  // função chamada toda vez que a app inicia
  async ngOnInit() {
    // pega op usuário pelo id
    var user = await this.userService.getOne(this.id)
    this.user = user
  }

}
