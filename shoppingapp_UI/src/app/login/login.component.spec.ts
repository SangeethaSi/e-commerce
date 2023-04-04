import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserRegistrationService } from '../services/user-service/user-registration.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userRegistrationService: UserRegistrationService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userRegistrationService = fixture.debugElement.injector.get(UserRegistrationService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call onLoginClick", () => {
    let userDetails = {
      firstName: "Cogjava",
      lastName: "Angular",
      email: "cogjava@gmail.com",
      loginId: "98632",
      password: "12345",
      contactNumber: "7564674555",
      role: "admin"
    }
    spyOn(userRegistrationService, "getUserDetails").and.returnValue(of(userDetails))
    expect(component.onLoginClick).toBeDefined();
  })

  it ("should call onResetLoginForm", () => {
    expect(component.onResetLoginForm).toBeDefined();
  });

});
