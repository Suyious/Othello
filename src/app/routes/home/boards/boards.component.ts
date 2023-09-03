import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from "../../../types/board"
import { BoardsService } from 'src/app/services/boards.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {

  board?: Board;
  error: { message: string, status: string, statusText: string } | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: BoardsService
  ) {}

  getBoard(id: string) {
    this.service.getBoard(id).pipe(
      catchError((error) => {
        this.error = {
          message: error.message,
          status: error.status,
          statusText: error.status
        }
        return of(null);
      })
    )
    .subscribe((data) => {
      if(data) {
        this.board = data;
      }
    });  
  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.getBoard(id);
    } 
  }
}
