import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeasonService } from '../../services/season.service';
import { Season } from '../models/season.model'

@Component({
  selector: 'app-season-view',
  templateUrl: './season-view.component.html',
  styleUrls: ['./season-view.component.scss']
})
export class SeasonViewComponent implements OnInit {
  season: any;
  today: any;

  constructor(private seasonService: SeasonService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getSeason();
    this.getCurrentDay();
  }

  getSeason () {
    const id = +this.route.snapshot.paramMap.get('id');
    this.season = this.seasonService.getSeason(id)
    this.seasonService.setDefaultSeason();
    console.log('this is a season :', this.seasonService.getCurrentSeason());
  }

  getCurrentDay() {
    this.today = this.seasonService.getCurrentDay();
    console.log('thisis today: ', this.today)
  }

}
