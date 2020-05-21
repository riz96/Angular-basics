import { Injectable , EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
addToCard = new EventEmitter()

cardItems = []

add(id){
  this.cardItems.push(this.products[id])
}

remove(id){
  this.cardItems = this.cardItems.filter(item => item.id !== id)
}

getProducts (){
  return this.products
}
getCardItems (){
  return this.cardItems
}



  products= [
    {
      title:'Rubic cube', 
     type:'2*2',
     image:'data:image/jpeg;base64,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',
     price:30,
      id:0,
      quantity:1
    },
    {
      title:'Rubic cube',
      type:'3*3',
      image:'https://5.imimg.com/data5/QO/CR/MY-22789453/magic-rubik-cube-500x500.jpg',
     price:32,
      id:1,
      quantity:1

    },
    {
      title:'Rubic cube',
      type:'4*4',
      image:'https://images-na.ssl-images-amazon.com/images/I/51O7jTYiDLL._AC_SY355_.jpg',
     price:35,
      id:2,
      quantity:1
    }
  ]

  

  constructor() { }
}