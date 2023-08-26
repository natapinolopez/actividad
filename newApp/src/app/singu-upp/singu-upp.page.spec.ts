import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinguUppPage } from './singu-upp.page';

describe('SinguUppPage', () => {
  let component: SinguUppPage;
  let fixture: ComponentFixture<SinguUppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SinguUppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
