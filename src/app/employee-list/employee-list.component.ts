import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employeeList:Array<Employee> = [];
  constructor(
    private empService:EmployeeService
  ) { }


  getAllEmployees() :void {
    this.empService.getAllEmployee().subscribe(
      (response)=>{
        console.log(response)
        this.employeeList = response;
      }
    )
  }

  // edit employee
  editEmployee(emp:Employee) :void {
      console.log("Edit emp ",emp)
  }

  // delete employee
  deleteEmployee(emp:Employee) :void {
      console.log("Delete emp ",emp)
  }
  ngOnInit(): void {
      this.getAllEmployees();
  }

}
