import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import{SistemaFinanceiro} from '../models/SistemaFinanceiro'



@Injectable({
  providedIn: 'root'
})
export class SistemaService
{
  constructor(private httpClient: HttpClient) { }


  private readonly baseURL = environment["endPoint"];
 AdicionarSistemaFinanceiro(sistemaFinanceiro : SistemaFinanceiro)
  {
    return this.httpClient.post<SistemaFinanceiro>(`${this.baseURL}/this.AdicionarSistemaFinanceiro`
      ,sistemaFinanceiro)

  }

  ListarSistemaUsuario(emailUsuario : string)
  {
    return this.httpClient.get(`${this.baseURL}/this.ListarSistemaUsuario?emailUsuario=${emailUsuario}`);
  }


  CadastraUsuarioNoSistema(idSistema: number, emailUsuario: string)
  {
    return this.httpClient.post<any>(`${this.baseURL}
      /this.CadastraUsuarioNoSistema?idSistema=${idSistema}&emailUsuario=${emailUsuario}`,null)

  }

}




