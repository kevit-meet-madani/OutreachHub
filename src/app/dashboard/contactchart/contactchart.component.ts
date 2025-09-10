import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-contactchart',
  templateUrl: './contactchart.component.html',
  styleUrl: './contactchart.component.scss'
})
export class ContactchartComponent {
    chartType: ChartType = 'line';

    @Input() dates!:string;

    ngOnInit(){
      console.log(this.dates);
    }

  Data2: ChartConfiguration['data'] = {
    labels: ['2025-08-25', '2025-08-26', '2025-08-27'],
    datasets: [
      {
        label: 'Contacts Reached',
        data: [300, 450, 250],
        borderColor: '#AB47BC',
        backgroundColor: 'rgba(171, 71, 188, 0.3)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
