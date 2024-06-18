import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:any
  constructor(private pd:ProductsService, private proute:ActivatedRoute){

    this.proute.queryParamMap.subscribe(
      (qprams)=>{

        let category=qprams.get('category');

        if(category){
          this.products=this.pd.products.filter(
            (p)=>{
              return p.category==category
            }
          )
        }
        else {
          this.products=pd.products
        }

      }
    )

  }

}
