import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ ApicallService } from '../apicall.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  itemlist:any=[];
  showflg:boolean=false;

  constructor(private formBuilder: FormBuilder, public api:ApicallService) { 
    this.reactiveForm();
  }


 reactiveForm() {
   this.myForm = this.formBuilder.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      age: ['', Validators.required ],
      address:['', Validators.required ],
      gender:['', Validators.required ],
      inquiry:['', Validators.required ],
      phoneno:['', Validators.required ],
      email:['', Validators.required ],
      city:['', Validators.required ],
      state:['', Validators.required ]
    //productImage: { data: Buffer, contentType: String },
   // productImage:['', Validators.required ]
   });
 }
 
 submitForm() {
   console.log(this.myForm);
  // console.log(this.myForm.value,this.myForm.controls['productImage'])
   this.GetCustDetails();
 }



  ngOnInit() {
    
  }


  GetCustDetails(){
 
    this.api.ApiMethodCall(`customer`,this.myForm.value).then(RES=>{
      console.log(RES);
    
    }).catch(err=>{
      console.log(err)
    })
  
  }

  custdtls(sflag){
    this.api.ApiGet(`getcustomer`).then(res=>{
      console.log(res);
      this.itemlist=res;
      this.showflg=sflag;
      console.log(this.showflg);
    }).catch(err=>{
      console.log(err)
    })

  }


 
}
