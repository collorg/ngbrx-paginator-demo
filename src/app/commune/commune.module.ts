import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCommune from './commune.reducer';
import { CommunesComponent } from './communes/communes.component';
import { NgbrxPaginatorModule } from 'ngbrx-paginator';

@NgModule({
  declarations: [
    CommunesComponent
  ],
  imports: [
    CommonModule,
    NgbrxPaginatorModule.forFeature({
      paginators: [
        {
          key: 'Commune/Pagination',
          allDataSelector: fromCommune.selectAll,
          filters: {
            'By name': fromCommune.byName,
            'By code': fromCommune.byCode,
            'Population >': fromCommune.byPopulationGreaterThan,
            'Population <': fromCommune.byPopulationLesserThan,  
          } 
        }
      ]
    }),
    StoreModule.forFeature(fromCommune.communesFeature),
  ],
  exports: [
    CommunesComponent
  ]
})
export class CommuneModule { }
