import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
