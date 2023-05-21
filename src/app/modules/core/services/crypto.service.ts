import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  generateHash(hashLength: number): string {
    const arr = new Uint8Array(hashLength);
    crypto.getRandomValues(arr);
    return Array.from(arr, (byte) => byte.toString(hashLength).padStart(2, '0')).join('');
  }
}
