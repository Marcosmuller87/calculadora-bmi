import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'M';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  mudarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'M';
  }

  femenino() {
    this.sexo = 'F';
  }

  calcularBMI() {
    const BMI = this.peso / Math.pow(this.altura / 100,2);
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
}
