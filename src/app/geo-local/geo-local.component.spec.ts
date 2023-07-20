import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoLocalComponent } from './geo-local.component';

describe('GeoLocalComponent', () => {
  let component: GeoLocalComponent;
  let fixture: ComponentFixture<GeoLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeoLocalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
