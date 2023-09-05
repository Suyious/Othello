import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from "../../../types/board"
import { BoardsService } from 'src/app/services/boards.service';
import { catchError, of } from 'rxjs';
import { ListsService } from 'src/app/services/lists.service';
import { List, Status } from 'src/app/types/list';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {

  id = this.route.snapshot.paramMap.get('id');
  error: { message: string, status: string, statusText: string } | null = null;
  menuOpen: boolean = false;
  board?: Board;
  allStatus:Status[] = ["todo", "doing", "done"];
  active: number = 0; // To be used only in mobile
  lists?: List[] = [];

  constructor(
    private route: ActivatedRoute,
    private boardsService: BoardsService,
    private listsService: ListsService,
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

  getLists(id: string) {
    this.listsService.getLists(id).pipe(
      catchError((error) => {
        console.log({
          message: error.message,
          status: error.status,
          statusText: error.status
        })
        return of(null); 
      })
    ).subscribe((data) => {
      if(data) {
        this.lists = data;
        console.log(this.lists)
      }
    })
  }

  // To be used on mobile
  setActive(active: number) {
    this.active = active
    console.log(this)
  }

  ngOnInit(){
    if(this.id) {
      this.getBoard(this.id);
      this.getLists(this.id);
    } 
  }
}
