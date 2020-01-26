import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrierServiceService } from 'src/app/carrier-service.service';
import { Question } from 'src/app/CarrierModel';


@Component({
  selector: 'app-retrieve-test',
  templateUrl: './retrieve-test.component.html',
  styleUrls: ['./retrieve-test.component.css']
})
export class RetrieveTestComponent implements OnInit {

  constructor(private router:ActivatedRoute,
    private router1:Router,private service:CarrierServiceService) { }
    checkAnswer1:boolean=false;
    correctans='';
    dnf='';
    candnf:boolean=false;
    questionNo:any;
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    correctan:string;
      i:number=1;
  ngOnInit() {
          let testno=localStorage.getItem('testnum');
         // alert(testno);
           this.checkAnswer1=false;
          
          this.service.fetchQuestion(testno).
          subscribe(
            (data:any)=>
            {
        
        // let key="quest";
        // localStorage.setItem(key,'data');
        // alert(data[0].options1);
        // console.log(JSON.stringify(data));
                    
                if(data==null){
                 this.candnf=true;
                this.dnf="Test Not found";
                }
                else
                 {
                  this.candnf=false;
                  console.log(data.length);
                  JSON.stringify(data);
                  console.log(data);
                  // let arraydata=[];
                  // arraydata=data;
                      this.questionNo=this.i;
                      this.question=data[this.i].questions;
                      this.option1=data[this.i].options1;
                      this.option2=data[this.i].options2;
                      this.option3=data[this.i].options3;
                      this.option4=data[this.i].options4;
                      this.correctans=data[this.i].optionscorrect;
                  
                }

      
       }
      ,(error)=>{
        console.log(JSON.stringify(error));
      }
    );

  }
  result(){
    this.router1.navigate(['/Login/Result'])
}

next(){
  this.i++;
  let testno=localStorage.getItem('testnum');
  this.checkAnswer1=false;
    //this.questionNo.replace
    this.service.fetchQuestion(testno).
    subscribe(
      (data:Question)=>
      {
        
        if(this.i>10){
        this.candnf=true;
          this.dnf="Test Has No more Question";
        }
        else 
        {
                      this.candnf=false;
                      this.questionNo=this.i;
                      this.question=data[this.i].questions;
                      this.option1=data[this.i].options1;
                      this.option2=data[this.i].options2;
                      this.option3=data[this.i].options3;
                      this.option4=data[this.i].options4;
                      this.correctans=data[this.i].optionscorrect;
        }
      }
    );


      }
   
      previous(){
        this.i--;
        let testno=localStorage.getItem('testnum');
        this.checkAnswer1=false;
          //this.questionNo.replace
          this.service.fetchQuestion(testno).
          subscribe(
            (data:Question)=>
            {
              
              if(this.i<=0){
                this.candnf=true;
                this.dnf="This is Starting Question";
              }
              else 
              {
                this.candnf=false;
                            this.questionNo=this.i;
                            this.question=data[this.i].questions;
                            this.option1=data[this.i].options1;
                            this.option2=data[this.i].options2;
                            this.option3=data[this.i].options3;
                            this.option4=data[this.i].options4;
                            this.correctans=data[this.i].optionscorrect;
              }
            }
          );
      
      
            }
      
      ViewAnswer(){

        this.checkAnswer1=true;
        

      }
}
