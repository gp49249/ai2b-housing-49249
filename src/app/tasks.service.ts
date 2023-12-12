import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl = 'http://localhost:48249/todos';

  constructor(private http: HttpClient) {}

  public index(archived = false): Observable<Task[]> {
    const url = `${this.baseUrl}/?archived=${archived}`;
    return this.http.get<Task[]>(url);
  }

  public post(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  public put(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  public delete(task: Task): Observable<any> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.delete(url);
  }
}
