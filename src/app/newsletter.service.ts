import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {

  constructor() { }

  subscribe(email: string){
    console.log("In Newsletter service, email=", email);
  }
}
