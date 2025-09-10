import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-messagechart',
  templateUrl: './messagechart.component.html',
  styleUrl: './messagechart.component.scss'
})
export class MessagechartComponent {
   chartType: ChartType = 'bar';

   
  chartData: ChartConfiguration['data'] = {
    labels: ['SMS', 'Email', 'Push'],
    datasets: [
      {
        label: 'Messages Sent',
        data: [120, 90, 45],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      }
    ]
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
