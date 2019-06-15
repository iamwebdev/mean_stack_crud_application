import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly baseUrl = 'http://localhost:3000/employee'

  constructor(private http: HttpClient) { }

  // Show All Employee
  getAllEmployee(){
    return this.http.get(this.baseUrl)
  }

  // Save Employee
  saveEmp(formData) {
    return this.http.post(this.baseUrl, formData)
  }

  // Get Employee By Id

  getEmployeeById(id){
    return this.http.get(this.baseUrl+`/${id}`)
  }

  // Update Employee Data

  updateEmployeeData(formData, id) {
    return this.http.put(this.baseUrl+`/${id}`, formData)
  }

  deleteEmp(id) {
    return this.http.delete(this.baseUrl+`/${id}`)
  }
}
