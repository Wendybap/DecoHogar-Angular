import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducstListComponent } from './producst-list.component';

describe('ProducstListComponent', () => {
  let component: ProducstListComponent;
  let fixture: ComponentFixture<ProducstListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducstListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducstListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
