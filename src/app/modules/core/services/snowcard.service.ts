import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { IDropdownOption, ISnowcard, ISnowcardField, ISnowcardSection } from '../interfaces';
import { DEFAULT_SNOWCARD } from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class SnowcardService {

  baseSnowcard: ISnowcard = DEFAULT_SNOWCARD;
  snowcards: ISnowcard[] = [];

  constructor() {}

  createSnowcard(): Observable<void> {
    const snowcard = { ...this.baseSnowcard };
    snowcard.sections = snowcard.sections?.map(section => {
      return {
        ...section,
        fields: section.fields?.map(fields => {
          return { ...fields };
        })
      };
    });

    this.snowcards.push(snowcard);
    return of();
  }

  addFieldToTemplate(field: ISnowcardField, sectionIndex: number): Observable<void> {
    if (this.baseSnowcard.sections?.length && this.baseSnowcard.sections.length > sectionIndex) {
      this.baseSnowcard.sections[sectionIndex].fields?.push(field);
    }

    return of();
  }

  getSnowcardTypes(): Observable<IDropdownOption<string>[]> {
    return of([
      {
        label: 'Text',
        value: 'text'
      },
      {
        label: 'Long Text',
        value: 'textArea'
      },
      {
        label: 'Number',
        value: 'number'
      },
      {
        label: 'Checkbox',
        value: 'checkbox'
      }
    ]);
  }
}
