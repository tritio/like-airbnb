import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';


@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

    rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {

    // tslint:disable-next-line: max-line-length
    // con lo siguiente hacemos que todas las propiedades de la instancia de rental estén indefinidad pero rental por sí mismo no lo sea, evitando el mensaje de error en consola: Cannot read property 'city' of undefined y similares
    // this.rental = new Rental();
    this.route.params.subscribe(
      (params: Params) => {
          this.getRental(params['rentalId']);
        /*  this.rental = this.rentalService.getRentalById(params['rentalId']);
          this.rental.subscribe((rental: Rental) => {
            this.rental = rental;
          }); */
      });
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      }
    );
  }


}


