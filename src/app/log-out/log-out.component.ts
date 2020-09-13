import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
flag:boolean=true;
u:string;
  constructor(public router:Router) { }
  logoutFunc()
  {
    sessionStorage.removeItem("userNow");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("password");
    this.router.navigate(['/all']);
  }
  ngOnInit() {
    if(sessionStorage.getItem("userNow")==null)
    {this.flag=false}

    this.u =sessionStorage.getItem("userNow");
    if(this.u==null)
    {
      this.u="😐אף אחד לא מחובר";
      this.flag=false;
    }
  }

}
