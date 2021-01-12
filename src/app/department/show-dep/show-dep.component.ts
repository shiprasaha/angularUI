import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})

//TODO: Create logic for Show Department List on UI
export class ShowDepComponent implements OnInit {

  constructor(private readonly service: SharedService) { }

  ngOnInit(): void {
  }
}
