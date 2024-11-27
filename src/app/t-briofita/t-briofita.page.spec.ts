import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TBriofitaPage } from './t-briofita.page';

describe('TBriofitaPage', () => {
  let component: TBriofitaPage;
  let fixture: ComponentFixture<TBriofitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TBriofitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
