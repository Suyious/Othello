import { Injectable } from '@angular/core';
import { Board } from '../types/board';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private baseURL = "http://192.168.29.192:3000/"

  addBoard(board: Partial<Board>) {
    return this.http.post<Board>(`${this.baseURL}/boards/`, board)
  }

  getBoards() {
    return this.http.get<Board[]>(`${this.baseURL}/boards/`);
  }

  getBoard(id: string) {
    return this.http.get<Board>(`${this.baseURL}/boards/${id}`);
  }

  deleteBoard(id: string) {
    return this.http.delete(`${this.baseURL}/boards/${id}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
