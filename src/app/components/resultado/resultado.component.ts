import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacao: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacao = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if (this.bmi < 18.5) {
      this.resultado = 'Abaixo do peso';
      this.interpretacao = 'Você está abaixo do peso';
    }
    if (this.bmi < 25 && this.bmi >= 18.5) {
      this.resultado = 'Peso ideal';
      this.interpretacao = 'Você está no peso ideal';
    }
    if (this.bmi >= 25 && this.bmi < 30) {
      this.resultado = 'Sobrepeso';
      this.interpretacao =
        'Você está acima do peso, tente seguir um regime de alimentação mais equilibrado';
    }

    if (this.bmi >= 30 && this.bmi < 35) {
      this.resultado = 'Obesidade grau I';
      this.interpretacao =
        'Você esta com obesidade grau I, procure um profissional para realizar um exame mais detalhado';
    }
    if (this.bmi >= 35 && this.bmi < 40) {
      this.resultado = 'Obesidade grau II';
      this.interpretacao =
        'Você está com obesidade grau II, procure um profissional para realizar um exame mais detalhado';
    }
    if (this.bmi >= 40) {
      this.resultado = 'Obesidade grau III';
      this.interpretacao =
        'Você está com obesidade grau III, procure um profissional para realizar um exame mais detalhado';
    }
  }
}
