import { Component, OnInit } from '@angular/core';
import { MiapiService } from '../api/miapi.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  tweets = [];
  profile = [];
  constructor(private api: MiapiService) { }

  ngOnInit() {
    this.api.GetTweets(4).subscribe((data) => (this.tweets = data));
    this.api.GetProfile().subscribe((data) => (this.profile = data));
  }

}
