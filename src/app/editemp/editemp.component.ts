import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { emp } from '../model';
import { EmpService } from '../emp.service';
import { setTimeout } from 'node:timers';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrl: './editemp.component.css'
})
export class EditempComponent {
  constructor(private route:Router, private router:ActivatedRoute,private emp:EmpService){}
    gotoView(){
      console.log("Go To View Page");
      this.route.navigate(['']);
    }
   /* myemp:undefined|emp;
    empMessage:undefined|string;
    ngOnit(){
      this.getonedata();
    }  
    getonedata(){
      let empId= this.router.snapshot.paramMap.get('id');
      console.log(empId);
      empId && this.emp.getOneEmp(empId).subscribe((data:any)=>{
        console.log(data);
        this.myemp=data;

      })
      
    }  
    submit(data:any){
      if(this.myemp){
        data.id=this.myemp.id;
        this.emp.updateEmp(data).subscribe((result:any)=>{
          if(result){
            console.log("Updated Successful")
            this.empMessage="Updated Successful"
          }

        });
        setTimeout(()=>{
          this.empMessage=undefined;

        },3000)

      }
    }
    onCancel(){
      window.location.reload();
    }*/

  
}
