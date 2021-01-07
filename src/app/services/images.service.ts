import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { IMAGES } from '../components/data.image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  buscarImagenes():Observable<any> {
    return of(IMAGES);
  }
}
