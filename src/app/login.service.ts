import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { CustomCookieService } from "./custom-cookie.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private apiUrl = 'http://51.158.107.27:82/api/login';

  constructor(private http: HttpClient, private cookieService: CustomCookieService) { }

  login(login: string, password: string): Observable<HttpResponse<any>> {
    const body = { login, password };

    // Указываем observe: 'response' для получения полного объекта ответа
    return this.http.post(this.apiUrl, body, { observe: 'response' });
  }

  saveTokens(tokens: any): void {
    this.cookieService.set('token', tokens.token);
    this.cookieService.set('refreshToken', tokens.refreshToken);
  }
}
