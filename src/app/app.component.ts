import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IList, ListData } from './data/list-data';

declare const bootstrap:any;
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listSub = new BehaviorSubject<IList[]>([]);
  listsData = this.listSub.asObservable();
  selectedItem:IList | null = null;

  constructor() {}

  ngOnInit() {
    this.listSub.next(ListData);
  }
  listSelect(item:IList) {
    this.selectedItem = item;
  }
  searched(searchString:string) {
    if(searchString) {
      const list = ListData.filter((item) => item.name.toLowerCase().indexOf(searchString.toLowerCase()) >=0);
      this.listSub.next(list);
    }else {
      this.listSub.next(ListData);
    }

  }
}
