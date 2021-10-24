import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/model/shared';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public recoveredId!: any;
  public teamInfo: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.recoveredId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://www.balldontlie.io/api/v1/teams/' + this.recoveredId).subscribe(finalResult => {
      this.teamInfo = finalResult
    })
  }

}
