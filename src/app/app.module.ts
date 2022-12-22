import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeService } from './time.service';
import { HelloComponent } from './hello/hello.component';
import { ChildComponent } from './hello/child/child.component';
import { ChildOutputComponent } from './hello/child-output/child-output.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    HelloComponent,
    ChildComponent,
    ChildOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
