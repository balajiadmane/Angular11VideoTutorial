import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIResponse, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee-and-update',
  templateUrl: './new-employee-and-update.component.html',
  styleUrls: ['./new-employee-and-update.component.css']
})
export class NewEmployeeAndUpdateComponent implements OnInit {

  employeeForm:any;
  response:APIResponse = new APIResponse

  constructor(
    private empService:EmployeeService,
    private router:Router
  ) {

    this.employeeForm = new FormGroup({
      name: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
    })
   }

   formSubmit() : void {
        console.log(this.employeeForm.value)
        this.empService.saveEmployee(this.employeeForm.value).subscribe(
          (response)=>{
            console.log(response)
            this.response = response;
            // if the employee added successfully then redirect to emp table after 1 sec
              setTimeout(()=>{
                this.router.navigateByUrl("/")
              },1000)
          }
        )
   }
  ngOnInit(): void {
  }

}
