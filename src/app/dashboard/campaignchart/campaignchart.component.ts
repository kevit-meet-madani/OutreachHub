import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-campaignchart',
  templateUrl: './campaignchart.component.html',
  styleUrl: './campaignchart.component.scss'
})
export class CampaignchartComponent {
   public type: ChartType = 'line';

   public data: ChartConfiguration['data'] = {
    labels: ['2025-08-25', '2025-08-26', '2025-08-27', '2025-08-28', '2025-08-29'],
    datasets: [
      {
        label: 'Campaigns per Day',
        data: [3, 7, 5, 8, 6],
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
