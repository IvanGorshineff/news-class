class News {
  constructor(title) {
    this.title = title 
  }

  getTitle() {
    return this.title
  }
}

class Article extends News {
  constructor(title, text, date) {
    super(title) 
    this.text = text
    this.date = date
  }

  // show() {
  //   document.write('Новости: ' + this.title + this.text + this.date);
  // }
}


const news1 = new Article('Здоровье', 'Употребление в пищу сладкого напрямую не влияет на развитие у человека сахарного диабета, однако сладкое способствует набору лишнего веса, рассказала РИА Новости заведующая отделением гастроэнтерологии МОНИКИ им. М. Ф. Владимирского Татьяна Селиверстова.', '10:10  29.10.2023')
const news2 = new Article('Наука', 'Физики из Объединенного института ядерных исследований (ОИЯИ) в Дубне синтезировали ранее неизвестный изотоп 116-го элемента таблицы Менделеева — ливерморий-288. Это важный шаг к открытию теоретически предсказанного элемента с атомным номером 120 — унбинилия.', '12:43  26.10.2023')
const news3 = new Article('Спорт', 'Анна Фролова стала победительницей в женском одиночном катании на третьем этапе Гран - при России, который проходит в Красноярске.', ' 19:20  19.10.2023')
const news4 = new Article('Туризм', 'Июль, август и октябрь будут самыми выгодными месяцами для отпуска в 2024 году, но планировать отдых нужно заранее, рассказал РИА Новости директор по коммуникациям сервиса МТС Travel Сергей Становкин.', ' 16:20  29.10.2023')

let articles = []
articles.push(news1)
articles.push(news2)
articles.push(news3)
articles.push(news4)
  const showNewsBtn = document.querySelector('.btn')
   showNewsBtn.addEventListener('click', createDiv)

function createDiv() {
 document.querySelector('.news').innerHTML = `<div class = "art_news"></div>`
 for (let i = 0; i < articles.length; i++) {
   let row = document.createElement('div')
  row.innerHTML = `
  <h2>${articles[i].title}</h2>
  <span>${articles[i].text}</span>
  <p>${articles[i].date}</p>
  `
  document.querySelector('.news').appendChild(row)
}
}


let search = prompt('Введите название статьи из 4-х вариантов:  Здоровье, Наука, Спорт, Туризм')


for (let i = 0; i < articles.length; i++) {
  if (search === articles[i].title) {

    let row = document.createElement('div')
    row.innerHTML = `
    <h2>${articles[i].title}</h2>
    <span>${articles[i].text}</span>
    <p>${articles[i].date}</p>
    `
    document.querySelector('.news').appendChild(row)
  }
}
