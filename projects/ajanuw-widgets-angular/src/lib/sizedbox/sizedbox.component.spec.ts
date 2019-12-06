import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedboxComponent } from './sizedbox.component';

describe('SizedboxComponent', () => {
  let component: SizedboxComponent;
  let fixture: ComponentFixture<SizedboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizedboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
