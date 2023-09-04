import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { BoardsService } from 'src/app/services/boards.service';
import { Board } from 'src/app/types/board';

type Error = { message: string, status: string, statusText: string };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  boards: Board[] = []
  loading: boolean = true;
  showCreate: boolean = false;
  getBoardError: Error | null = null;
  createBoardError: Error | null = null;

  newBoard = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  })

  onSubmitNewBoard() {
    console.log(this.newBoard.value)
    this.boardsService.addBoard(this.newBoard.value)
      .pipe(catchError((error) => {
        this.createBoardError = {
            message: error.message,
            status: error.status,
            statusText: error.statusText,
        }
        return of(null);
      }))
      .subscribe((data) => {
        if(data) {
          this.boards.push(data);
          this.showCreate = false;
          this.newBoard.reset();
        }
      })
  }

  getData = () => {
    this.boardsService.getBoards()
      .pipe(
        catchError((error) => {
          this.getBoardError = {
            message: error.message,
            status: error.status,
            statusText: error.statusText,
           }
          return of(null);
        })
      )
      .subscribe((data) => {
        if(data) {
          this.boards = data;
          this.showCreate = false;
        }
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
