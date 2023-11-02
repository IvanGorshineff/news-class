// class Product {
//   productType = 'продукты питания'

//   constructor(name, price, status) {
//     this.name = name
//     this.price = price
//     this.status = status
//   }

//   //  изменение 
//   set changeStatus(value) {
//     this.status = value
//   }

//   set changePrice(value) {
//     this.price = value
//   }

//   get reading() {
//     document.write('название товара: ' + this.name + '<br>' + 'цена товара: ' + this.price + '<br>' + 'статус товара: ' + this.status + '<br>' + '<br>')
//   }

//   get sumProduct() {
//     return this.price
//   }
// }

// let prod1 = new Product('сыр', 120, 'не куплен')
// let prod2 = new Product('колбаса', 250, 'не куплен')
// let prod3 = new Product('хлеб', 30, 'не куплен')


// document.querySelector('.product').onclick = () => {
//   // prod1.reading
//   // prod2.reading
//   // prod3.reading

//   prod1.changePrice = 200
//   prod1.changeStatus = 'куплен'
//   prod2.changePrice = 200
//   prod2.changeStatus = 'куплен'
//   prod3.changePrice = 200
//   prod3.changeStatus = 'куплен'

//   prod1.reading
//   prod2.reading
//   prod3.reading


//   const products = []
//   products.push(prod1)
//   products.push(prod2)
//   products.push(prod3)

//   let sumProd = 0


//   for (i = 0; i < products.length; i++) {
//     sumProd += products[i].price
//   }


//   console.log(products)
//   document.write('summary: ' + sumProd)

// }

// class News {
//   constructor(date, headline, content) {
//     this.date = date
//     this.headline = headline
//     this.content = content
//   }

//   show() {
//     document.write(this.date + '<br>' + this.headline + '<br>' + this.content + '<br>')
//   }

//   mas() {
//     document.querySelector('.list').innerHTML = `<table class='NEWS'></table>`
//     for (i = 0; i < newsArr.length; i++) {
//       let row = document.createElement('tr')
//       row.innerHTML = `
//       <td>${newsArr[i].date}</td>
//        <td>${newsArr[i].headline}</td>
//         <td>${newsArr[i].content}</td>`

//       document.querySelector('.NEWS').appendChild(row)
//     }
//   }
// }

// let newsArr = []


// newsArr.push(new News( '23.12.2023', 'title1' , 'jgfjghfjghjfghjfgh'))
// newsArr.push(new News('12.11.2012', 'title2', 'gjbgfkgfhgbfhbjg'))

// for (i = 0; i < newsArr.length; i++){
//   // newsArr[i].show()
//   newsArr[i].mas()
// }
// // /////////////////////-----------------



class Car {
  constructor(options) {
    this.brand = options.brand
    this.color = options.color
    this.capacity = options.capacity
    this.consumption = options.consumption 
  }

  
  get reading() {
    document.write('Марка : ' + this.brand + '<br>' + 'Цвет: ' + this.color + '<br>' + 'Объем бака: ' + this.capacity + ' литров ' + '<br>' + 'Расход: ' + this.consumption + ' л/100км' + '<br>' + 'Расстояние: ' + this.infoDistance + ' км' + '<br>' + '<hr>')
  }

  get infoDistance() {
    return parseInt(this.capacity / this.consumption) * 100
  }

}

const audi = new Car({
  brand: 'Aуди А4',
  color: 'Белый',
  capacity: 60,
  consumption: 7
})

const lada = new Car({
  brand: 'Веста',
  color: 'Красный',
  capacity: 55,
  consumption: 6
})

const kia = new Car({
  brand: 'Киа Рио',
  color: 'Черный',
  capacity: 45,
  consumption: 7
})


// ----- Новый класс
class Truck extends Car {
  constructor (options) {
    super(options)
    this.payload = options.payload
    this.priceFuel = options.priceFuel
  }

  set changePriceFuel(value) {
    this.priceFuel = value
  }



  get costPrice () {
    return parseInt((this.consumption / 100) * this.priceFuel) / this.payload
  }

  
    get reading() {
      document.write('Марка : ' + this.brand + '<br>' + 'Цвет: ' + this.color + '<br>' + 'Объем бака: ' + this.capacity + ' литров' + '<br>' + 'Расход: ' + this.consumption + ' л/100км' + '<br>' + 'Расстояние: ' + this.infoDistance + ' км' + '<br>' + 'Грузоподъемность: ' + this.payload + ' т' + '<br>' + 'Себестоимость транспортировки : ' + this.costPrice +  '<hr>' )
    }
  }

const gaz = new Truck({
  brand: 'Газель',
  color: 'Желтый',
  capacity: 80,
  consumption: 11,
  payload: 1.8,
  priceFuel: 55
})


const volkswagen = new Truck({
  brand: 'Фольксваген',
  color: 'Белый',
  capacity: 80,
  consumption: 10,
  payload: 1.4,
  priceFuel: 55
})



audi.reading
lada.reading
kia.reading
gaz.reading
volkswagen.reading
audi.changePriceFuel = 55 
lada.changePriceFuel = 55 
kia.changePriceFuel = 55 
gaz.changePriceFuel = 55 
volkswagen.changePriceFuel = 55 


const cars = []

cars.push(audi)
cars.push(lada)
cars.push(kia)
cars.push(gaz)
cars.push(volkswagen)

for (i = 0; i < cars.length; i++) {
  cars[i].infoDistance
}

for (i = 0; i < cars.length; i++) {
  cars[i].costPrice
}



// ....................


class Parallelepiped{
  constructor(height,width,depth){
    
    this.height = height
    this.width = width
    this.depth = depth
  }


  show() {
    document.write('<hr>' + ' Высота: ' + this.height + '<br>' + 'Длина: ' + this.width + '<br>' + 'Глубина: ' + this.depth + '<br>' );
  }

  multiplication() { document.write(
    'Объем параллепипеда: ' + 
    this.height * this.width * this.depth + '<br>')
  }
}

const parallelepiped = new Parallelepiped(30, 60, 30)

parallelepiped.show()
parallelepiped.multiplication()

class WeightParallepiped extends Parallelepiped{
  constructor(weight){
    super()
    this.weight = weight
  }

 density() {
    document.write('Плотность параллелепипеда: ' + parseInt(this.weight / 54))
  }
}

const  weightParallepiped = new WeightParallepiped(310)

weightParallepiped.density()