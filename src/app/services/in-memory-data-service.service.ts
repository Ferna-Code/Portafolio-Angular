import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const works = [
      {
        "id": 1,
        "title": "Proyecto de tesis - Red social RedLeones",
        "urlImage": "../../../assets/img/redLeones.png",
        "description": "Este proyecto de tesis consistió en el desarrollo de un sitio web utilizando PHP y JavaScript. Mis principales responsabilidades incluyeron la creación de la lógica del sistema, el apoyo en la elaboración de consultas SQL para la gestión de la base de datos y el diseño del frontend. Además, fui responsable del despliegue del sitio en el servidor de hosting.",
        "urlProyecto": "https://redleones.cl/"
      },
      {
        "id": 2,
        "title": "Segundo trabajo",
        "urlImage": "../../../assets/img/proyecto.avif",
        "description": "Me encanto este trabajo",
        "urlProyecto": ""
      },
      {
        "id": 3,
        "title": "Tercer trabajo",
        "urlImage": "../../../assets/img/proyecto.avif",
        "description": "Me encanto este trabajo",
        "urlProyecto": ""
      },
      {
        "id": 4,
        "title": "Cuarto trabajo",
        "urlImage": "../../../assets/img/proyecto.avif",
        "description": "Me encanto este trabajo",
        "urlProyecto": ""
      }
    ];
    return { works };
  }
}
