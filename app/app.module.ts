import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentXComponent } from './component-x/component-x.component';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ComponentYComponent } from './component-y/component-y.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ComponentXComponent,
    ComponentYComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    CommonModule ,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
