const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//containers
let buttonContainer = document.querySelector('.btn-container')
let menuContainer = document.querySelector('.section-center')
// console.log(menuContainer)

//categories are fetched ito this array
let categoryArray = ["All"]

//categories are find
menu.forEach((item)=> {
  if(!(categoryArray.includes(item.category))){
    categoryArray.push(item.category)
  }
})

//buttons are added according to category array
categoryArray.forEach((category) => {
  let btn = document.createElement("BUTTON");
  btn.innerHTML = category;
  btn.className = "btn btn-outline-dark btn-item"
  btn.id = `${category}`

  buttonContainer.appendChild(btn)
})

let menuItems = {}
//all food items are added by this function
function foodAdder(menus){
    for(let iter in menus){
    let item = menus[iter]
    console.log(item)
    let divDOM = document.createElement("DIV")
    divDOM.className = "menu-items col-lg-6 col-sm-12"
    
    let imageDOM = document.createElement("img")
    imageDOM.src = item.img
    imageDOM.className = "photo"
  
    let infoDivDOM = document.createElement("DIV")
    infoDivDOM.className = "menu-info"
  
    let titleDivDOM = document.createElement("DIV")
    titleDivDOM.className = "menu-title"
    let titleDOM = document.createElement("h4")
    titleDOM.innerHTML = item.title
    let priceDOM = document.createElement("h4")
    priceDOM.className = "price"
    priceDOM.innerHTML = item.price
    titleDivDOM.appendChild(titleDOM)
    titleDivDOM.appendChild(priceDOM)
  
    let textDOM = document.createElement("div")
    textDOM.className = "menu-text"
    textDOM.innerHTML = item.desc
  
    infoDivDOM.appendChild(titleDivDOM)
    infoDivDOM.appendChild(textDOM)
  
    divDOM.appendChild(imageDOM)
    divDOM.appendChild(infoDivDOM)
    let temp = {category:`${item.category}`,dom:divDOM}
    //console.log(temp)
    menuContainer.appendChild(divDOM)
  }
}

//food type functions
function addAllFoods(){
    return foodAdder(menu)
}

function addKoreanFoods(){
    let koreanMenu = menu.filter((item) => item.category == "Korea")
    return foodAdder(koreanMenu)
}

function addJapanFoods(){
  let japanMenu = menu.filter((item) => item.category == "Japan")
  return foodAdder(japanMenu)
}

function addChinaFoods(){
  let chinaMenu = menu.filter((item) => item.category == "China")
  return foodAdder(chinaMenu)
}

//button click funtion
buttonContainer.addEventListener('click', function(category){
      if(category.target.id == "Korea"){
        //menuContainer.remove()
        menuContainer.innerHTML = ""
        addKoreanFoods();
      }else if(category.target.id == "Japan"){
        menuContainer.innerHTML = ""
        addJapanFoods();
      }else if(category.target.id == "China"){
        menuContainer.innerHTML = ""
        addChinaFoods();
      }else if(category.target.id == "All"){
        menuContainer.innerHTML = ""
        addAllFoods();
      }
});

addAllFoods()