import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {
   @Input() workData: any;
   title: String = 'Proyectos realizados'
}
