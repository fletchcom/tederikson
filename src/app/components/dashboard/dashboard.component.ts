import { Component, OnInit, NgZone, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from "@angular/router";
import { AuthService } from '../../shared/services/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  opened = true;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}