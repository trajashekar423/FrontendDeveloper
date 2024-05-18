import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypersonalworksComponent } from './mypersonalworks.component';

describe('MypersonalworksComponent', () => {
  let component: MypersonalworksComponent;
  let fixture: ComponentFixture<MypersonalworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MypersonalworksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MypersonalworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
