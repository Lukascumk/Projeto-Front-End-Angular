import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavBarModule } from 'src/app/components/navbar/navbar.module';
import { SideBarModule } from 'src/app/components/sidebar/sidebar.module';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaComponent } from './sistema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatIconModule} from '@angular/material/icon';
@NgModule(
  {
    providers: [],
    declarations: [SistemaComponent],
    imports: [
      CommonModule,
      SistemaRoutingModule,
    NavBarModule,
    SideBarModule,
    ReactiveFormsModule,

  NgxPaginationModule,
  FormsModule,
  NgSelectModule,
  MatIconModule
  
  ]

    }
)


export class SistemaModule{}
