import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { OpenBookComponent } from './open-book.component';

describe('OpenBookComponent', () => {
  let component: OpenBookComponent;
  let fixture: ComponentFixture<OpenBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenBookComponent ],imports:[HttpClientModule,RouterTestingModule,MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
