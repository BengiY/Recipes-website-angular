import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { User } from '../class/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form;
  ok:boolean=false;
  us:string;
  p:string;
  arryU:string[]=[];
  arr:User[]=[];
  userp:number;
  returnValue:User;
  user:boolean=false;
  pass:boolean=false;
  type: string="password";
 constructor(public ser:UserService,public router:Router){}
 u:User=new User();
 
 GettAllUsers()
 {
   this.ser.gettAll().subscribe(suc=>{this.arr=suc;},err=>{alert("errrrrror");console.log(err);});
 }
 UserFound()
 {
  //  for(let i=0;this.userp%10!=undefined;i++,this.userp/=10)
  //  {
  //     this.arryU[i]=this.userp[i];
  //  }
  this.user=false;
  this.pass=false;
   if(this.u.UserName=="")
   {
      this.user=true;
   
   }
   if(this.u.Password==undefined)
   {
       this.pass=true;
     
   }
  else{
  this.ser.foundUser(this.u).subscribe(suc=>
    {this.returnValue=suc;
    if(this.returnValue==true)
    {
      alert("ברוכים הבאים "+this.u.UserName);
      sessionStorage.setItem("userNow",this.u.UserName);
      this.router.navigate(['/all']);
    }
    if(this.returnValue==this.u.Password)
    {
      alert("סיסמא שגויה");
    }
    if(this.returnValue==false)
    {
      alert("משתמש לא קיים");
      this.router.navigate(['/register']);
    }
    }
    ,err=>{alert("errrrrror");console.log(err);});
    
  }
 }
 onSabmit(frm)
 {

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
    this.us =sessionStorage.getItem("userName");
   this.p=sessionStorage.getItem("password");
   this.u.Password=Number(this.p);
   this.u.UserName=this.us;
    if(this.us==null)
    {
      this.u.Password=null;
    }
    if(this.us==null)
    {
      this.u.UserName="";
    }
    
this.form=new FormGroup({
userName:new FormControl(Validators.required),
password:new FormControl(Validators.minLength(3))
});

  }

}
