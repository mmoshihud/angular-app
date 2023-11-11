import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from '../services/api/core.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productData: any;
  constructor(private coreService: CoreService) {}
  ngOnInit(): void {
    this.coreService.getProduct().subscribe((data) => {
      this.productData = data;
      console.log(data);
    });
  }
}
