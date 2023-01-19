import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { QuizendComponent } from './quizend/quizend.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizhomeComponent,
    QuizpageComponent,
    QuizendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
