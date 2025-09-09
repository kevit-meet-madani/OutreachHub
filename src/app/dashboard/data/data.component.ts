import { Component, Output, EventEmitter} from '@angular/core';
import { Work, Workspace } from '../data';
import { AuthService } from '../../auth.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { CampaignService } from '../../campaigns/campaign.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {

    constructor(private campService:CampaignService) {}


    @Output() dates = new EventEmitter<string>();
    fromdate!:Date
    todate!:Date

    idarray!:any
    countarray!:any

   OnShow() {
  console.log(this.fromdate + " " + this.todate);

  const workspace = localStorage.getItem('workspace');
  const dateRange = `${this.fromdate} ${this.todate}`;

  this.campService.getCampaingnChart(`${dateRange} ${workspace}`).subscribe({
    next: (response) => {
      console.log(response);

      const labels = response.map(item => item._id);
      const data = response.map(item => item.count);

      // Reassign data object to trigger chart update
      this.data = {
        labels,
        datasets: [
          {
            label: 'Campaigns per Day',
            data,
            borderColor: '#42A5F5',
            backgroundColor: 'rgba(66, 165, 245, 0.3)',
            fill: true,
            tension: 0.3,
          },
        ]
      };
    },
    error: (error) => {
      console.log(error);
    }
  });
}







     public type: ChartType = 'line';
   
      public data: ChartConfiguration['data'] = {
      //  labels: ['2025-08-25', '2025-08-26', '2025-08-27', '2025-08-28', '2025-08-29'],
      labels: this.idarray,
       datasets: [
         {
           label: 'Campaigns per Day',
          //  data: [3, 7, 5, 8, 6],
          data:this.countarray,
           borderColor: '#42A5F5',
           backgroundColor: 'rgba(66, 165, 245, 0.3)',
           fill: true,
           tension: 0.3,
         },
       ],
     };
   
     public options: ChartConfiguration['options'] = {
       responsive: true,
       plugins: {
         legend: { display: true },
         tooltip: { enabled: true },
       },
       scales: {
         y: {
           beginAtZero: true,
           ticks: {
           stepSize: 0,
         }
         },
       },
     };
    
}
