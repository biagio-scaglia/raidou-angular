import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoniComponent } from './demoni.component';

describe('DemoniComponent', () => {
  let component: DemoniComponent;
  let fixture: ComponentFixture<DemoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
