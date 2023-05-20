import { Component, OnInit, Input } from '@angular/core';
import { ISnowcard } from '../../interfaces';

@Component({
  selector: 'app-snowcard',
  templateUrl: './snowcard.component.html',
  styleUrls: ['./snowcard.component.scss']
})
export class SnowcardComponent implements OnInit {

  @Input() field: ISnowcard = { sections: [] };

  constructor() { }

  ngOnInit(): void { }

}
