import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { MyordersPage } from '../myorders/myorders';
import { SigninPage } from '../signin/signin';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage implements OnInit{
  dataUser:any;

  public api:ServiceProvider

  ngOnInit() {   
    this.getProfile();
   }

  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {
  }
  
  getProfile(){
    console.log('welcome');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });  
    loading.present();  

    //End Loader        
    this.authService.getProfile(sessionStorage.getItem("mobile"))
    .subscribe(res=>{
      this.dataUser=res;
      loading.dismiss();  
    }); 
  }

   profile(){
   this.navCtrl.push(ProfilePage);
  }
   myorders(){
   this.navCtrl.push(MyordersPage);
  }
  
  signout(){   
    //sessionStorage.setItem("userId",null);
    sessionStorage.removeItem("mobile")
    this.navCtrl.push(SigninPage);
  }

}
