import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from './Register';
import { CarrierServiceService } from 'src/app/carrier-service.service';
//import { RegServiceService } from './reg-service.service';

@Component({
  selector: 'app-user-registraion',
  templateUrl: './user-registraion.component.html',
  styleUrls: ['./user-registraion.component.css']
})

export class UserRegistraionComponent implements OnInit {

  
  show='';
  Email='';
  Password='';
  RepeatPassword='';
  user =new Register(); 
 

  constructor(
    private router:Router,
    public service:CarrierServiceService
    ) {}
   

  ngOnInit() {

  
  }

  onSubmit(){
 
    this.user.email=this.Email;
    this.user.password=this.Password;
    this.user.repeatpassword=this.RepeatPassword;
    

   // alert(1);
  //  alert(this.user.email +"sduifjknnd");
    this.service.f2(this.user).
    subscribe(
      (data)=>{
        alert(2);
        console.log("data came from server"+data);
        if(data.status=="great")
        {
          this.router.navigate(['/RegSuccess']);
         }  
        else
        {
          this.show += JSON.stringify(data);
        } 
      }
      ,(error)=>{
        if(error.error.text=="great")
        {
          this.router.navigate(['/Login/RegSuccess']);
        }
        else if(error.error.text=="not Great")
        {
         this.show="This Email is Already Exiting for Us";
        }
        console.log(JSON.stringify(error));
      }
    );
  }



    


  }



