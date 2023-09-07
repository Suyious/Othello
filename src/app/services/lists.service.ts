import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List, Status } from '../types/list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private baseURL = environment.baseURL
  
  getLists(boardId: string) {
    return this.http.get<List[]>(`${this.baseURL}/boards/${boardId}/lists/`);
  }

  createList(boardId: string, list: Partial<List>) {
    return this.http.post<List>(`${this.baseURL}/boards/${boardId}/lists/`, list);
  }

  updateList(listId: string, body: Partial<List>) {
    return this.http.put<List>(`${this.baseURL}/lists/${listId}/`, body);
  }

  deleteList(listId: string) {
    return this.http.delete<List>(`${this.baseURL}/lists/${listId}/`);
  }

  changeStatus(listId: string, status: Status) {
    return this.updateList(listId, { status })
  }

  constructor(private http: HttpClient) { }
}
