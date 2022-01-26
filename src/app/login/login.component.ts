import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuarioLogin: UsuarioLogin = new UsuarioLogin
  
  constructor(
    private authService: AuthService
  ) { }

 
 
 
 
 
  ngOnInit() {
  
    window.scroll(0, 0)

  }

  entrar() {

  }

}
