import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBlogComponent } from './title-blog.component';

describe('TitleBlogComponent', () => {
  let component: TitleBlogComponent;
  let fixture: ComponentFixture<TitleBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleBlogComponent]
    });
    fixture = TestBed.createComponent(TitleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
