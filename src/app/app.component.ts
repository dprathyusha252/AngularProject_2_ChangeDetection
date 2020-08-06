import { Component } from '@angular/core';
import {User} from './user.component';
import {NewsLetterService} from './newsletter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = {
      firstName: 'Prathyusha',
      lastName: 'Davuluru'
  };
  constructor(private newsletterService: NewsLetterService){

  }

  subscribe(email:string) {
    this.newsletterService.subscribe(email);
  }

  changeUserName() {
    this.user.firstName = 'Bob';
  }

}
