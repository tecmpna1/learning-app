import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  APIURL:any;
  constructor(private http: HttpClient) { 
    this.APIURL=environment.apiurl;

  }

  
  ApiMethodCall(MethodName,Jdata){
   // let headers = new HttpHeaders({
      //Authorization:this.AUTHTOKEN
     // `Bearer ${authtoken}`
      // });
   // let options = { headers: headers };
     return new Promise((resolve,reject)=>{		    	  
      let UrlName = this.APIURL + "/" + MethodName;  	 	
      this.http.post(UrlName,Jdata).subscribe(
              data => {
                console.log(data);

                  resolve(data);
              },
              (error) => {
               console.log("Error", error);
                reject(error);
              }
          );


  });
  }
////////////////////////////////////
  ApiGet(MethodName){

    return new Promise((resolve,reject)=>{		    	  
      let UrlName = this.APIURL + "/" + MethodName;  	 	
      this.http.get(UrlName).subscribe(
              data => {
                console.log(data);

                  resolve(data);
              },
              (error) => {
               console.log("Error", error);
                reject(error);
              }
          );


  })
  }

}
