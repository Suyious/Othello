import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { BoardsService } from 'src/app/services/boards.service';
import { Board } from 'src/app/types/board';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  boards: Board[] = []
  loading: boolean = true;
  showCreate: boolean = false;
  error: { message: string, status: string, statusText: string } | null = null;

  newBoardTitle:string = "";

  getData = () => {
    this.boardsService.getBoards()
      .pipe(
        catchError((error) => {
          this.error = {
            message: error.message,
            status: error.status,
            statusText: error.statusText,
           }
          return of(null);
        })
      )
      .subscribe((data) => {
        if(data) this.boards = data;
      });
  }

  createBoard() {
    console.log("This should Create Board")
  }

  ngOnInit() {
    this.getData();
  }

  constructor(
    private boardsService: BoardsService
  ) { }

}
