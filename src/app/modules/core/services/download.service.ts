import { Injectable } from '@angular/core';

import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }

  downloadFile(content: string, contentType: string = 'text/plain', fileName: string) {
    const blob = new Blob([content], { type: contentType });
    saveAs(blob, fileName);
  }
}
