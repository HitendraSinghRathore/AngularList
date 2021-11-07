import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from '../data/list-data';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() listData: IList[] | null =  [];
  @Output() selectedList = new EventEmitter<IList>();
  selectedId:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  detailsSelected(selectedList:IList) {
    this.selectedId = selectedList.id;
    this.selectedList.emit(selectedList);
  }
}
