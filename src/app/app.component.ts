import { Component, OnInit } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'loginPage';
  constructor(private oauthService: OAuthService) {}

  ngOnInit(): void {
    this.configure();

    // localStorage.removeItem('access_token');
  }
  private configure() {
    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin;
    console.log(window.location.origin, ' window.location.origin');

    // The SPA's id. The SPA is registerd with this id at the auth-server
    this.oauthService.clientId = 'doctorclient';

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    this.oauthService.scope =
      'IdentityServerApi openid profile email offline_access taminapi receptionsapi identity tenantapi humanapi irimcapi medicalrecordsapi webmedarioagg ihioapi ihiosignalrhub';

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = false; // ID_Token

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(localStorage);

    this.oauthService.dummyClientSecret =
      '511536EF-F270-4058-80CA-1C89C192F69A';

    this.oauthService.issuer = 'null';
    this.oauthService.requireHttps = false;
    this.oauthService.strictDiscoveryDocumentValidation = false;

    // Discovery Document of your AuthServer as defined by OIDC
    // let url = 'https://localhost:5001/.well-known/openid-configuration';
    // let url = 'http://identity.darupich.com';
    let url = 'https://identity.darupich.com/.well-known/openid-configuration';

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument(url);
    this.oauthService.events.subscribe((e) => {
      if (e.type == 'token_expires') {
        // console.log('token_expires event before expiration',new Date());
        // console.log('hasValidAccessToken on token_expires event before expiration', this.oauthService.hasValidAccessToken());
        // this.oauthService.refreshToken();
      }
      if (e.type == 'token_refreshed') {
        console.log('token has been refreshed here');
      }
    });
  }

  // onSubmite(){
  //   this.router.navigate(['/'])
  // }
}
