import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;
  //uri = '/users';
  uri = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  addUser(nombre, apellidos, direccion, telefono) {
    const user = {
      nombre: nombre,
      apellidos: apellidos,
      direccion: direccion,
      telefono: telefono
      
    };
    this.http.post(`${this.uri}/add`, user)
        .subscribe(res => console.log('Done'));
  }

  deleteUser(id:number):Observable<{}> {
    const url = `${this.uri}/delete/${id}`;
    return this.http.delete(url)
    
  }
  
}
