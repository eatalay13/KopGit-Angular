import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.alertifyService.success('Hoşgeldiniz');
  }

}
