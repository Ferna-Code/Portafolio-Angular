import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portafolio';
  imgUrl: string = '../../../assets/img/fondo.png';
  fondo: string = `url('${this.imgUrl}')`;
}
