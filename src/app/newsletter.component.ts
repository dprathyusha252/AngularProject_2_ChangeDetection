import { Component, Input, Output, EventEmitter } from '@angular/core';
import {User} from './user.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsLetterComponent {

  @Input()user: User;

  @Output()
  subscribe = new EventEmitter();

  subscribeToNewsletter(email:string) {
      this.subscribe.emit(email);
  }

  constructor() { }

}
