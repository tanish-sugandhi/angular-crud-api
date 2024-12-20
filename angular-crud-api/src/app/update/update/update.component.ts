import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../service/apiservice.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  data:any = {
    data: {
      title: '',
      content: ''
    }
  };
  id!: number;
  errors: any = [];
  constructor(private apiService:ApiserviceService,private route: RouterModule,private router: ActivatedRoute,private routes:Router)
  {
    
  }
  ngOnInit(): void {
    // Retrieve the 'id' from the route parameters
    this.router.params.subscribe((params) => {
      this.id = +params['id']; // Convert the id to a number
      this.loadData(); // Optional: Load existing data for the id
    });
  }
  loadData(): void {
    // Fetch the existing data for the given id
    this.apiService.getById(this.id).subscribe(
      (response) => {
        this.data = response;
        console.log(this.data)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
 
  updateData() {
    console.log(this.data.data)
    this.apiService.updateData(this.id, this.data.data).subscribe(
      (response) => {
      console.log('Update successful before save:',response);
     console.log("update data",)
        alert('Post updated successfully!');
        this.routes.navigate(['/']);
    },
    (error) => {
      console.error('Update failed:', error);
      this.errors = error.error.errors || ['An unexpected error occurred.'];
    }
    );
}
}
