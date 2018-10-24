import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-memo',
  templateUrl: 'memo.html',
})
export class MemoPage {
  questions=[];
  answer ='';
  task=''

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.question = navParams.get("questions");
    this.answer = navParams.get("answer");
    this.task = navParams.get("task");

    console.log(this.task);
    firebase.database().ref('/'+this.task+'/').once('value').then((snapshot) => {
    
      snapshot.forEach( snap =>{
              this.questions.push({question:snap.val().question, answer:snap.val().answer});
             
             console.log( snap.val().question)
      })
     
  // ...
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemoPage');
  }

}
