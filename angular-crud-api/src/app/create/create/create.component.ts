import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../service/apiservice.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  title: string = '';
  content: string = '';
  errors: any = [];
  constructor(private apiService:ApiserviceService,private router:Router)
  {
     
  }
  ngOnInit(): void {
    //this.storeData();
  }
  storeData()
  {
    const data = {
      title: this.title,
      content: this.content
    };
     this.apiService.createData(data).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
         alert('Data saved successfully!');
         this.router.navigate(['/']);
      },
       (err) => {
        this.errors = err.error.errors;
        console.error('Error saving data:', err);
      }
    );
  }
   
  
}
