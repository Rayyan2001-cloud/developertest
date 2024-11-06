import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { emp } from './model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }
  addemp(data:emp){
    return this.http.post('http://localhost:4012/EmpData',data);

  }
  getallEmployee(){
    return this.http.get<emp[]>("http://localhost:4012/EmpData");
  }
  delEmp(empid:number){
    return this.http.delete(`http://localhost:4012/EmpData${empid}`);
  }
  getOneEmp(id:string){
    return this.http.get<emp>(`http://localhost:4012/EmpData/${id}`);
  }
  updateEmp(empdata:emp){
    return this.http.put<emp>(`http://localhost:4010/EmpData/${empdata.id}`,empdata);

  }
}
