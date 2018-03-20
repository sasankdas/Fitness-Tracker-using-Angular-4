import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-trianing.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
progress=0;
timer;
  constructor(private dailog:MatDialog) { }

  ngOnInit() {
    this.timer= setInterval(()=>{this.progress+=5
    if(this.progress>=100){
    clearInterval(this.timer);
    } }, 1000);
     
  }
  onStop(){
    clearInterval(this.timer);
    this.dailog.open(StopTrainingComponent);
  }

}
