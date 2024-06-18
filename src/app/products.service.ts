import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products=[
    {
      'id':1,
      'image':'',
      'name':'shirt',
      'category':'mens',
      'price':5000
    },
    {
      'id':2,
      'image':'https://ttbazaar.com/cdn/shop/products/TS-078_PO3_OML.jpg?v=1623061981',
      'name':'T-shirt',
      'category':'mens',
      'price':2000
    },
    {
      'id':3,
      'image':'https://static05.jockey.in/c_scale,h_1463,w_1098/jockey/uploads/dealimages/13151/originalimages/navy-blazer-women-t-shirt-aw89-8.jpg',
      'name':'sarees',
      'category':'womens',
      'price':10000
    },
    {
      'id':4,
      'image':'https://assets.ajio.com/medias/sys_master/root/20231124/20yY/65600e23ddf7791519981ad8/-473Wx593H-466820204-aqua-MODEL.jpg',
      'name':'T-Shirts',
      'category':'womens',
      'price':1000
    },
    {
      'id':5,
      'image':'https://m.media-amazon.com/images/I/61vykNKCQbL._AC_UY1100_.jpg',
      'name':'shirts',
      'category':'kids',
      'price':10000
    },
    {
      'id':6,
      'image':'https://5.imimg.com/data5/WR/IN/MY-20436704/kids-plain-shirt.jpg',
      'name':'T-Shirts',
      'category':'kids',
      'price':1000
    }
    

  ]
}
