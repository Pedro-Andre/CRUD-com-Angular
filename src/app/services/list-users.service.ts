import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IUsuario } from '../models/iusuario';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListUsersService {
  constructor(private http: HttpClient) {}
  appiURL = 'https://reqres.in/api/';

  listarUsuarios(): Observable<IUsuario[]> {
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
    });

    return this.http
      .get<{ data: IUsuario[] }>(this.appiURL + 'users?page=2', { headers })
      .pipe(map((response) => response.data));
  }
}
