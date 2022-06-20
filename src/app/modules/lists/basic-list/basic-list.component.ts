import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {

  //to render button or spinner
  charging: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(): void {
    //changed boolean when i click it
    this.charging = !this.charging;
  }

}
