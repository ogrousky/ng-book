import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
