import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './services/register.service';
import { DisplayComponent } from './component/display/display.component';
import { LoginComponent } from './componenet/login/login.component';
import { AdminComponent } from './componenet/admin/admin.component';
import { BranchManagerComponent } from './componenet/branch-manager/branch-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    RegisterComponent,
    HomeComponent,
    DisplayComponent,
    LoginComponent,
    AdminComponent,
    BranchManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
