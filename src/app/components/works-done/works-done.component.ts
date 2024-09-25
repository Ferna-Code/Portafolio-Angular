import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from '../../models/work.model';
import { WorkListService } from '../../services/work-list.service';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrl: './works-done.component.scss'
})
export class WorksDoneComponent implements OnInit {
  @Input() title: string = 'Trabajos';



  //creamos nuevamente la lista vacia la cual va a adquirir la informacion del servicio
  workList: WorkModel[] = [];

  //incorporamos el servicio por medio del contructor
  constructor(private WorkListService: WorkListService){}

  //metodo que se construye/inicia cuando se ejecuta el componente
  ngOnInit(): void {
    this.getWorkList();
  }
  //obtenemos el contenido del servicio
  getWorkList(): void{
    this.WorkListService.getWorks().subscribe((workList) => {this.workList = workList});//se queda escuchando el observable
  }
}
