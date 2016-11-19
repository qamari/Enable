import { Component } from '@angular/core';
import { Parse } from 'parse';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html'
})
export class ReviewsPage {

	 listOfThings = [];

  constructor(public navCtrl: NavController) {
  	Parse.initialize("ASDFGHJKL"); 
  	Parse.serverURL = 'https://hackohio.herokuapp.com/parse';

  	let query = new Parse.Query("Building");
  	query.find().then(function(results) {
  		results.forEach(function(item) {
  			this.listOfThings.push(item.get("Name"));
  		});
  	}, function(error) {
  		alert("There was an error: " + error + JSON.stringify(error));
  	});
  }

  textChanged(event) {

  }

}
