import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';


import { AppComponent } from './app.component';
import { SchoolComponent } from './components/school/school.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { SchoolService } from './services/school.service';
import { SchoolListComponent } from './components/school-list/school-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    NavbarComponent,
    DashboardComponent,
    SchoolListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    Routing
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
