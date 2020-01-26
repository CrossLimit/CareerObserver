import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {
  
username='';

  constructor(private router:Router) {
    
   }
  ngOnInit() {
    let user=localStorage.getItem("emailtosessioin");
   this.username=user;
  //const  username="ajeet yadav";
  }
logout(){
  localStorage.clear; 
  this.router.navigate(['/Login/LogoutSuccess'])
}
}
