import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CarrierServiceService } from 'src/app/carrier-service.service';
import { LoginTrainer, Question } from 'src/app/CarrierModel';
import { TestObject } from 'protractor/built/driverProviders';

export interface Subject{
  id:string;
  name:string;
}
export interface TestO{
  id:string;
  name:string;
}
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})


export class LoginStudentComponent implements OnInit {
selectedLevel1;
  data1:Array<Subject> = [
      {id: "Java", name: "Java"},
      {id: "Spring", name: "Spring"}
  ];
selectedLevel2;
  data2:Array<TestO> = [
    {id: "1", name: "Test1"},
    {id: "2", name: "Test2"},
    {id: "3", name: "Test3"}

];

  itemtest:string;
    

  selected(){
    alert("You Have Selected  "+this.selectedLevel1.id+",   testNO: "+this.selectedLevel2.id);
    this.itemtest=this.selectedLevel2.id;
    let key="testnum";
    localStorage.setItem(key,this.itemtest);
    //alert("the item test is"+this.itemtest);
    this.router1.navigate(['/Login/RetrieveTest']);

    // this.service.fetchQuestion(this.selectedLevel2.id).
    // subscribe(
    //   (data:Question)=>{
        
    //     let key="quest";
    //     localStorage.setItem(key,'data');
    //     alert(data[0].options1);
    //     console.log(JSON.stringify(data));
    
    //    console.log("data came from server"+data);
    //    this.router1.navigate(['/Login/RetrieveTest']);
       
    //    }
    //   ,(error)=>{
    //     console.log(JSON.stringify(error));
    //   }
    // );

  }

constructor(private router:ActivatedRoute,private router1:Router,private service:CarrierServiceService) { }
 loginTrainer=new LoginTrainer();
  ngOnInit() {
       
  }
//   selectSubject(){
    
//     this.service.fetchTest(this.loginTrainer.subject).
//     subscribe(
//       (data)=>{
//        console.log("data came from server"+data);
//        }
//       ,(error)=>{
      
//         if(error.error.text==this.subjects)
//         {

//           this.test=error.error.text;  
//         }
//         console.log(JSON.stringify(error));
//       }
//     );
// }
  // onSub(){
  //   this.service.fetchQuestion(this.loginTrainer.test).
  //   subscribe(
  //     (data)=>{
  //       alert(data);
  //      console.log("data came from server"+data);
  //      this.router1.navigate(['/Login/RetrieveTest']);
       
  //      }
  //     ,(error)=>{
  //       console.log(JSON.stringify(error));
  //     }
  //   );
  //   }

  }
