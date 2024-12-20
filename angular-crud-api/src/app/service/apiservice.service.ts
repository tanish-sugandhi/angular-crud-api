import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl = 'http://localhost:8000/api';
  messageSource: any;

  constructor(private http: HttpClient) { }
  
  getAllData()
  {
    return this.http.get(`${this.baseUrl}/get`);
  }
  createData(data:any)
  {
    return this.http.post(`${this.baseUrl}/store`, data);
  }
  deleteData(id:number)
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}`).subscribe(() => {
      alert('Data Successfully Deleted')
       window.location.reload();
      this.getAllData();
    });
  }
   
  updateData(id: number, data: any) {
//    const headers = new HttpHeaders({
//   'Content-Type': 'application/json'
// });
    return this.http.put(`${this.baseUrl}/update/${id}`, data);
  }

  
  getById(id:number)
  {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }


}
