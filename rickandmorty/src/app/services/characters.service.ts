import { Characters } from './../models/rickandmorty.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseURL = 'http://localhost:3000/personajes'
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Characters[]> {
    return this.http.get<Characters[]>(baseURL);
  }

  get(id: any): Observable<Characters> {
    return this.http.get<Characters>(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }

  findByName(name: any): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${baseURL}?name=${name}`);
  }
}
