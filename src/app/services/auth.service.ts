import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'


  })

export class AuthService 
{
    private usuarioAutenticadoPortal : boolean = false;
    private token : any;
    private user: any;


    constructor(private httpclient: HttpClient)
    { 
      
    
    }

    checkToken()
    {
      return Promise.resolve(true);

    }
    UsuarioAutenticado (status:boolean)
    {
      localStorage.setItem('usuarioAutenticadoPortal',JSON.stringify(status));
      this.usuarioAutenticadoPortal = status;
    }

    UsuarioEstaAutentificado(): Promise<boolean> {
      this.usuarioAutenticadoPortal = localStorage.getItem('usuarioAutenticadoPortal') === 'true';
      return Promise.resolve(this.usuarioAutenticadoPortal);
    }

    setToek(toke:string) {

      localStorage.setItem('token',toke);
      this.token = toke;
    }

    get getToken() {
      this.token = localStorage.getItem('token');
      return this.token;
    }
    limparToken() {
      this.token = null;
      this.user = null;
    }

    limparDadosUsuario(){
      this.UsuarioAutenticado(false);
      this.limparToken();
      localStorage.clear();
      sessionStorage.clear();
    }

  }

