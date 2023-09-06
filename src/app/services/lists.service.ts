import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../types/list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private baseURL = "http://192.168.29.192:3000"
  
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

  constructor(private http: HttpClient) { }
}
