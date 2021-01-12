import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})

//TODO : Create logic to show employee List on UI
export class ShowEmpComponent implements OnInit {

  constructor(private readonly service: SharedService) { }

  ngOnInit(): void {
  }
}