import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavBarModule } from 'src/app/components/navbar/navbar.module';
import { SideBarModule } from 'src/app/components/sidebar/sidebar.module';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaComponent } from './sistema.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule(
  {
    providers: [],
    declarations: [SistemaComponent],
    imports: [
      CommonModule,
      SistemaRoutingModule,
    NavBarModule,
    SideBarModule,
    ReactiveFormsModule
        ]

    }
)


export class SistemaModule{}
