import { Injectable } from '@angular/core';
import { Board } from '../types/board';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private baseURL = environment.baseURL;

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
