import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/index' // crud de usuários
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: Array<Object> = []
  constructor(private userService: UserService) {
  }

  // toda vez que o component é carregado
  async ngOnInit() {
    var users = await this.userService.list()
    this.users = users['data']

  }


}
