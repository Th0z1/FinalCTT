import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { myResults } from '../../fetchResults';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  objectResults : myResults;
  arrayResults = [];
  taskAvailable = 0;
  question= '';
  answer='';
 
 constructor(public navCtrl: NavController, public navParams: NavParams) {

  

  this.objectResults = new myResults();
  this.arrayResults = this.objectResults.returnAnswers();
  console.log( this.arrayResults );
  console.log(this.question);
  console.log(this.answer);
  
  
  
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }
  memo(task){
    console.log(task);
    
    this.navCtrl.push("MemoPage",{task: task});
  }
}
