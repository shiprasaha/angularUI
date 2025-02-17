import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { SharedService } from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowDepComponent } from './department/show-dep/show-dep.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddDepComponent,
    EmployeeComponent,
    AddEmpComponent,
    ShowEmpComponent,
    ShowDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
