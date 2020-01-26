import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginTrainer } from 'src/app/CarrierModel';
import { CarrierServiceService } from 'src/app/carrier-service.service';

@Component({
  selector: 'app-login-trainer',
  templateUrl: './login-trainer.component.html',
  styleUrls: ['./login-trainer.component.css']
})
export class LoginTrainerComponent implements OnInit {


 constructor(private router:ActivatedRoute,
  private router1:Router,private service:CarrierServiceService) { }

  show='';
  test='';
 subject='';
trainer = new LoginTrainer(); 






  ngOnInit() {
  }
  putTest(){
    var key='trainer_testid';
    localStorage.setItem(key,this.test);
    this.trainer.test=this.test;
    this.trainer.subject=this.subject;
  
    //this.router1.navigate(['/Login/PutTest']);
    
    this.service.insertTrainerTest(this.trainer).
    // subscribe
    // ((data:any)=>
    // {
    //   alert(data+"  coming from spring boot");
    //   console.log("data came from server   "+data);
    //   if(JSON.stringify(data)=="Submitted SuccessFull")
    //   {
    //     this.router1.navigate(['/Login/PutTest']);
    //    }
    //    else
    //    {
    //      this.show += JSON.stringify(data);
    //    } 
    //  }
    //  ,(error) =>{
    //    this.show = JSON.stringify(error);
       
    //  }  
    // );
    subscribe(
      (data)=>{
        
        console.log("data came from server"+data);
        }
      ,(error)=>{
        if(error.error.text=="Submitted SuccessFully")
        {
          this.router1.navigate(['/Login/PutTest']);
        }
        else if(error.error.text=="Already Existed Test")
        {
         this.show="Already Existed Test";
        }
        console.log(JSON.stringify(error));
      }
    );
  }
}




