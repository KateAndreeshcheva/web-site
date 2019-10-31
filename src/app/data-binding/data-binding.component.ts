import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  userName = '';
  isEmptyName = false;
  secretPass = 'blalala';
  showPass = false;
  timeArray = [];
  names = [];

  constructor() {
   }

  ngOnInit() {
  }

  addTime(){
    this.timeArray.push(this.timeArray.length + 1);
    this.names.push(this.userName);
  }
}
