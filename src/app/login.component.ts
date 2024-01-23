import {Component, Inject} from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { LoginService } from "./login.service";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";



@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'parfenov_arkhipov_test';

  form = this.fb.group({
    login: ["", Validators.required],
    password: ["", Validators.required],
  });

  // Добавьте явные типы для formControl'ов
  loginControl: FormControl = this.form.get('login') as FormControl;
  passwordControl: FormControl = this.form.get('password') as FormControl;

  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(CookieService) private cookieService: CookieService,
    private loginService: LoginService,
    ) { }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.form.valid) {
      // Используйте значений контролов напрямую
      const login = this.loginControl.value;
      const password = this.passwordControl.value;

      this.loginService.login(login, password).subscribe(response => {
        if (response && !response.hasError) {
          this.loginService.saveTokens(response.data.tokens);
        } else {
          console.error('Ошибка при входе:', response.errors);
        }
      });
    }
  }
}
