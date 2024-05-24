import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBootcampComponent } from './form-bootcamp.component';

describe('FormBootcampComponent', () => {
  let component: FormBootcampComponent;
  let fixture: ComponentFixture<FormBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
