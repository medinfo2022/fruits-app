import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from './categorie';

@Injectable({
  providedIn: 'root',
})
export class Categorieservice {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Categories[]>('http://localhost:8082/category');
  }
  create(payload: Categories) {
    return this.http.post<Categories>('http://localhost:8082/category', payload);
  }

  getById(id: number) {
    return this.http.get<Categories>(`http://localhost:8082/category/${id}`);
  }
  update(payload: Categories) {
    return this.http.put(`http://localhost:8082/category`, payload);
  }
  delete(id: number) {
    return this.http.delete<Categories>(`http://localhost:8082/category/${id}`);
  }
}
