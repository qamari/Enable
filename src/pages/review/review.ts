import { Component } from '@angular/core';
import { Parse } from 'parse';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-review',
	templateUrl: 'review.html'
})
export class ReviewPage {
	searchString = "";
	listOfThings = [];
	fullListOfBuildings = [];
	constructor(public navCtrl: NavController) {
		Parse.initialize("ASDFGHJKL"); 
		Parse.serverURL = 'https://hackohio.herokuapp.com/parse';

		this.refreshBuildings();
	}

	refreshBuildings() {
		let me = this; // needed for Parse query to access "this." variables
		let query = new Parse.Query("Building");
		query.find().then(function(results) {
			me.fullListOfBuildings = [];
			results.forEach(function(item) {
				// mapping Parse objects to our custom objects
				let newItem = {
					"name" : item.get("Name"),
					"avgRating" : item.get("AverageRating"),
					"totalRatings" : item.get("TotalRatings"),
					"imageURL" : item.get("ImageURL")
				};
				me.fullListOfBuildings.push(newItem);
				me.listOfThings = me.fullListOfBuildings;
				me.runSearch();
			});
		}, function(error) {
			alert("There was an error: " + error + JSON.stringify(error));
		});
	}	

	textChanged(event) {
		this.searchString = event.target.value;
		this.runSearch();
	}

	runSearch() {
		let me = this;
		this.listOfThings = [];
		this.fullListOfBuildings.forEach(function(item) {
			if (item.name.toLowerCase().indexOf(me.searchString.toLowerCase()) !== -1) {
				me.listOfThings.push(item);
			}
		});
	}
}
