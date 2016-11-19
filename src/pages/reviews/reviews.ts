import { Component } from '@angular/core';
import { Parse } from 'parse';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html'
})
export class ReviewsPage {

	listOfThings = ['test', 'test2'];

  constructor(public navCtrl: NavController) {
  	Parse.initialize("ASDFGHJKL"); 
  	Parse.serverURL = 'https://hackohio.herokuapp.com/parse';
  }

  getObjects() {
  	let query = new Parse.Query("Building");
  	query.find().then(function(results) {
  		var buildings = [];
  		results.forEach(function(item) {
  			buildings.push(item.get("Name"));
  		});

  		alert(JSON.stringify(buildings));

  		this.listOfThings.concat(buildings);
  		alert(JSON.stringify(this.listOfThings));
  	}, function(error) {
  		alert("There was an error: " + error + JSON.stringify(error));
  	});
  }

  textChanged(event) {

  }

}
