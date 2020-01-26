import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrierServiceService } from 'src/app/carrier-service.service';
import { Question } from 'src/app/CarrierModel';

@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrls: ['./post-test.component.css']
})
export class PostTestComponent implements OnInit {

  show='';
  option1='';
  option2='';
  option3='';
  option4='';
  optioncorrect='';  
  questionno=''; 
  question='';        
  test='';
  qAdmin=new Question();
  canShow:boolean=true;

  
  canShow1: boolean=true;
 
  constructor(private router:ActivatedRoute,private router1:Router, public service:CarrierServiceService) { }

  ngOnInit() {
    this.test=localStorage.getItem('trainer_testid');
    
  }
  onSubmit(){
    this.canShow1=false;
    this.qAdmin.questionno = this.questionno;
		this.qAdmin.questions = this.question;
		this.qAdmin.options1 = this.option1;
		this.qAdmin.options2 = this.option2;
		this.qAdmin.options3 = this.option3;
    this.qAdmin.options4 = this.option4;
    this.qAdmin.optionscorrect = this.optioncorrect;
		this.qAdmin.test = this.test;

    this.service.quizQuestion(this.qAdmin).
    subscribe(
      (data)=>{
        alert(2);
        console.log("data came from server"+data);
        if(data==1)
        {
          this.show="1 Question been Submitted to this test";
          // this.router.navigate(['/RegSuccess']);
         }  
        else
        {
          this.show="This Question is Already Existed with Test";
          this.show += JSON.stringify(data);
        } 
      }
      ,(error)=>{
        if(error.error.text=="great")
        {
          // this.router.navigate(['/Login/RegSuccess']);
          this.show="1 Question Has been Submitted to this test";
        }
        else if(error.error.text=="not Great")
        {
         this.show="This Question is Already Existed with Test";
        }
        console.log(JSON.stringify(error));
      }
    );



    
  }
  onNext(){
    
    this.canShow1=false;
    this.show="Please Write the next Question";
  }
  submitTest(){
    this.canShow=false;
    this.canShow1=true;
    this.show="You Have Successfully Submitted The Test";
  }
 

}
