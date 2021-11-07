import { IList } from './../data/list-data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() selected:IList | any;
  constructor() { }

  ngOnInit(): void {
  }

}
