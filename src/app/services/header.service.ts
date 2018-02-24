import { Injectable } from '@angular/core';

const menu = [
  {id:0, path: 'shop', displayName: 'Shop', action: 'goToShop', route: 'goToShop'},
  {id:1, path: 'shop', displayName: 'Shop', action: 'goToShop', route: 'goToShop'},
  {id:2, path: 'shop', displayName: 'Shop', action: 'goToShop', route: 'goToShop'},
  {id:3, path: 'shop', displayName: 'Shop', action: 'goToShop', route: 'goToShop'},
  
]

@Injectable()
export class HeaderService {

  constructor() { }
  
}
