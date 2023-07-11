import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Commune } from '../commune.model';
import { NgbrxPaginatorService } from 'ngbrx-paginator';

@Component({
  selector: 'app-communes',
  templateUrl: './communes.component.html',
  styleUrls: ['./communes.component.css']
})
export class CommunesComponent {
  key = 'Commune/Pagination';
  pageItems$: Observable<Commune[]> = this.paginationService.getPageItems$<Commune>(this.key);
  filterQuery$: Observable<string> = this.paginationService.filterQuery$(this.key);
  numberOfFilteredItems$: Observable<number> = this.paginationService.numberOfFilteredItems$(this.key);
  constructor(
    private paginationService: NgbrxPaginatorService
  ) { }
}
