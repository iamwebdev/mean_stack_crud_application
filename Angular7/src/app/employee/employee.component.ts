import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employeeForm : FormGroup

  public allEmployees:any = []

  constructor(private employee: EmployeeService, private fb: FormBuilder){ 
    this.employeeForm = this.fb.group({
      name : ["",[Validators.required]],
      email: ["",[Validators.required]],
      mobile: ["",[Validators.required]]
    })
  }

  ngOnInit() {
    this.employee.getAllEmployee().subscribe((res) => {
      this.allEmployees = res
    })
  }

  saveEmployee() {
    this.employee.saveEmp(this.employeeForm.value).subscribe((res) => {
      this.employeeForm.reset()
      this.ngOnInit()
    })
  }

  deleteEmpData(id) {
    // console.log(this.deleteForm.value._id)
    this.employee.deleteEmp(id).subscribe((res) => {
      this.ngOnInit() 
    })
  }
}
