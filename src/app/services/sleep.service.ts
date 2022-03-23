import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
	}
	this.allsdata();
	this.allndata();
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
		Storage.set({
			key:"overnight",
			value: JSON.stringify(sleepData)
		})
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
		Storage.set({
			key:"sleepiness",
			value: JSON.stringify(sleepData)
		})
	}

	public allsdata(){
		Storage.get({key:'overnight'}).then((data)=> {
			let res = JSON.parse(data.value);
			if(res){
				res.array.forEach(ress => {
					let temp:OvernightSleepData = new OvernightSleepData(new Date(ress['sleepStart']), new Date(ress['sleepEnd']));
					SleepService.AllSleepData.push(temp);
					SleepService.AllOvernightData.push(temp);
				});
				
			}
		})	
	}
	
	public allndata(){
		Storage.get({key:'sleepiness'}).then((data)=> {
			let res = JSON.parse(data.value);
			if(res){
				res.array.forEach(ress => {
					let temp:StanfordSleepinessData = new StanfordSleepinessData((ress['loggedValue']), (ress['loggedAt']));
					SleepService.AllSleepData.push(temp);
					SleepService.AllSleepinessData.push(temp);
				});
				
			}
		})	
	}
	
}
