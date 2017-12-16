import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  schools: Array<string> = [];
  barData: any[] = [];

  //piechart
  pieChartLabels: string[] = ['O-Level Schools', 'O-Level & A-level Schools'];
  pieChartColors: string[] = ["green", "yellow"];
  pieChartData: number[] = [];
  pieChartType: string = 'pie';

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = [];
  barChartType: string = 'bar';
  barChartLegend: boolean = true;

  barChartData: any[] = [
    { data: [], label: 'Series A' }
  ];






  constructor(private schoolService: SchoolService) { }

  ngOnInit() {

    this.schoolService.getSchools()
      .subscribe(res => {
        for (var i in res.results) {
          this.schools.push(res.results[i].name);
          this.barData.push(res.results[i].no_students);

        }
        this.barChartData[0].data = JSON.parse(JSON.stringify(this.barData));
        this.barChartLabels = JSON.parse(JSON.stringify(this.schools));


        console.log(this.barChartData);
      });

    this.schoolService.getOARation()
      .subscribe(res => {
        this.pieChartData = [res.o.length, res.o_a.length];
        this.pieChartLabels = [res.o.length + ' O-Level Schools', res.o_a.length + ' O-Level & A-level Schools'];
      })

  }
  randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }


}
