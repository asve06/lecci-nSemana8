import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostreService {

  constructor(private http: HttpClient) { }

  getPostres() {
    return this.http.get<any>('https://raw.githubusercontent.com/vjuradov/ejemploDatosConsumo/refs/heads/main/leccion-recetas.json');
  }
}
