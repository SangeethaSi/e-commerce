import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductDetails } from '../model/ProductDetails';
import { ProductDetailsService } from '../services/product-service/product-details.service';

import { UpdateProductComponent } from './update-product.component';

describe('UpdateProductComponent', () => {
  let component: UpdateProductComponent;
  let fixture: ComponentFixture<UpdateProductComponent>;
  let productDetailsService: ProductDetailsService;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductComponent);
    component = fixture.componentInstance;
    productDetailsService = fixture.debugElement.injector.get(ProductDetailsService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should call onUpdateProduct", () => {
    let newProductRequest: ProductDetails = {
      productId: 1,
      productName : "Shampoo", 
      productDescription: "No side effects",
      price: "$1",
      features: "Makes the hair smooth",
      productStatus: "HURRY UP TO PURCHASE",
      productImageUrl: "data:image/jpeg;base64,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"
    } 
    spyOn(productDetailsService, "updateProductDetails").and.returnValue(of(newProductRequest));
    expect(component.onUpdateProduct).toBeDefined();
  });

  it ("should call onResetUpdateProduct", () => {
    expect(component.onResetUpdateProduct).toBeDefined();
  });
});
