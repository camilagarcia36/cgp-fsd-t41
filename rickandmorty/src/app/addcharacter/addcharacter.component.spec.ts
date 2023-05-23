import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcharacterComponent } from './addcharacter.component';

describe('AddcharacterComponent', () => {
  let component: AddcharacterComponent;
  let fixture: ComponentFixture<AddcharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcharacterComponent]
    });
    fixture = TestBed.createComponent(AddcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
