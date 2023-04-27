import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about:any;
  constructor (private datosPortfolio:PortfolioService) {}

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        this.about=data;
      })
  }
}