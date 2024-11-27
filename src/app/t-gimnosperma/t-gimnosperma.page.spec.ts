import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TGimnospermaPage } from './t-gimnosperma.page';

describe('TGimnospermaPage', () => {
  let component: TGimnospermaPage;
  let fixture: ComponentFixture<TGimnospermaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TGimnospermaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
