import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { GetbookComponent } from './getbook.component';

describe('GetbookComponent', () => {
  let component: GetbookComponent;
  let fixture: ComponentFixture<GetbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbookComponent ],imports:[RouterTestingModule,HttpClientModule,MatPaginatorModule,NgxPaginationModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
