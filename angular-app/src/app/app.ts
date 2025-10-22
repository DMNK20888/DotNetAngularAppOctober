import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
  secretInfo = "Hello There.";
}
