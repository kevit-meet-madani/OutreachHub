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

   this.campService.getMsgTypeChart(`${dateRange} ${workspace}`).subscribe({
    next: (response : any[]) =>{


      let arr1:number[] = []
     
      let arr2:number[] = []
      response.forEach(item => {
         
        for(let t of item.types){
          if(t.type === "text and image"){
          
          arr1.push(t.total);
        }
        else{
          arr2.push(t.total);
        }
        }

        
      })

      console.log(arr1.length +" "+arr2);

      this.Data1 = {
  labels: response.map(item => item._id),
  datasets: [
    {
      label: 'text and image',
      data: arr1, 
      backgroundColor: '#42A5F5'
    },
    {
      label: 'text',
      data: arr2, 
      backgroundColor: '#66BB6A'
    }
  ]
}
      
      
    },
    error: (error) => {
      console.log(error);
    }
   })


   this.campService.getContactsReachedChart(`${dateRange} ${workspace}`).subscribe({
    next: (response) => {
      console.log(response);

      this.Data2 = {
    labels: response.map(item => item._id.createdAt),
    datasets: [
      {
        label: 'Contacts Reached per day',
        data: response.map(item => item.count),
        borderColor: '#AB47BC',
        backgroundColor: 'rgba(171, 71, 188, 0.3)',
        fill: true,
        tension: 0.4
      }
    ]
  }
    },

    error: (error) => {
      console.log(error);
    }
   })
  
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



     chartType: ChartType = 'bar';

Data1: ChartConfiguration['data'] = {
  labels: [], // Days on X-axis
  datasets: [
    {
      label: 'text and image',
      data: [], // per day SMS count
      backgroundColor: '#42A5F5'
    },
    {
      label: 'text',
      data: [], // per day Email count
      backgroundColor: '#66BB6A'
    }
  ]
};

chartOptions: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    legend: { display: true }, // show message type legend
    title: {
      display: true,
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Messages Count'
      }
    },
    x: {
      title: {
        display: true,
        text: 'Date'
      }
    }
  }
};


Data2: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Contacts Reached',
        data: [],
        borderColor: '#AB47BC',
        backgroundColor: 'rgba(171, 71, 188, 0.3)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  chartOptions2: ChartConfiguration['options'] = {
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
