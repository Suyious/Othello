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
  board?: Board;
  error: { message: string, status: string, statusText: string } | null = null;
  menuOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: BoardsService,
    private router: Router,
  ) {}

  getBoard(id: string) {
    this.service.getBoard(id).pipe(
      catchError((error) => {
        this.error = {
          message: error.message,
          status: error.status,
          statusText: error.statusText
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

  deleteBoard(id: string) {
    this.service.deleteBoard(id).pipe(
      catchError((error) => {
        console.log({
          message: error.message,
          status: error.status,
          statusText: error.status
        })
        return of(null); 
      })
    ).subscribe((data) => {
      this.router.navigate(['/dashboard'])
    })
  }

  ngOnInit(){
    if(this.id) {
      this.getBoard(this.id);
    } 
  }
}
