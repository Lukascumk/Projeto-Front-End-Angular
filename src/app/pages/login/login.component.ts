
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private loginService: LoginService) {

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

      (response) => {
        const token = response.token;
        alert(token);
        this.router.navigate(["/dashboard"]);

      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to log in';
      }

    )

  }


}



