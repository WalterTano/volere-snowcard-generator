import { Component } from '@angular/core';
import { CryptoService } from './modules/core/services/crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cryptoService: CryptoService) { }
}
