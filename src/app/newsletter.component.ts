import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {User} from './user.component';

@Component({
  selector: 'app-newsletter',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
