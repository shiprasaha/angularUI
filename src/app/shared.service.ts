import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/department');
  }

  addDepartment(val: any) {
    console.log(val);
    return this.http.post(this.APIUrl + '/Department', val);
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Employee');
  }

  addEmployee(val: any) {
    return this.http.post(this.APIUrl + '/Employee', val);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Employee/GetAllDepartmentNames');
  }

}