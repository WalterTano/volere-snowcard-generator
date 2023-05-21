import { Component, OnInit } from '@angular/core';
import { ISnowcard } from '../../interfaces';
import { DEFAULT_SNOWCARD } from '../../mocks';

@Component({
  selector: 'app-snowcard-grid',
  templateUrl: './snowcard-grid.component.html',
  styleUrls: ['./snowcard-grid.component.scss']
})
export class SnowcardGridComponent implements OnInit {

  snowcards: ISnowcard[] = [];

  constructor() { }

  ngOnInit(): void {}

  handleSnowcardDelete($event: number) {
    this.snowcards.splice($event - 1, 1);
  }

  handleSnowcardAdd() {
    this.snowcards.push({
      ...DEFAULT_SNOWCARD,
      requirementNumber: this.snowcards.length + 1
    });
  }
}
