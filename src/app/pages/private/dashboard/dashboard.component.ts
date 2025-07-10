import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  columns: string[] = ['name', 'type', 'quantity', 'expiry'];

  recentActivity = [
    { name: 'Safety Gloves', type: 'PPE', quantity: 205, expiry: '31 Jun' },
    { name: 'Hard Hat', type: 'PPE', quantity: 60, expiry: '30 Sep' }
  ];

}
