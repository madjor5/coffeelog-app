import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.scss']
})
export class InputfieldComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
