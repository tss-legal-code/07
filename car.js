// Урок № 7, Задание №6

class Car {

    constructor(
        brandInit,
        modelInit,
        yearOfManufacturingInit,
        maxSpeedInit,
        maxFuelVolumeInit,
        fuelConsumptionInit
    ) {

        this.#setBrandFromConstructor = function(value) {
            if (typeof(value) == "string" && value.length >= 1 && value.length <= 50) {
                this.#brand = value;
            } else {
                throw new Error("brand: строка от =1 до =50 символов включительно");
            }
        };
        this.#setBrandFromConstructor(brandInit);

        this.#setModelFromConstructor = function(value) {
            if (typeof(value) == "string" && value.length >= 1 && value.length <= 50) {
                this.#model = value;
            } else {
                throw new Error("model: строка от =1 до =50 символов включительно");
            }
        };
        this.#setModelFromConstructor(modelInit);

        this.#setYearOfManufacturingFromConstructor = function(value) {
            if (typeof(value) == "number" && value >= 1900 && value <= (new Date()).getFullYear()) {
                this.#yearOfManufacturing = value;
            } else {
                throw new Error("yearOfManufacturing: число от =1900 до =текущего года включительно");
            }
        };
        this.#setYearOfManufacturingFromConstructor(yearOfManufacturingInit);

        this.#setMaxSpeedFromConstructor = function(value) {
            if (typeof(value) == "number" && value >= 100 && value <= 300) {
                this.#maxSpeed = value;
            } else {
                throw new Error("maxSpeed: число от =100 до =300 км/ч");
            }
        }
        this.#setMaxSpeedFromConstructor(maxSpeedInit);

        this.#setMaxFuelVolumeFromConstructor = function(value) {
            if (typeof(value) == "number" && value >= 5 && value <= 20) {
                this.#maxFuelVolume = value;
            } else {
                throw new Error("maxFuelVolume: число в литрах от =5 до =20");
            }
        }
        this.#setMaxFuelVolumeFromConstructor(maxFuelVolumeInit);

        this.#setFuelConsumptionFromConstructor = function(value) {
            if (typeof(value) == "number") {
                this.#fuelConsumption = value;
            } else {
                throw new Error("fuelConsumption: число в л/100км");
            }
        }
        this.#setFuelConsumptionFromConstructor(fuelConsumptionInit)
    }
    
    #brand;
    get brand() {
        return this.#brand;
    };
    #setBrandFromConstructor;
    set brand(value) {
        this.#setBrandFromConstructor(value)
    };


    #model;
    get model() {
        return this.#model;
    };
    #setModelFromConstructor;
    set model(value) {
        this.#setModelFromConstructor(value)
    };

    #yearOfManufacturing;
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    };
    #setYearOfManufacturingFromConstructor;
    set yearOfManufacturing(value) {
        this.#setYearOfManufacturingFromConstructor(value)
    };

    #maxSpeed;
    get maxSpeed() {
        return this.#maxSpeed;
    };
    #setMaxSpeedFromConstructor;
    set maxSpeed(value) {
        this.#setMaxSpeedFromConstructor(value)
    };

    #maxFuelVolume;
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    };
    #setMaxFuelVolumeFromConstructor
    set maxFuelVolume(value) {
        this.#setMaxFuelVolumeFromConstructor(value)
    };

    #fuelConsumption;
    get fuelConsumption() {
        return this.#fuelConsumption;
    };
    #setFuelConsumptionFromConstructor
    set fuelConsumption(value) {
        this.#setFuelConsumptionFromConstructor(value)
    };

    #currentFuelVolume = 0;
    get currentFuelVolume() {
        return this.#currentFuelVolume;
    };

    #isStarted = false;
    get isStarted() {
        return this.#isStarted;
    };

    #mileage = 0;
    get mileage() {
        return this.#mileage;
    };

    start() {
        if (this.#isStarted) throw new Error("Машина уже заведена");
        this.#isStarted = true;
    };

    shutDownEngine() {
        if (!this.#isStarted) throw new Error("Машина ещё не заведена");
        this.#isStarted = false;
    };

    fillUpGasTank(amount) {
        if (typeof(amount) != "number" || amount <= 0) {
            throw new Error("Неверное количество топлива для заправки");
        } else if (amount + this.#currentFuelVolume > this.#maxFuelVolume) {
            throw new Error("Топливный бак переполнен");
        };
        this.#currentFuelVolume += amount;
    };

    drive(speed, duration) {
        if (typeof(speed) != "number" || speed <= 0) throw new Error("Неверная скорость");
        if (typeof(duration) != "number" || duration <= 0) throw new Error("Неверное количество часов");
        if (speed > this.#maxSpeed) throw new Error("Машина не может ехать так быстро");
        if (!this.#isStarted) throw new Error("Машина должна быть заведена, чтобы ехать");
        if (speed * duration * this.#fuelConsumption / 100 > this.#currentFuelVolume) throw new Error("Недостаточно топлива");
        this.#currentFuelVolume -= speed * duration * this.#fuelConsumption / 100;
        this.#mileage += speed * duration;
    }

}

let bibika = new Car(
    brand = "ZAZ",
    model = '90TFYO90TFYO90TFYO90TFYO0TFYO',
    yearOfManufacturing = 2013,
    maxSpeed = 180,
    maxFuelVolume = 20,
    fuelConsumption = 8
)

// bibika.brand = "sdfsdf sdf sdf dsf dsf sdf df sdf f dsf dsf sdf dsf dsf sdf df sdf f dsf dsf sdf dsf dsf sdf df sdf f dsf dsf ds f"
bibika.fillUpGasTank(8);

bibika.start()

bibika.drive(100, 1)

bibika.fillUpGasTank(20);

bibika.shutDownEngine()

console.log('bibika', bibika);


// module.exports = Car
