import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable()
export class SeasonService {
  storage = JSON.parse(localStorage.getItem('seasonList'))
  currentSeason: any;
  constructor() { }
  
  getSeason(id:number) {
    let currentSeason = null;
    this.storage.forEach(season => {
      if(season.id === id) {
        currentSeason = season;
      }
    });
    return currentSeason;
  }

  setDefaultSeason() {
    this.currentSeason = this.currentSeason && this.storage ? this.currentSeason : this.storage[this.storage.length-1];
    localStorage.setItem('currentSeason', JSON.stringify(this.currentSeason))
  }
  
  getCurrentSeason() {
    
    return JSON.parse(localStorage.getItem('currentSeason'));
  }

  getCurrentDay() {
    let currentDay;
    this.currentSeason.days.forEach((day, i, index)=> {
      let todaysDate = moment().format('L');
      if(todaysDate == day.date) {
        console.log('todays day', day);
        currentDay = day;
      }
    });
    return currentDay;
  }

  updateDay(update) {
    this.currentSeason.days.forEach((day, i, index)=> {
      let todaysDate = moment().format('L');
      if(update.number == day.number) {
       day = update;
      }
    });
    localStorage.setItem('currentSeason', JSON.stringify(this.currentSeason))    
  }
  addpoints() {
    this.currentSeason.daysCompleted++;
    localStorage.setItem('currentSeason', JSON.stringify(this.currentSeason))    
    console.log(this.currentSeason)
  }
}
