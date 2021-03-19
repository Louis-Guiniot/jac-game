import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCandidaturaComponent } from './pagina-candidatura.component';

describe('PaginaCandidaturaComponent', () => {
  let component: PaginaCandidaturaComponent;
  let fixture: ComponentFixture<PaginaCandidaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCandidaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCandidaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
