import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display/data-display.component';
import { CreateComponent } from './create/create/create.component';
import { UpdateComponent } from './update/update/update.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataDisplayComponent,CreateComponent,UpdateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-api';
}
