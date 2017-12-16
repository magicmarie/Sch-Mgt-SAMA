import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: Array<object> = [];
  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.schoolService.getSchools()
      .subscribe(res => {
        this.schools = res.results;
      })
  }

}
