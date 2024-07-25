
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  public autheService: AuthService) {

  }



  ngOnInit(): void {

    this.loginForm = this.formBuilder.group ({
          email: ['', [Validators.required, Validators.email]],
          senha: ['', [Validators.required]]
        });
  }


  get dadosForm() {
    return this.loginForm.controls;
  }


  loginUser() {

    this.loginService.login(this.dadosForm["email"].value, this.dadosForm["senha"].value).subscribe(


        (response) =>{
      const token = response.token;
        this.autheService.setToken(token);
        this.autheService.setEmailUser(this.dadosForm["email"].value);
        this.autheService.UsuarioAutenticado(true);
        this.router.navigate(["/dashboard"]);
        //alert (token);

      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to log in';
      }


    )

  }


}



