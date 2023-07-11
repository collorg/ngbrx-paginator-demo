import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDepartement from './departement.reducer';
import { DepartementsComponent } from './departements/departements.component';
import { NgbrxPaginatorModule } from 'ngbrx-paginator';

@NgModule({
  declarations: [
    DepartementsComponent
  ],
  imports: [
    CommonModule,
    NgbrxPaginatorModule.forFeature({
      paginators: [
        {
          key: 'Departement/Pagination',
          pageSizeOptions: [10, 20, 30],
          allDataSelector: fromDepartement.selectAll,
          filters: {
            'By name': fromDepartement.byName,
            'By code': fromDepartement.byCode,
            'By region': fromDepartement.byRegion
            }
        }
      ]
    }),
    StoreModule.forFeature(fromDepartement.departementsFeature),
  ],
  exports: [
    DepartementsComponent
  ]
})
export class DepartementModule { }
