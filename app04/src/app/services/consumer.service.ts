import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
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

  getById(id:number):Observable<Consumer>{
    return this.httpClient.get<Consumer>(this.endPoint + "/" + id);
  }

  add(consumer:Consumer) : Observable<Consumer>{
    return this.httpClient.post<Consumer>(this.endPoint,consumer);
  }

  update(consumer:Consumer) : Observable<Consumer>{
    return this.httpClient.put<Consumer>(this.endPoint+ "/" + consumer.consumerId,consumer);
  }

  deleteById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.endPoint + "/" + id);
  }
}
