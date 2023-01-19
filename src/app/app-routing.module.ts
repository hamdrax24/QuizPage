import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizendComponent } from './quizend/quizend.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { QuizpageComponent } from './quizpage/quizpage.component';

const routes: Routes = [
  {path: 'quizhome', component: QuizhomeComponent},
  {path: 'quizpage', component: QuizpageComponent},
  {path: 'quizend',  component: QuizendComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
