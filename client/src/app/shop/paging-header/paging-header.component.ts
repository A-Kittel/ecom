import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})
export class PagingHeaderComponent implements OnInit {
  @Input() pageSize: number;
  @Input() totalCount: number;
  @Input() pageNumber: number;


  constructor() {
  }

  ngOnInit(): void {
  }


}
