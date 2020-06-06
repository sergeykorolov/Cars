const car = (id, name, model, year, hp, phone, image) => (
    {id, name, model, year, hp, phone, image}
)

const log = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car(0, 'Subaru', 'Impreza', '2004', '300', '+7 929 123 45 67', 'images/sti.jpg'),
    car(1, 'Mitsubishi', 'Evolution 9', '2005', '300', '+7 929 123 45 67', 'images/evo9.jpg'),
    car(2, 'Peugeot', '206RC', '2004', '177', '+7 929 123 45 67', 'images/206rc.jpg')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarId: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar (carId) {
            this.car = cars[carId];
            this.selectedCarId = carId;
        },
        newOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false;
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            return this.cars
                .filter(car => car.name.toLowerCase().includes(this.search.toLowerCase())
                    || car.model.toLowerCase().includes(this.search.toLowerCase()));
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
})