import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { LoginService } from "./login.service";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { CustomCookieService } from "./custom-cookie.service"; // Import your custom cookie service

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

  // Add explicit types for formControl's
  loginControl: FormControl = this.form.get('login') as FormControl;
  passwordControl: FormControl = this.form.get('password') as FormControl;

  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private customCookieService: CustomCookieService, // Use your custom cookie service
    private loginService: LoginService,
  ) { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.form.valid) {
      // Use control values directly
      const login = this.loginControl.value;
      const password = this.passwordControl.value;

      this.loginService.login(login, password).subscribe(
        (response: HttpResponse<any>) => {
          if (response && !response.body.hasError) {
            this.customCookieService.saveTokens(response);
          } else {
            console.error('Error on login:', response.body.errors);
          }
        },
        error => {
          console.error('Error on login:', error);
        }
      );
    }
  }
}
