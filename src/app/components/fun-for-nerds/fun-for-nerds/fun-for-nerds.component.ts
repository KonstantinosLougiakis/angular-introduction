import { Component } from '@angular/core';
import { WordInputComponent } from '../word-input/word-input.component';
import { OddLengthComponent } from '../odd-length/odd-length.component';
import { EvenLengthComponent } from '../even-length/even-length.component';

@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [WordInputComponent, OddLengthComponent, EvenLengthComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class FunForNerdsComponent {

  onPartialOddWord = '';
  onPartialEvenWord = '';

  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onPartialWord(word:string) {
    if (word.length % 2 === 0) {
      this.onPartialEvenWord = word;
      this.onPartialOddWord = '';
    } else {
      this.onPartialOddWord = word;
      this.onPartialEvenWord = '';
    }
  }

  onWord(word:string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word);
    } else {
      this.oddLengthWords.push(word);
    }
  }
}
