import { Injectable } from '@angular/core';

import { ISnowcard } from 'src/app/modules/core/interfaces';
import { DEFAULT_SNOWCARD } from 'src/app/modules/core/mocks';

@Injectable({
  providedIn: 'root'
})
export class SnowcardService {

  constructor() { }

  createSnowcard(): ISnowcard {
    return DEFAULT_SNOWCARD;
  }
}
