import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval, map } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midtermLab1';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date())
  );
  testObject = {
    name: 'Jenrico Mariano',
    age: 22,
    food: "Choco Moose"
  };
  testArray = ["raki", "jang", "michael", "vlad", "yuri"];
  price : number = 20000;
  fruits = ["Apple", "Banana", "Cherry", "Dragon Fruit", "Elderberry"];
  decimalNum1: number = 8.75892384912;
  decimalNum2: number = 42.45;
}

