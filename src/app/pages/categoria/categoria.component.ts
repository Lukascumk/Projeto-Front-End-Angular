import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { SistemaFinanceiro } from 'src/app/models/SistemaFinanceiro';
import { MenuService } from 'src/app/services/menu.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/Categoria';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();
  categoriaForm: FormGroup;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    public sistemaService: SistemaService,
    public authService: AuthService,
    public categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    this.menuService.menuSelecionado = 3;

    this.categoriaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      sistemaSelect: ['', [Validators.required]]
    });

    this.ListarSistemasUsuario();
  }

  dadorForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    debugger;

    var dados = this.dadorForm();
    
    let item = new Categoria();

    item.Nome = dados['name'].value;
    item.Id = 0;
    item.idSistema = parseInt(this.sistemaSelect.id)

    this.categoriaService.AdicionarCategoria(item)
  .subscribe({
    next: (response: Categoria) => {
      this.categoriaForm.reset();
    },
    error: (error) => console.error(error),
    complete: () => {}
  });

  }

  ListarSistemasUsuario() {
    this.sistemaService.ListarSistemasUsuario(this.authService.getEmailUser())
      .subscribe({
        next: (response: Array<SistemaFinanceiro>) => {
          const lisSistemaFinanceiro: SelectModel[] = response.map(x => ({
            id: x.Id.toString(),
            name: x.Nome
          }));
          this.listSistemas = lisSistemaFinanceiro;
        },
        error: (error) => console.error(error)
      });
  }
}
