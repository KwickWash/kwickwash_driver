import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { HomePage } from '../pages/home/home';
import { MyordersPage } from '../pages/myorders/myorders';
import { OrderconfirmedPage } from '../pages/orderconfirmed/orderconfirmed';
import { OrderslipPage } from '../pages/orderslip/orderslip';
import { OtpPage } from '../pages/otp/otp';
import { PasswordPage } from '../pages/password/password';
import { ProfilePage } from '../pages/profile/profile';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { OrderrequestPage } from '../pages/orderrequest/orderrequest';
import { WelcomePage } from '../pages/welcome/welcome';
import { HellopagePage } from '../pages/hellopage/hellopage';
import { IonicStorageModule } from '@ionic/storage';
import { SelectclothesPage } from '../pages/selectclothes/selectclothes';



@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    HomePage,
    MyordersPage,
    OrderconfirmedPage,
    OrderslipPage,
    OtpPage,
    PasswordPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    TabsPage,
    OrderrequestPage,
    WelcomePage,
    HellopagePage,
    SelectclothesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    HomePage,
    MyordersPage,
    OrderconfirmedPage,
    OrderslipPage,
    OtpPage,
    PasswordPage,
    ProfilePage,
    SigninPage,
    SignupPage,
    TabsPage,
    OrderrequestPage,
    WelcomePage,
    HellopagePage,
    SelectclothesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
