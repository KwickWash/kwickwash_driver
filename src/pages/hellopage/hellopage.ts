import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-hellopage',
  templateUrl: 'hellopage.html',
})
export class HellopagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goDashboard(){
    this.navCtrl.setRoot(TabsPage)
  }
}
