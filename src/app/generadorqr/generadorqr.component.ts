import { Component } from '@angular/core';

@Component({
  selector: 'app-generadorqr',
  templateUrl: './generadorqr.component.html',
  styleUrls: ['./generadorqr.component.css']
})
export class GeneradorqrComponent {
  public qrData: string = '';

  constructor() { }

  generateQRCode(data: string) {
    this.qrData = data;
  }
}
