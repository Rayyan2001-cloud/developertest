import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
//import { setTimeout } from 'node:timers';


@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {
  constructor(private route:Router,private empservice:EmpService){}
  empobject:any={
    EmpName:"",
    EmpPos:"",
    EmpDep:"",
    EmpRate:""
  }
  empMessage:undefined|string;
  gotoView(){
    console.log("Go To View Page ")
    this.route.navigate(['']);


  }
  submitEmp(){
    console.log(this.empobject.EmpName);
    console.log(this.empobject.EmpPos);
    console.log(this.empobject.EmpDep);
    console.log(this.empobject.EmpRate);
    if(this.empobject.EmpName!="" && this.empobject.EmpPos!=""){
      this.empservice.addemp(this.empobject).subscribe(()=>{
        console.log("Successfully Added");
        this.empMessage="Successfully Added"
       this.clearform();


      });

      
    }else{
      console.log("please enter a valid details");
      this.empMessage="please enter a vali details";

    }
    setTimeout(()=>{
      this.empMessage=undefined;
    },3000)



  }
  clearform(){
    this.empobject={
      EmpName:"",
      EmpPos:"",
      EmpDep:"",
      EmpRate:""
    }
  }

}
