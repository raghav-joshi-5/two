import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillsComponent } from 'src/skills/skills.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,SkillsComponent,StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
