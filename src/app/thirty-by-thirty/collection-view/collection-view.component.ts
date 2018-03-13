import { Component, OnInit } from '@angular/core';
import { Season } from '../models/season.model';
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
  constructor() { 
    this.season = new Season();
  }
  days = [];

  ngOnInit() {
    // this.createSeason();
    this.addSeason();

  }
  
  createSeason (response) {
    let season = new Season();
    console.log('this is the season list length :', this.seasonList.length);
    season.number = this.seasonList.length+1;
    season.startDate = moment().format('L');
    season.endDate = moment().add(30, 'days').calendar();
    season.days = this.days;
    season.author = response && response.author ? response.author : null;
    season.goals = response && response.goal ? response.goal : null;
    season.reward = response && response.reward ? response.reward : null;
    season.title = response && response.title ? response.title : '30 Days of Success';
    season.daysCompleted = 0;
    return season;
    console.log('the current seasonList : ', this.seasonList);
  }

  addSeason () {
    this.seasonList.push(this.createSeason());
    localStorage.setItem("seasonList", JSON.stringify(this.seasonList));
    // localStorage.setItem("lastname", "Smith");
    console.log('this is the season list :', JSON.parse(localStorage.getItem("seasonList")))
  }

}
