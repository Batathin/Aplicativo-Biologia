import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TAngiospermaPage } from './t-angiosperma.page';

describe('TAngiospermaPage', () => {
  let component: TAngiospermaPage;
  let fixture: ComponentFixture<TAngiospermaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TAngiospermaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
