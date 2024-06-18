import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusercardComponent } from './cusercard.component';

describe('CusercardComponent', () => {
  let component: CusercardComponent;
  let fixture: ComponentFixture<CusercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
