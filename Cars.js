function create_car(manufacturer, model, ...kwargs) {
    let car = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < kwargs.length; i += 2) {
      let key = kwargs[i];
      let value = kwargs[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  let car = create_car("Toyota", "Camry", "color", "silver", "year", 2022);
  console.log(car);
  