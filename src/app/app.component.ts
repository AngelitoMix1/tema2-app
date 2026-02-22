import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BienvenidaComponent } from './features/bienvenida/bienvenida.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BienvenidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tema2-app';
}
