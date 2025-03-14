import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  text: string = 'Tipo de conta: ';
  
  soma1() {
    this.resultado = this.num1 + this.num2;
    this.text = 'Soma: '
  }

  subt1() {
    this.resultado = this.num1 - this.num2;
    this.text = 'Subtração: '
  }
  
  multi1() {
    this.resultado = this.num1 * this.num2;
    this.text = 'Multiplicação: '
  }

  divi1() {
    this.resultado = this.num1 / this.num2;
    this.text = 'Divisão: '
  }
} 
