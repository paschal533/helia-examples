import { TestBed } from '@angular/core/testing';
import { IPFSComponent } from './ipfs.component';

describe('IPFSComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPFSComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IPFSComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'helia-angular' title`, () => {
    const fixture = TestBed.createComponent(IPFSComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('helia-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(IPFSComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, helia-angular');
  });
});
