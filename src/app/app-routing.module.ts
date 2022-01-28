import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  // se não tiver nenhuma rota, direciona para /login
  {path:'', redirectTo:'login', pathMatch:'full'},

  // direciona a rota para os componentes em questão
  {path:'login', component:LoginComponent},
  {path:'cadastrar', component:CadastrarComponent},
  
  {path:'inicio', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
