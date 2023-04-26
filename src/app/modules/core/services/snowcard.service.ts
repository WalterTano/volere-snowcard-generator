import { Injectable } from '@angular/core';

import { Snowcard } from 'src/app/modules/core/interfaces';
import { DEFAULT_SNOWCARD } from 'src/app/modules/core/mocks';

@Injectable({
  providedIn: 'root'
})
export class SnowcardService {

  constructor() { }

  createSnowcard(): Snowcard {
    return DEFAULT_SNOWCARD;
  }
}
