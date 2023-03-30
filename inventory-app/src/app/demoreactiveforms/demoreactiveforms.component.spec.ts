import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoreactiveformsComponent } from './demoreactiveforms.component';

describe('DemoreactiveformsComponent', () => {
  let component: DemoreactiveformsComponent;
  let fixture: ComponentFixture<DemoreactiveformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoreactiveformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoreactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
