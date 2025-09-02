import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {
    recentCampaigns = [
    { name: 'Summer Blast', date: '2025-08-30', tags: ['promo', 'summer'] },
    { name: 'New Product Launch', date: '2025-08-28', tags: ['product', 'launch'] },
    { name: 'Feedback Request', date: '2025-08-26', tags: ['survey', 'feedback'] },
    { name: 'Event Invite', date: '2025-08-24', tags: ['event', 'vip'] },
    { name: 'Discount Offer', date: '2025-08-22', tags: ['discount', 'promo'] },
  ];

  topTags = [
    { tag: 'promo', contactCount: 320 },
    { tag: 'event', contactCount: 280 },
    { tag: 'launch', contactCount: 250 },
    { tag: 'feedback', contactCount: 220 },
    { tag: 'vip', contactCount: 200 },
  ];
}
