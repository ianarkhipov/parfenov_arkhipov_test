import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomCookieService} from "./custom-cookie.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {


    private apiUrl = 'http://51.158.107.27:82/api/login'

  constructor(private http: HttpClient, private cookieService: CustomCookieService) { }
  login(login: string, password: string): Observable<any> {
    const body = { login, password };

    return this.http.post(this.apiUrl, body);
  }

  saveTokens(tokens: any): void {
    this.cookieService.set('token', tokens.token);
    this.cookieService.set('refreshToken', tokens.refreshToken);
  }
}

  // sendUserInfo(data: string) {
  //   return this.http.post('http://51.158.107.27:82/api/login', data);
  // }
  // getData() {
  //   return this.http.get('http://51.158.107.27:82/api/login');
  // }

// }
