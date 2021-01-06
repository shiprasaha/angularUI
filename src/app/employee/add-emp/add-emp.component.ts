import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  _id: number;
  static latestId: any;

  constructor(private service: SharedService) {
    this._id = AddEmpComponent.incrementId()
  }

  @Input() emp: any;
  EmployeeId: string;
  EmployeeName: string;
  Department: string;
  DateOfJoining: string;

  DepartmentsList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentsList = data;

      // this.EmployeeId = this.emp.EmployeeId;
      // this.EmployeeName = this.emp.EmployeeName;
      // this.Department = this.emp.Department;
      // this.DateOfJoining = this.emp.DateOfJoining;
    });
  }

  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }

  static incrementId() {
    !this.latestId? 1 :this.latestId++;
    return this.latestId;
  }
}
