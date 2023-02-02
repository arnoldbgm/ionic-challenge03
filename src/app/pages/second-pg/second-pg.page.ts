import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-pg',
  templateUrl: './second-pg.page.html',
  styleUrls: ['./second-pg.page.scss'],
})
export class SecondPgPage implements OnInit {
  username: any = '';
  email: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //! Forma 01 de navegar
    //? this.username = this.route.snapshot.paramMap.get('username');
    //? this.email = this.route.snapshot.paramMap.get('email');

    //! Forma 02 de navegar
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.email = params['email'];
    });
  }
}
