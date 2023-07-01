import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  before = `
  <div class="list-group">
    <div class="list-group-item" *ngFor="let item of collection$ | async">
      {{ item.code }} {{ item.nom }}
    </div>
  </div>
  `
  after = `
  <lib-ngbrx-paginator
    [collection$]="collection$"
    [pagination$]="pagination$"
    [actions]="actions"
  ></lib-ngbrx-paginator>
  
  <div class="list-group">
    <div class="list-group-item" *ngFor="let item of pageItems$ | async">
      {{ item.code }} {{ item.nom }}
    </div>
  </div>
  `
}
