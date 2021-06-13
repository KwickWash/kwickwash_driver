import { Component, OnInit } from '@angular/core';
import { NavController,AlertController, LoadingController } from 'ionic-angular';
import { PasswordPage } from '../password/password';
import { SignupPage } from '../signup/signup';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from'@ionic/storage';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage implements OnInit{
  public postData={
    username:'',
    password:'',
    role:'driver'
  }
  
  ngOnInit() {   
   
  }

  public api:ServiceProvider
  constructor(
    public navCtrl: NavController,
    private authService:ServiceProvider,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController,
    public storage:Storage
    ) {}
  
   validateInput(){
      let username=this.postData.username.trim();
      let password=this.postData.password.trim();
      //let role=this.postData.role.trim();
      return(this.postData.password && this.postData.password && username.length>0 && password.length>0)
  }

  loginAction(){    
    
    if(this.validateInput()){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });  
    loading.present();  
      this.authService.login(this.postData).subscribe((res:any)=>{
        if(res!="0"){
          loading.dismiss();  
          sessionStorage.setItem("userId",res);  
          sessionStorage.setItem("mobile",this.postData.username);       
          sessionStorage.setItem("password",this.postData.password);
          sessionStorage.setItem("role",this.postData.role);
          //this.storageService.store(AuthConstants.AUTH,res.username);     
          console.log('Customer Id:'+res);
          this.navCtrl.setRoot(TabsPage)       
        }else{
          loading.dismiss();  
          this.alertMess('Incorrect username and password.');
          console.log('Incorrect username and password.');
        }
      },
      (error:any)=>{
        console.log('Network connection error.',error);
      }
      )      
    }else{
      this.alertMess('Please enter username and password!');
      console.log('please enter username and password!');
    }
     
  }

  addLocalStorage(){
    this.storage.set('username', this.postData.username);
    this.storage.set('password',this.postData.password);
    console.log(this.postData.username);
}

  async alertMess(mess:string){
    const prompt=await this.alertCtrl.create({      
      message:mess,
      buttons: [  
        {  
          text: 'OK',  
          handler: data => {  
            console.log('Ok');  
          }  
        }  
      ]
    })
    await prompt.present();
  }

  async showLoading() {  
    const loading = await this.loadingCtrl.create({      
    duration: 5000,  
    showBackdrop: false,  
    spinner: 'lines'  
    });  
    loading.present();  
  }

  async showLoader() {
    const loading = await this.loadingCtrl.create({     
      showBackdrop: false,  
      spinner: 'lines'  
    });
    loading.present();
  }

 
  
  password(){
        this.navCtrl.push(PasswordPage);       
    }
  signup(){
        this.navCtrl.push(SignupPage);
    }
}
