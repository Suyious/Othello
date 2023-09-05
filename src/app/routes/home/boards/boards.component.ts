import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from "../../../types/board"
import { BoardsService } from 'src/app/services/boards.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {

  id = this.route.snapshot.paramMap.get('id');
  loading: boolean = true;
  error: { message: string, status: string, statusText: string } | null = null;
  menuOpen: boolean = false;
  board?: Board;

  constructor(
    private route: ActivatedRoute,
    private boardsService: BoardsService,
    private router: Router,
  ) {}

  getBoard(id: string) {
    this.boardsService.getBoard(id).pipe(
      catchError((error) => {
        this.error = {
          message: error.message,
          status: error.status,
          statusText: error.statusText
        }
        return of(null);
      })
    ).subscribe((data) => {
      this.loading = false
      if(data) {
        this.board = data;
      }
    });  
  }

  deleteBoard(id: string) {
    this.boardsService.deleteBoard(id).pipe(
      catchError((error) => {
        console.log({
          message: error.message,
          status: error.status,
          statusText: error.status
        })
        return of(null); 
      })
    ).subscribe((data) => {
      if(data === null) this.router.navigate(['/dashboard'])
    })
  }

  ngOnInit(){
    if(this.id) {
      this.getBoard(this.id);
    } 
  }
}
