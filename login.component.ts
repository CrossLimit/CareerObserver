import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { CarrierServiceService } from '../carrier-service.service';
import { LOCATION_INITIALIZED } from '@angular/common';
import { LoginTrainer, Login } from '../CarrierModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  Trainer ='';
  Student='';
  Email='';
  Password='';
  canShow: boolean = true;
  showError='';
  loginCheck=new Login();

  constructor(private router:Router, public service:CarrierServiceService) { }
ngOnInit(){

  

  }
  // to set the particular routes from child to paerent 
  onSubmit(){
    let key ='emailtosessioin';
localStorage.setItem(key,this.Email);
    this.loginCheck.email=this.Email;
    this.service.passValidate(this.loginCheck.email).
    subscribe(
      (data)=>{
       console.log("data came from server"+data);
       }
      ,(error)=>{
        this.canShow=false;
        if(error.error.text==this.Password && this.Trainer.valueOf()=='Trainer' )
        {
          this.router.navigate(['/Login/LoginTrainer'])
        }
        else if(error.error.text==this.Password && this.Student.valueOf()=='Student')
        {
          this.router.navigate(['Login/LoginStudent'])
        }
        else
         {
           this.canShow=true;

        this.showError="Email or Password is Wrong";
        }
        console.log(JSON.stringify(error));
      }
    );
  }






  //   this.canShow = false;
  //   if(this.Trainer.valueOf()=='Trainer')
  //   {
  //     this.router.navigate(['/Login/LoginTrainer'])
  //   }
  //   else{
  //     this.router.navigate(['Login/LoginStudent'])
  //   }

    

  // }
  onRegister(){
         this.canShow = false;
         this.router.navigate(['/Login/UserRegistration'])
    
  }

  onForget(){
    this.canShow = false;
    this.router.navigate(['/Login/LoginForget'])
  }

}