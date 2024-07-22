import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './pages/guards/auth-guard.service';

//Definição das rotas do meu projeto, Login, Dashboard, Sistema, Categoria e Despesa//

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[authGuard]
  },
  {
    path: 'sistema',
    loadChildren: () => import('./pages/sistema/sistema.module').then(m => m.SistemaModule),
    canActivate:[authGuard]
  }
  ,
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaModule),
    canActivate:[authGuard]
  }
  ,
  {
    path: 'despesa',
    loadChildren: () => import('./pages/despesa/despesa.module').then(m => m.DespesaModule),
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
