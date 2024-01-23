import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { LoginService } from "./login.service";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { CustomCookieService } from "./custom-cookie.service";

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'parfenov_arkhipov_test';
  errorMessage = ''; // Добавляем переменную для хранения сообщения об ошибке

  form = this.fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required],
  });

  // Add explicit types for formControl's
  loginControl: FormControl = this.form.get('login') as FormControl;
  passwordControl: FormControl = this.form.get('password') as FormControl;

  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private customCookieService: CustomCookieService,
    private loginService: LoginService,
  ) { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.form.valid) {
      const login = this.loginControl.value;
      const password = this.passwordControl.value;

      this.loginService.login(login, password).subscribe(
        (response: HttpResponse<any>) => {
          if (response && !response.body.hasError) {
            this.customCookieService.saveTokens(response.body);
          } else {
            this.errorMessage = response.body.errors[0]; // Отображаем сообщение об ошибке
            console.error('Error on login:', this.errorMessage);
          }
        },
        error => {
          this.errorMessage = 'An unexpected error occurred.';
          console.error('Error on login:', error);
        }
      );
    }
  }
}
