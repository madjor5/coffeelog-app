import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  @Input() featureText: string;

  constructor(private _location: Location) { }

  goBack(): void {
    this._location.back();
  }

  ngOnInit() {
  }

}
