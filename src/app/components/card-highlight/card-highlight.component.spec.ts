import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardHighlightComponent } from './card-highlight.component';

describe('CardHighlightComponent', () => {
  let component: CardHighlightComponent;
  let fixture: ComponentFixture<CardHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have expected rules behavior`, () => {
    const fixture = TestBed.createComponent(CardHighlightComponent);
    const card = fixture.componentInstance;
    card.moneyValue = 10000;
    card.dateValue = new Date(new Date().getFullYear(), new Date().getMonth() + 5);
    fixture.detectChanges();
    const result = fixture.debugElement.query(By.css('.highlight__header h2')).nativeElement?.textContent;
    expect(result).toEqual('$1,666.67');
  });
});
