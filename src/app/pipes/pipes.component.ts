
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{
  title = 'Pipes';
  cadena='';
  valor: string = '';
  monto: number = 0;
  moneda: string = '';
}

