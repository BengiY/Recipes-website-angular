import { Component, OnInit } from '@angular/core';
import { User } from '../class/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public ser:UserService,public router:Router){}
  u:User=new User();
  ifO:boolean=true;
  type: string="password";
  uc:boolean=false;
  ec:boolean=false;
  pc:boolean=false;
  form2;
  U:boolean=false;
  returnValue:User;
   AddUser()
   {
     this.ifO=true;
     if(this.u.UserName==undefined)
     {
       this.ifO=false;
       this.uc=true;
     }
     if(this.u.Password==undefined)
     {
      this.ifO=false;
       this.pc=true;
     }
     if(this.u.Email==undefined||!this.u.Email.includes("@"))
     {
      this.ifO=false;
        this.ec=true;
     }
     if( this.ifO==true){
       this.ser.addUser(this.u).subscribe(suc=>{this.returnValue=suc; alert(" ✔ נקלטו במערכת פרטי  "+this.returnValue); this.router.navigate(['/login']);
       sessionStorage.setItem("userName",this.u.UserName);
       sessionStorage.setItem("password",this.u.Password.toString());
      },err=>{alert("errrrrror");console.log(err);});}
   }
   onSabmit(frm)
   {
     if(frm.userName="")
     {
       this.U=true;
     }
   }
   functiontochangetype(){
    if(this.type=="text")
       {
         this.type="password";
       }
    else 
         {
         this.type="text";
         }
    }
  ngOnInit() {
    this.form2=new FormGroup({
      userName:new FormControl("",Validators.required),
      password:new FormControl("",Validators.compose([Validators.minLength(4),Validators.required,Validators.pattern('[0-9]*')])),
      mail:new FormControl("",Validators.compose([Validators.email,Validators.required])),
      adress:new FormControl("")
      });
  }

}
