import { SistemaService } from './../../services/sistema.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemaFinanceiro } from 'src/app/models/SistemaFinanceiro';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent {

  constructor(public menuService: MenuService, public formBuilder: FormBuilder,
    public sistemaService : SistemaService
  ) {

  }

sistemaForm: FormGroup;

  ngOnInit() {

    this.menuService.menuSelecionado = 2;

    this.sistemaForm = this.formBuilder.group
    (
      {
        name:[' ',[Validators.required]]
      }
    )
  }
  dadorForm()
  {
    return this.sistemaForm.controls;
  }

enviar() {
debugger
var dados = this.dadorForm();

let item = new SistemaFinanceiro();

item.nome = dados["name"].value;



this.sistemaService.AdicionarSistemaFinanceiro(item)
.subscribe ((response : SistemaFinanceiro) =>{


this.sistemaForm.reset();

this.sistemaService.CadastraUsuarioNoSistema(response.id, "lukas.mota@icloud.com")
.subscribe((response:any) =>
{
  debugger
})
, (error) => console.error(error), () => {}
    
  })
    , (error) => console.error(error), () => {}
  

}}
