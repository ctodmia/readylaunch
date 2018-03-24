import { Component, OnInit } from '@angular/core';
import { Season } from '../models/season.model';
import { Day } from '../models/day.model';
import { SeasonService } from '../../services/season.service'
import * as moment from 'moment';


declare var localStorage;
@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss']
})
export class CollectionViewComponent implements OnInit {
  seasonList = JSON.parse(localStorage.getItem("seasonList")) || [];
  season: Season;
  constructor(private seasonService: SeasonService) { 
    this.season = new Season();
  }
  days = [];
  
  ngOnInit() {
    JSON.parse(localStorage.getItem("seasonList")) ? null : this.addSeason();
  }
  
  createSeason (response) {
    let season = new Season();
    console.log('this is the season list length :', this.seasonList.length);
    season.id = this.seasonList.length+1;
    season.number = this.seasonList.length+1;
    season.startDate = moment().format('L');
    season.endDate = moment().add(30, 'days').calendar();
    this.createDays(season.startDate);
    season.days = this.days;
    season.author = response && response.author ? response.author : null;
    season.goals = response && response.goal ? response.goal : null;
    season.reward = response && response.reward ? response.reward : null;
    season.title = response && response.title ? response.title : '30 Days of Success';
    season.daysCompleted = 0;
    console.log('the current seasonList : ', this.seasonList);
    return season;
  }

  createDays (start) {
    for(let i = 1; i < 31; i++) {
      let day = new Day();
      let date = moment(start).add(i-1, 'days').format('L');    
      day.number = i;
      day.date = date;
      day.currentDay = false;
      day.checkedIn = false;
      day.enable = false;

      this.days.push(day)
    }
    console.log('date created : ', this.days);
  }

  addSeason () {
    this.seasonList.push(this.createSeason(null));
    localStorage.setItem("seasonList", JSON.stringify(this.seasonList));
    // localStorage.setItem("lastname", "Smith");
    console.log('this is the season list :', JSON.parse(localStorage.getItem("seasonList")))
  }

}
