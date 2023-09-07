import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { ListsService } from 'src/app/services/lists.service';
import { List, Status } from 'src/app/types/list';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() id:string = '';

  loading: boolean = true;
  lists: List[] = [];
  allStatus:Status[] = ["todo", "doing", "done"];
  active: number = 0; // To be used only in mobile

  newListItem = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    description: new FormControl<string>('', { nonNullable: true }),
  })

  constructor(
    private listsService: ListsService,
  ) {}

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
      this.loading = false;
      if(data) {
        this.lists = data;
      }
    })
  }

  addNewList(id:string, status: Status) {
    this.listsService.createList(id, {
      title: this.newListItem.value.title,
      description: this.newListItem.value.description,
      status,
    }).pipe(
      catchError(error => {
        return of(null);
      })
    ).subscribe(data => {
        if(data) {
          console.log(data);
          this.lists.unshift(data);
          this.newListItem.reset();
        }
    }) 
  }

  changeStatus(id: string, status: Status) {
    this.listsService.changeStatus(id, status).pipe(
      catchError(error => {
        return of(null);
      })
    ).subscribe(data => {
      if(data) {
        console.log(data);
        this.lists = this.lists.map(l => {
          if(l.id === data.id) return data;
          return l
        })
      }
    })
  }

  deleteList(id: string) {
    this.listsService.deleteList(id).pipe(
      catchError(e => {
        console.error(e);
        return of(null)
      })
    ).subscribe(data => {
      console.log(data)
      if(data === null){
        this.lists = this.lists.filter(li => li.id !== id)
      }
    })
  }

  clickAndDrag(e: MouseEvent) {
    if(e.target) {
    }
  }

  ngOnInit(){
    if(this.id) {
      this.getLists(this.id);
    } 
  }

}
