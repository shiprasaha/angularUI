import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  DepartmentList: any = [];
  ModalTitle: string;
  ActivateAddDepComp: boolean = false;
  dep: any;

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  addClick() {
    this.dep = {
      DepartmentID: 0,
      DepartmentName: ""
    }

    this.ModalTitle = "Add Department";
    this.ActivateAddDepComp = true;
  }

  closeClick() {
    this.ActivateAddDepComp = false;
    this.refreshDepartmentList();
  }

  refreshDepartmentList() {
    this.service.getDepList().subscribe(data => {
      this.DepartmentList = data;
    })
  }

}
