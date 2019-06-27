import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing'


describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  let comp : AppComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[RouterTestingModule]
    }).compileComponents().then(()=>{
       fixture = TestBed.createComponent(AppComponent);
       comp = fixture.debugElement.componentInstance;
    });
  }));

  it('should create the app', () => {
  
    expect(comp).toBeTruthy();
  });


});
