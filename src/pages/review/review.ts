import { Component } from '@angular/core';
import { Parse } from 'parse';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-review',
	templateUrl: 'review.html'
})
export class ReviewPage {
	listOfThings = [];
	constructor(public navCtrl: NavController) {
		Parse.initialize("ASDFGHJKL"); 
		Parse.serverURL = 'https://hackohio.herokuapp.com/parse';

		this.refreshBuildings();
	}

	refreshBuildings() {
		let me = this; // needed for Parse query to access "this." variables
		let query = new Parse.Query("Building");
		query.find().then(function(results) {
			me.listOfThings = [];
			results.forEach(function(item) {
				me.listOfThings.push(item.get("Name"));
			});
		}, function(error) {
			alert("There was an error: " + error + JSON.stringify(error));
		});
	}	
}
