import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchData = new EventEmitter();
  searchForm = new FormGroup({
    search: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.searchData.emit(data ? data.trim() : data);
    })
  }

}
