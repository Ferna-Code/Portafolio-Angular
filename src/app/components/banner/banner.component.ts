import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  name: string = 'Developer';
  imgUrl: string = '../../../assets/img/banner.jpg';
  imgBanner: string = `url('${this.imgUrl}')`;

}
