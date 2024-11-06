import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { emp } from '../model';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrl: './viewemp.component.css'
})
export class ViewempComponent {
  constructor(private route:Router, private empservice:EmpService){}
  gotoAdd(){
    console.log("Go To AddEmployee Page")
    this.route.navigate(['addEmp'])

  }
  
  employees:undefined|emp[];
  ngOnInit(){
    this.getEmployees();
  }
  getEmployees(){
    this.empservice.getallEmployee().subscribe((data:any)=>{
      this.employees=data;

    });
    
  }
  
    
  
}
