import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  project:any;
  constructor (private datosPortfolio:PortfolioService) {}

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        this.project=data;
      })
  }
}
