import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentServes } from './student.serves';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentServes],
  bootstrap: [AppComponent]
})
export class AppModule { }
