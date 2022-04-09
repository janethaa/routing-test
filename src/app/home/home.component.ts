import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from '../models/product-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productType?: ProductType;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.data
      .pipe(
        take(1))
      .subscribe((data) => {
          this.productType = data['data'].productType;
      });
  }
}
