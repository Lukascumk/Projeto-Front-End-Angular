import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavBarModule } from 'src/app/components/navbar/navbar.module';
import { SideBarModule } from 'src/app/components/sidebar/sidebar.module';
import { DespesaComponent } from './despesa.component';
import {  DespesaRoutingModule } from './despesa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule(
  {
    providers: [],
    declarations: [DespesaComponent],
    imports: [
      CommonModule,
      DespesaRoutingModule,
    NavBarModule,
    SideBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
        ]

    }
)


export class DespesaModule{}
