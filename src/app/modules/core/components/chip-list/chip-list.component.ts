import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipListComponent),
      multi: true,
    },
  ],
})
export class ChipListComponent implements ControlValueAccessor {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  value: string[] = [];

  @ViewChild('input') input?: ElementRef<HTMLInputElement>;

  @Input() placeholder: string = '';

  private onChange: ((value: any) => void) | undefined;
  private onTouch: (() => void) | undefined;

  constructor() {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && !this.value.includes(value)) {
      this.value.push(value);
      this.emitChanges();
    }

    event.chipInput!.clear();
  }

  remove(chip: string): void {
    const index = this.value.indexOf(chip);

    if (index >= 0) {
      this.value.splice(index, 1);
      this.emitChanges();
    }
  }

  writeValue(value: any): void {
    if (Array.isArray(value)) {
      this.value = value;
    } else {
      this.value = [];
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: any): void {
    this.onTouch = onTouch;
  }

  private emitChanges(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }

    if (this.onTouch) {
      this.onTouch();
    }
  }
}
