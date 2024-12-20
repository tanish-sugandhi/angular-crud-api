import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { Router, RouterModule } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule,RouterModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  data: any[] = [];
  itemData = {};
  showForm = false;
  newProduct = { title: '', content: '' };
  selectedProduct: any = null;  // Set to null to avoid modal opening on refresh
  isModalOpen = false;  // Track modal state

  constructor(private apiService: ApiserviceService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
    this.storeData();
    this.closeProductDetails();  // Ensure modal is closed on refresh
  }

  fetchData() {
    this.apiService.getAllData().subscribe(
      (response: any) => {
        console.log(response);
        this.data = Array.isArray(response) ? response : response.data || [];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  storeData() {
    if (this.newProduct.title && this.newProduct.content) {
      this.apiService.createData(this.newProduct).subscribe(
        (response) => {
          console.log('Product added:', response);
          this.data.push(response);
          this.toggleForm();
          this.newProduct = { title: '', content: '' };
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }
  }

  destroy(id: number) {
    this.apiService.deleteData(id);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  viewMore(productId: number) {
    this.apiService.getById(productId).subscribe(
      (response: any) => {
        console.log("View by ID:", response.data);
        this.selectedProduct = response;
        this.isModalOpen = true;  // Open the modal after fetching data
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  closeProductDetails() {
    this.selectedProduct = null;
    this.isModalOpen = false;  // Close modal when details are cleared
  }
}
