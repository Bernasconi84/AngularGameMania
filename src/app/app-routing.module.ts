import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './views/categorias/categorias.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"postman", component: CategoriasComponent},
  {path:"jogos", component: JogosComponent},
  {path:"login", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
