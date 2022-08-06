import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ AuthService ]
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  Exit(){
    this.authService.logout()
    }
}
