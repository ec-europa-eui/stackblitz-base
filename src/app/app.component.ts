import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  isLoading = true;
  @ViewChild('test', { static: false, read: HTMLDivElement })
  test: HTMLDivElement;

  constructor(private cd: ChangeDetectorRef) {}

  toggleLoading() {
    console.log('toggleLoading');
    this.isLoading = !this.isLoading;
    this.cd.detectChanges();
  }

  public isBasicButton = false;
  public isOutlinedButton = false;
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  public onToggle(event: Event) {
    this.isCollapsed = !this.isCollapsed;
  }

  public onToggle2(event: Event) {
    this.isCollapsed2 = !this.isCollapsed2;
  }

  public onToggle3(event: Event) {
    this.isCollapsed3 = !this.isCollapsed3;
  }

  public onDefaultButton() {
    this.isBasicButton = false;
    this.isOutlinedButton = false;
  }

  public onBasicButton() {
    this.isBasicButton = true;
    this.isOutlinedButton = false;
  }

  public onOutlineButton() {
    this.isBasicButton = false;
    this.isOutlinedButton = true;
  }
}
