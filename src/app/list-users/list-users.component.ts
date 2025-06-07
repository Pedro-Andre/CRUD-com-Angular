import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../models/iusuario';
import { ListUsersService } from '../services/list-users.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  constructor(private service: ListUsersService) {}

  displayColumns = ['id', 'first_name', 'last_name', 'email'];

  dataSource: IUsuario[] = [];
  valor: string = 'teste';

  listaUsuraios: IUsuario[] = [
    {
      id: 1,
      first_name: 'Usuário 1',
      last_name: 'Test',
      email: 'fulano_1@mail.co',
    },
    {
      id: 2,
      first_name: 'Usuário 2',
      last_name: 'User',
      email: 'test_2@mail.co',
    },
  ];

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.service.listarUsuarios().subscribe((response) => {
      this.dataSource = response;
    });
  }
}
