import { Injectable } from '@angular/core';
import { Board } from '../types/board';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private baseURL = "http://192.168.29.192:3000/"

  addBoard(board: Board) {
  }

  getBoards() {
    return this.http.get<Board[]>(`${this.baseURL}/boards/`);
  }

  getBoard(id: string) {
    return this.http.get<Board>(`${this.baseURL}/boards/${id}`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
