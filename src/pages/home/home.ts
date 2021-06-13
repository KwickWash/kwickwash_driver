import { Component,OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { OrderrequestPage } from '../orderrequest/orderrequest';
import { SelectclothesPage } from '../selectclothes/selectclothes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  dataService:any;
  orderList:any;
  CounterData:any;
  id:any;
  public postData={
    id:sessionStorage.getItem("userId")
  }
  public api:ServiceProvider


  constructor(
    public navCtrl: NavController,
    //private serProvider:ServiceProvider,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController
    ) {}
  
  ngOnInit() {   
      console.log(sessionStorage.getItem("userId"));
      
      this.authService.getProfile(sessionStorage.getItem("mobile"))
      .subscribe((res1:any)=>{
        console.log('Shop Id:'+res1[0]["shopUserId"]);
        sessionStorage.setItem("shopUserId",res1[0]["shopUserId"]);  
        sessionStorage.setItem("name",res1[0]["name"]);  
        sessionStorage.setItem("emailId",res1[0]["emailId"]);  
        sessionStorage.setItem("mobile",res1[0]["mobile"]);   
        this.getDataService();
        this.getCounterDt();
      });    
  }

  async getDataService(){
    console.log('welcome');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });  
    loading.present();  
    this.authService.getService()
    .subscribe(res=>{
      console.log(res);
      this.dataService=res;
      loading.dismiss();  
    });    
  }

  async getCounterDt(){
    this.authService.getCounter(sessionStorage.getItem("userId"))
    .subscribe(res=>{
      this.CounterData=res;
    });
  }


  selectproduct(sid,serviceName){
    sessionStorage.setItem("srId",sid);  
    sessionStorage.setItem("srName",serviceName);
    console.log(sid); 
    this.navCtrl.push(SelectclothesPage)
  }


  newReq(){
    this.navCtrl.push(OrderrequestPage);
  }
}
