import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INostriValoriComponent } from './i-nostri-valori.component';

describe('INostriValoriComponent', () => {
  let component: INostriValoriComponent;
  let fixture: ComponentFixture<INostriValoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INostriValoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INostriValoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
