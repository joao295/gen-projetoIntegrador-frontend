import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuarioLogin: UsuarioLogin = new UsuarioLogin
  
  constructor() { }

 
 
 
 
 
  ngOnInit() {
  
    window.scroll(0, 0)
    
  }

}
