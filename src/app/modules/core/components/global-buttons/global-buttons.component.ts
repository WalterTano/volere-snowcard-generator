import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISnowcard } from '../../interfaces';

@Component({
  selector: 'app-global-buttons',
  templateUrl: './global-buttons.component.html',
  styleUrls: ['./global-buttons.component.scss']
})
export class GlobalButtonsComponent implements OnInit {

  buttonSelector: string = '';

  @Output() addSnowcard = new EventEmitter<void>();
  @Output() downloadSnowcards = new EventEmitter<void>();
  @Output() snowcardImport = new EventEmitter<ISnowcard[]>();

  constructor() { }

  ngOnInit(): void { }

  handleSnowcardAdd() {
    this.addSnowcard.emit();
  }

  handleSnowcardDownload() {
    this.downloadSnowcards.emit();
  }

  handleSnowcardImport($event: any) {
    const file: File = $event.target.files[0];
    const fileReader: FileReader = new FileReader();

    fileReader.onload = () => {
      const fileContent: string | ArrayBuffer | null = fileReader.result;
      if (fileContent) {
        this.emitSnowcardImportResult(JSON.parse(fileContent.toString()));
      }
    };

    fileReader.readAsText(file);
  }

  emitSnowcardImportResult(snowcards: ISnowcard[]) {
    this.snowcardImport.emit(snowcards);
  }
}
