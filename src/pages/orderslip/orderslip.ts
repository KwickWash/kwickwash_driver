import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RatePage } from '../rate/rate';

@Component({
  selector: 'page-orderslip',
  templateUrl: 'orderslip.html'
})
export class OrderslipPage {

  constructor(public navCtrl: NavController) {

  }
  
  rate(){
   this.navCtrl.push(RatePage);
  }

}
