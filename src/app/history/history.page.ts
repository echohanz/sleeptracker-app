import { Component, OnInit } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
   ovnd: OvernightSleepData[]=[];
   ssnd: StanfordSleepinessData[]=[];

  constructor(public sleepService:SleepService, public alert:AlertController) {
     this.ovnd = SleepService.AllOvernightData;
     this.ssnd = SleepService.AllSleepinessData;
   }

  ngOnInit() {
  }

}
