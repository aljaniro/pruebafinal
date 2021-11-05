import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImagenesService {
  imagenencontrada:string
  private terminoBusqueda$ = new Subject<string>();
  constructor(private http:HttpClient) { 
    this.imagenencontrada=''
  }
  imagenfile(imagen:any):void{
    this.imagenencontrada=imagen
  }
  enviarTerminoBusqueda(imagenName: string) {
    this.terminoBusqueda$.next(imagenName);
  }

  getTerminoBusqueda(): Observable<string> {
    return this.terminoBusqueda$.asObservable();
  }
  getImagenes(termino: string,cantidad: number,actual: number): Observable<any> {
    const KEY = '13119377-fc7e10c6305a7de49da6ecb25';
    const URL = 'https://pixabay.com/api/?key='+ KEY +'&q=' + termino + 
    '&per_page='+ cantidad + '&page='+actual;
                
    return this.http.get(URL);
  }
 
    
}
