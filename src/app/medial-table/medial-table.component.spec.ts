import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialTableComponent } from './medial-table.component';

describe('MedialTableComponent', () => {
  let component: MedialTableComponent;
  let fixture: ComponentFixture<MedialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedialTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
