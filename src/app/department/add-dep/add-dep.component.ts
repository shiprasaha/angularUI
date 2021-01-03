import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {

  constructor(private readonly service: SharedService) { }

  @Input() dep: any;
  DepartmentID: number;
  DepartmentName: string;

  ngOnInit(): void {
    this.DepartmentID = this.dep.DepartmentID;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    let val = {
      DepartmentID: this.DepartmentID,
      DepartmentName: this.DepartmentName
    };

    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
