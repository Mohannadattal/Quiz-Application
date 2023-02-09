import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @ViewChild('name') name!: ElementRef;

  startQuiz() {
    localStorage.setItem('name', this.name.nativeElement.value);
  }
}
