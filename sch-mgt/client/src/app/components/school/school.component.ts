import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  processing: boolean = false;

  school: any = {};


  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {

  }

  addSchool() {
    this.processing = true;
    this.schoolService.addSchool(this.school)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/schoolList'])
        }
      })

  }

}
