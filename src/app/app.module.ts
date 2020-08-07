import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewsLetterComponent } from './newsletter.component';
import {NewsLetterService} from './newsletter.service';


@NgModule({
  declarations: [
    AppComponent,
    NewsLetterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsLetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
