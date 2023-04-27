import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.css']
})
export class HabilitiesComponent {
  habilities:any;
  constructor (private datosPortfolio:PortfolioService) {}

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        this.habilities=data;
      })
  }

}
