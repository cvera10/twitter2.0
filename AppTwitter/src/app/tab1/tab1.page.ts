import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { MiapiService } from '../api/miapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public profile = [];
  public tweets: [];

  constructor(private api: MiapiService) {}
  ngOnInit() {

  }
}
