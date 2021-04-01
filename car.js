// Задание №6

class Car {

    #brand;
    get brand() {
        return this.#brand;
    };
    set brand(value) {
        if (typeof(value) == "string" && value.length >= 1 && value.length <= 50) this.#brand = value;
    }

    #model;
    get model() {
        return this.#model;
    };
    set model(value) {
        if (typeof(value) == "string" && value.length >= 1 && value.length <= 50) this.#model = value;
    }

    #yearOfManufacturing;
    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    };
    set yearOfManufacturing(value) {
        if (typeof(value) == "number" && value >= 1900 && value <= (new Date()).getFullYear()) this.#yearOfManufacturing = value;
    }

    #maxSpeed;
    get maxSpeed() {
        return this.#maxSpeed;
    };
    set maxSpeed(value) {
        if (typeof(value) == "number" && value >= 100 && value <= 300) this.#maxSpeed = value;
    }

    #maxFuelVolume;
    get maxFuelVolume() {
        return this.#maxFuelVolume;
    };
    set maxFuelVolume(value) {
        if (typeof(value) == "number" && value >= 5 && value <= 20) this.#maxFuelVolume = value;

    }

    #fuelConsumption;
    get fuelConsumption() {
        return this.#fuelConsumption;
    };
    set fuelConsumption(value) {
        if (typeof(value) == "number") this.#fuelConsumption = value;

    }

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
    }
    shutDownEngine() {
        if (!this.#isStarted) throw new Error("Машина ещё не заведена");
        this.#isStarted = false;
    }

    fillUpGasTank(amount) {
        if (typeof(amount) != "number" || amount <= 0) {
            throw new Error("Неверное количество топлива для заправки");
        } else if (amount + this.#currentFuelVolume > this.#maxFuelVolume) {
            throw new Error("Топливный бак переполнен");
        }
        this.#currentFuelVolume += amount;
    }
    drive(speed, duration) {
        if (typeof(speed) != "number" || speed <= 0) throw new Error("Неверная скорость")
        if (typeof(duration) != "number" || duration <= 0) throw new Error("Неверное количество часов")
        if (speed > this.#maxSpeed) throw new Error("Машина не может ехать так быстро")
        if (!this.#isStarted) throw new Error("Машина должна быть заведена, чтобы ехать")
        if (speed * duration * this.#fuelConsumption / 100 > this.#currentFuelVolume) throw new Error("Недостаточно топлива")
        this.#currentFuelVolume -= speed * duration * this.#fuelConsumption / 100
        this.#mileage += speed * duration

    }
}

let bibika = new Car

bibika.brand = 'ZAZ'
bibika.model = '90TFYO'
bibika.yearOfManufacturing = 2013
bibika.maxSpeed = 280
bibika.maxFuelVolume = 20
bibika.fuelConsumption = 8


bibika.fillUpGasTank(8);

bibika.start()

bibika.drive(100, 1)

bibika.fillUpGasTank(20);

bibika.shutDownEngine()

console.log('bibika', bibika);

lst = [bibika.currentFuelVolume,
    bibika.fuelConsumption,
    bibika.isStarted,
    bibika.maxFuelVolume,
    bibika.maxSpeed,
    bibika.mileage,
    bibika.model,
    bibika.yearOfManufacturing
]

for (el of lst) {
    console.log('el', el);
}

// module.exports = Car
