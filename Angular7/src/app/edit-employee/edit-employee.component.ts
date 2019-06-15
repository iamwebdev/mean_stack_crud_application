import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  
  public employeeData:any = []
  public id:string;
  editEmployeeForm : FormGroup 

  constructor(private employee: EmployeeService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router){ 
    this.id = route.snapshot.params.id;
    this.employee.getEmployeeById(this.id).subscribe((res) => {
      this.employeeData = res
    })

    this.editEmployeeForm = this.fb.group({
      name: [this.employeeData.name,[Validators.required]],
      email: [this.employeeData.email,[Validators.required]],
      mobile: [this.employeeData.mobile,[Validators.required]]
    })
  }

  ngOnInit() {

  }

  updateEmployee() {
    this.employee.updateEmployeeData(this.editEmployeeForm.value, this.id).subscribe((res) => {
      this.editEmployeeForm.reset()
      this.router.navigate(['/employee'])
    })
  }
}
