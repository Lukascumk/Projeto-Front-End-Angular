import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import{SistemaFinanceiro} from '../models/SistemaFinanceiro'


@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  private readonly baseURL = environment.endPoint;

  constructor(private httpClient: HttpClient) {}

  AdicionarSistemaFinanceiro(sistemaFinanceiro: SistemaFinanceiro) {
    return this.httpClient.post<SistemaFinanceiro>(`${this.baseURL}/AdicionarSistemaFinanceiro`, sistemaFinanceiro);
  }

  ListarSistemasUsuario(emailUsuario: string) {
    return this.httpClient.get<Array<SistemaFinanceiro>>(`${this.baseURL}/ListarSistemasUsuario?emailUsuario=${emailUsuario}`);
  }

  CadastraUsuarioNoSistema(idSistema: number, emailUsuario: string) {
    return this.httpClient.post<any>(`${this.baseURL}/CadastraUsuarioNoSistema?idSistema=${idSistema}&emailUsuario=${emailUsuario}`, null);
  }
}