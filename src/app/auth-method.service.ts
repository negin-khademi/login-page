import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthMethodService {
  constructor(private oauthService: OAuthService) {}

  async signInByIhio(credentials: any) {
    let headers;

    headers = new HttpHeaders({
      'login-type': 'IHIO',
      'is-verified': 'true',
    });

    return await this.oauthService
      .fetchTokenUsingPasswordFlow(
        credentials.username,
        credentials.password,
        headers
      )
      .then(async (resp) => {
        localStorage.setItem('token_type', resp.token_type);

        localStorage.setItem('access_token', resp.access_token);

        return await this.oauthService.loadUserProfile().then((res: any) => {
          localStorage.setItem('userId', res.info.sub);

          return res.info;
        });
      });
  }
}
