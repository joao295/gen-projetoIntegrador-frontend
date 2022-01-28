import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'  
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{ //observable GARANTE o tipo que será passado
    return this.http.post<UsuarioLogin>("https://gen-ti.herokuapp.com/usuario/logar", usuarioLogin) // salva no caminho em questão o parâmetro passado (usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("https://gen-ti.herokuapp.com/usuario/cadastrar", usuario)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }    

    return ok
  }
}
