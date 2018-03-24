import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit {
  today:any;
  constructor(private seasonService : SeasonService) { }

  ngOnInit() {
    this.checkIn()
  }

  checkIn() {
    this.today = this.seasonService.getCurrentDay();  
    this.today.checkIn = true;
    this.today.checkedIn = true;
    this.seasonService.updateDay(this.today);
    console.log(this.today)  
  }
  addPoints() {
    this.seasonService.addpoints();
  }
}
