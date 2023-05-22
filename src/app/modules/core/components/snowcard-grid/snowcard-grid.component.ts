import { Component, OnInit } from '@angular/core';
import { ISnowcard } from '../../interfaces';
import { SnowcardService } from '../../services/snowcard.service';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-snowcard-grid',
  templateUrl: './snowcard-grid.component.html',
  styleUrls: ['./snowcard-grid.component.scss']
})
export class SnowcardGridComponent implements OnInit {

  _snowcards: ISnowcard[] = this.snowcardService.snowcards;

  get snowcards(): ISnowcard[] {
    return this._snowcards.map((snowcard, i) => {
      snowcard.requirementNumber = i + 1;
      return snowcard;
    });
  }

  constructor(
    private snowcardService: SnowcardService,
    private downloadService: DownloadService
  ) { }

  ngOnInit(): void {}

  handleSnowcardDelete($event: number) {
    this._snowcards.splice($event - 1, 1);
  }

  handleSnowcardAdd() {
    this.snowcardService.createSnowcard();
  }

  handleSnowcardDownload() {
    const currDate = new Date();
    const fileName = `Volere Snowcards ${currDate.toLocaleDateString()}T${currDate.toLocaleTimeString()}.json`;
    this.downloadService.downloadFile(JSON.stringify(this._snowcards), 'application/json', fileName);
  }

  handleSnowcardImport($event: ISnowcard[]) {
    this._snowcards = $event;
  }
}
