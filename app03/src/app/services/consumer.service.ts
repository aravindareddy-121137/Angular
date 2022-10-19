import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from '../models/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  endPoint:string;

  constructor(private httpClient:HttpClient) {
    this.endPoint="http://localhost:8888/consumers";
  }

  getAll():Observable<Consumer[]>{
    return this.httpClient.get<Consumer[]>(this.endPoint);
  }
}
