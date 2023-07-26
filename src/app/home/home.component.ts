import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  release = '0.2.0'
  moduleAfter = `
import * as fromData from 'data/data.reducer';
import { NgbrxPaginatorModule } from 'ngbrx-paginator';
// [...]
  NgbrxPaginatorModule.forFeature({
    'DataList/Pagination': // The name of the paginator must be unique for the application
    {
      allDataSelector: fromData.selectAll,

      // Optional
      filters: { // You can provide more than one filter by paginator.
        'Name': { filter: fromData.byName },
        'Code': { filter: fromData.byCode },
      },
      pageSizeOptions: [10, 20, 30] // Defaults to [5, 10, 25, 100]
    }
  }),
  `
  componentClassBefore = `
import * as fromData from 'data/data.reducer';
// [...]

  export class DataListComponent {
    collection$: Observable<Data[]> = fromData.selectAll;
  
    constructor(
    ) { }
  `
  componentClassAfter = `
import { NgbrxPaginatorService } from 'ngbrx-paginator';
// [...]

  export class DataListComponent {
    key = 'DataList/Pagination';
    collection$: Observable<Data[]> =
      this.paginationService.getPageItems$<Data>(this.key);
  
    constructor(
      private paginationService: NgbrxPaginatorService
    ) { }
  `
  templateBefore = `
  <div class="list-group">
    <div class="list-group-item"
      *ngFor="let item of collection$ | async">
      <app-item [item]="item"></app-item>
    </div>
  </div>
  `
  templateAfter = `
  <ngbrx-paginator [key]="key"></ngbrx-paginator>
  <!-- nothing changes -->
  <div class="list-group">
    <div class="list-group-item"
      *ngFor="let item of collection$ | async">
      <app-item [item]="item"></app-item>
    </div>
  </div>
  `
}
