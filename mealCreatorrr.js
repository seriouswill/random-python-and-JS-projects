const menu = {
  _courses: {
    apps: [],
    mains: [],
    desserts: []
  }, 
  get apps() {
    return this._courses.apps;
  },
  set apps(appsIn) {
    this._courses.apps = appsIn;
  },
  get mains() {
        return this._courses.mains;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  get desserts() {
        return this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
      apps: this.apps,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDish(courseName, dishName, dishPrice) {
   const dish = {
     price: dishPrice,
     name: dishName,
      };
      return this.courses[courseName].push(dish);
    },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const mathIndex = Math.floor(Math.random() * dishes.length);
    return dishes[mathIndex];
    },
  generateRandomMeal () {
    const appetizer = menu.getRandomDishFromCourse('apps');
    const main = menu.getRandomDishFromCourse('mains');
    const dessert = menu.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, followed by ${main.name}, and finally ${dessert.name}. The total price is ${totalPrice}.`;
  }
  }
menu.addDish('apps', 'fries', 3.54);
menu.addDish('apps', 'carrots', 3.99)
menu.addDish('apps', 'elbows', 7.54)

menu.addDish('mains', 'eyes', 78.23)
menu.addDish('mains', 'bats', 9.77)
menu.addDish('mains', 'fried concrete', 1002.32)

menu.addDish('desserts', 'limpet', 0.54)
menu.addDish('desserts', 'wind', 88.88)
menu.addDish('desserts', 'sadness', 1897273.20)

const meal = menu.generateRandomMeal();

console.log(meal)



