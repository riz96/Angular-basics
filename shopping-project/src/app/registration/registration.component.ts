import { Component, OnInit , Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import {  Custome } from './custome.validator';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() 
  final = []
  isLoading = false
  message = 'loading'
  data = true
  other = false

  constructor(private fb:FormBuilder ,
              private service:CartServiceService , 
              private router:Router,
              private http:HttpClient) { }
  myForm:FormGroup
  total(){
    let sum = 0
    for (let i = 0 ; i < this.final.length ; i++){
        sum += this.final[i].price * this.final[i].quantity 
        }
        return sum 
    }

   
  submit(){
    this.isLoading = true
    let finalData = []
    finalData.push(this.myForm.value , this.final)
    this.service.postData
    ('https://shopping-project-895a7.firebaseio.com/orders.json',finalData)
    .subscribe(res => {
    this.isLoading = false
    this.myForm.reset()
    this.final = []
    this.data= false
   
    
      console.log(res)
    })
  }

  edit(){
    this.router.navigate(['/card'])
  }
  toStore(){
    this.router.navigate(['/products'])
  }
  ngOnInit() {
    this.final = this.service.cardItems
    this.myForm=this.fb.group({
      name : [ '' , Validators.required] ,
      lastName : ['' , Validators.required],
      email : ['' , Validators.required],
      password : ['' , [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', Validators.required  ],
      phoneNumber:['' , Validators.required],
      city : ['' , Validators.required],
      province : ['' , Validators.required],
      streetNumber : ['' , Validators.required]
    } 
    , { validator : [Custome.confirmation , Custome.number] }  
    ) 
  }

    

}
