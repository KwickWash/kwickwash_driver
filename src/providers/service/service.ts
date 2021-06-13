import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import {map} from 'rxjs/operators';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//const API:string="http://api.kwickwash.in/api/kwickService";

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable()

export class ServiceProvider {
  public items: any = [];
  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  //getService(){
    
    //return this.http.get(API);
  //}

  post(serviceName: string, data:any )
  {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options={headers : header, withCredintials: false};
   
    const url=environment.apiUrl +serviceName;

    return this.http.post(url,JSON.stringify(data),options)
  }

  private extractData(res:Response){
    let body=res;
    return body ||{};
  }

  

  get(serviceName: string){
    const url=environment.apiUrl +serviceName;
    return this.http.get(url,httpOptions).pipe(
      map(this.extractData));
  }

  getService(){
    return this.get('myserviceApp/'+sessionStorage.getItem("shopUserId"));
  }

  getProduct(serviceId:any){
    return this.get('myproduct?sid='+serviceId+'&uid='+sessionStorage.getItem("shopUserId"));
  }

  login(postData:any){
    return this.post('login',postData);
  }

  getCity(){
    return this.get('city');
  }

  signUp(postData:any){
    return this.post('driver',postData);
  }  

  getArea(postData:any){
    return this.get('area/GetAreaList?id=' + postData + '&val=1&vals=3');
  }

  getOrderList(postData:any){
    return this.get('OrderList/GetOrderHistory?orderid=0&status=0&cid='+postData+'');
  }

  getOrderRequestList(postDate:any){
    return this.get('kwickOrder/GetReqOrderHistory?id=0&val=0&cid=0&did='+postDate+'');
  }
 
  getProfile(postData:any){
    console.log(postData);
    return this.get('driver/Getdriver?mobile='+postData+'&shopUserid=0');
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  getCounter(postData:any){
    return this.get('DriverCounter?driverId='+postData+'');
  }
  
  forgort(postData:any){
    return this.post('forgotpassword',postData);
  }
}
