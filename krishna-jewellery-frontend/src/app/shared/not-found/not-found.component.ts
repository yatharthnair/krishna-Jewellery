import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public userRole: string = '';
  public userAuth: any = null;

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('404 Not-Found')
  }

  redirectNotFound() {
    this.router.navigate([('/home')]);
  }

  redirectLogin() {
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
  }
}
