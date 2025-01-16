<template>
    <div> 
        <div class="formforfiltr">
        <div class="filters">
            <div class="filters">
                <div class="form-group">
                    <label>Марка</label>
                    <select id="brand" v-model="filters.brand">
                        <option value="">Все</option>
                        <option value="Toyota">Toyota</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Audi">Audi</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Kia">Kia</option>
                        <option value="Ford">Ford</option>
                        <option value="Porsche">Porsche</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Модель</label>
                    <select v-model="filters.model">
                        <option value="">Все</option>
                        <option v-for="model in filteredModels" :value="model" :key="model">{{ model }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Класс</label>
                    <select v-model="filters.class">
                        <option value="">Все</option>
                        <option value="economy">Эконом</option>
                        <option value="luxury">Люкс</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Состояние</label>
                    <select v-model="filters.condition">
                        <option value="">Все</option>
                        <option value="new">Новые</option>
                        <option value="used">Б/у</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Тип Аренды</label>
                    <select v-model="filters.type">
                        <option value="">Все</option>
                        <option value="Аренда">Аренда</option>
                        <option value="Прокат">Прокат</option>
                        <option value="Выкуп">Выкуп</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Цена с</label>
                    <input type="number" v-model="filters.priceFrom">
                </div>
                <div class="form-group">
                    <label>Цена до</label>
                    <input type="number" v-model="filters.priceTo">
                </div>
            </div>
        </div>
        </div>

        <div class="car-list">
            <div class="card" v-for="car in filteredCars" :key="car.id">
                <div class="car-slider">
                    <img :src="car.image" :alt="`${car.brand} ${car.model}`">
                </div>
                <h3>{{ car.brand }} {{ car.model }}</h3>
        <div class="car-description">
            <div class="description-item">
                <img src="/img/price.png" alt="Price Icon">
                <p>Цена: {{ car.price }} ₽ / в День</p>
            </div>
            <div class="description-item">
                <img src="/img/owner.png" alt="Owner Icon">
                <p>Владелец: {{ car.owner }}</p>
            </div>
            <div class="description-item">
                <img src="/img/car.png" alt="Type Icon">
                <p>Тип:
                {{ car.type }}
                </p>
                </div>
        </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

body { font-family: 'NucleoIcons', sans-serif; margin: 0; padding: 0; }
header {color: white; text-align: center; padding: 10px; }
.container { padding: 20px; }
.card { border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 5px; }
.card h3 {font-size: 24px;}
.card p {font-size: 22px; color: #67748e; font-weight: 600; text-align: left;}
.form-group { margin-bottom: 15px; }
.form-group label { display: block; margin-bottom: 5px; font-size: 0.875rem !important;}
.form-group input, .form-group select { width: 100%; padding: 8px; }
table { width: 100%; border-collapse: collapse; }
table th, table td { border: 1px solid #ddd; padding: 8px; text-align: center; }
table th { background-color: #f4f4f4; }
.filters { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
.filters .form-group { flex: 1; min-width: 150px; }
.car-slider img{width: 600px; height: 500px;object-fit: cover; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); margin-bottom: 20px;}
.formforfiltr {
    margin: auto;
    border-radius: 20px;
    width: 1500px;

    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    justify-items: auto;
}
.filters {
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left: 50px;
}

.car-list {
    display: grid; /* Установка сетки */
    grid-template-columns: repeat(4, 1fr); /* 4 столбца одинаковой ширины */
    gap: 20px; /* Расстояние между карточками */
    margin-top: 20px;
}

.card {
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s ease;
    background-color: white;
}

.card:hover {
    transform: translateY(-5px);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
}

.car-description {
    margin-top: 15px;
}

.description-item {
    display: flex;
    align-items: center;
}

.description-item p{
    margin-bottom: 4px;
}

.description-item img {
    width: 40px; /* Увеличиваем размер для видимости */
    height: 40px;
    margin-right: 10px;
    margin-bottom: 5px;
    background: linear-gradient(135deg, #a3e635, #16a34a); /* Зелёный градиент */
    padding: 5px; /* Пространство вокруг картинки */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Лёгкая тень */
}


</style>

<script>
import corolla from "@/assets/img/cars_photo/toyota.png";
import bmw from "@/assets/img/cars_photo/bmw.png";
import bmwx6 from "@/assets/img/cars_photo/x62.png";
import cls from "@/assets/img/cars_photo/cls63.png";
import audi from "@/assets/img/cars_photo/audi.png";
import m5 from "@/assets/img/cars_photo/m5.png";
import tesla from "@/assets/img/cars_photo/tesla.png";
import raptor from "@/assets/img/cars_photo/raptor.png";
import kia from "@/assets/img/cars_photo/kia.png";
import focus from "@/assets/img/cars_photo/focus.png";
import g63 from "@/assets/img/cars_photo/g63.png";
import panama from "@/assets/img/cars_photo/panama.png";


export default {
    name: "Каталог Авто",
    data() {
        return {
            filters: {
                brand: '',
                model: '',
                class: '',
                condition: '',
                type:'',
                priceFrom: '',
                priceTo: ''
            },
            cars: [
                { id: 1, brand: 'Toyota', model: 'Corolla', price: 5000, owner: 'Виктор М.', class: 'economy', condition:'new' ,type: 'Аренда', image: corolla },
                { id: 2, brand: 'BMW', model: 'X5', price: 15000, owner: 'Илья А.', class: 'luxury', condition:'used' ,type: 'Прокат', image: bmw },
                { id: 3, brand: 'BMW', model: 'X6', price: 17500, owner: 'Арсен М.', class: 'luxury', condition:'new' ,type: 'Аренда', image: bmwx6 },
                { id: 4, brand: 'Mercedes-Benz', model: 'CLS 63 AMG', price: 21000, owner: 'Александр И.', class: 'luxury', condition:'used' ,type: 'Прокат', image: cls },
                { id: 5, brand: 'Audi', model: 'Rs7', price: 12500, owner: 'Дмитрий С.', class: 'luxury', condition:'new' ,type: 'Аренда', image: audi },
                { id: 6, brand: 'BMW', model: 'M5', price: 45000, owner: 'Всеволод С.', class: 'luxury', condition:'used' ,type: 'Прокат', image: m5 },
                { id: 7, brand: 'Tesla', model: 'Model Y', price: 35000, owner: 'Иван О.', class: 'luxury', condition:'used' ,type: 'Прокат', image: tesla },
                { id: 8, brand: 'Ford', model: 'F-Series', price: 9500, owner: 'Егор Л.', class: 'economy', condition:'new' ,type: 'Выкуп', image: raptor },
                { id: 9, brand: 'Kia', model: 'Rio', price: 2500, owner: 'Дмитрий П.', class: 'economy', condition:'used' ,type: 'Выкуп', image: kia },
                { id: 10, brand: 'Ford', model: 'Focus', price: 7000, owner: 'Тимур Л.', class: 'economy', condition:'used' ,type: 'Аренда', image: focus },
                { id: 11, brand: 'Mercedes-Benz', model: 'G63 AMG', price: 55000, owner: 'Мирон Р.', class: 'luxury', condition:'used' ,type: 'Прокат', image: g63 },
                { id: 12, brand: 'Porsche', model: 'Panamera', price: 35000, owner: 'Богдан К.', class: 'luxury', condition:'used' ,type: 'Прокат', image: panama }
            ],
            allModels: {
            'Toyota': ['Corolla'],
            'BMW': ['X5', 'X6', 'M5'],
            'Mercedes-Benz': ['G63 AMG', 'CLS 63 AMG'],
            'Audi': ['Rs7'],
            'Tesla': ['Model Y'],
            'Kia': ['Rio'],
            'Ford': ['Focus', 'F-Series'],
            'Porsche': ['Panamera']
        }
        };
    },
    computed: {
        filteredModels() {
            if (this.filters.brand) {
                return this.allModels[this.filters.brand] || [];
            }
            return [];
        },
        filteredCars() {
            return this.cars.filter(car => {
                return (
                    (!this.filters.model || car.model.toLowerCase().includes(this.filters.model.toLowerCase())) &&
                    (!this.filters.brand || car.brand.toLowerCase().includes(this.filters.brand.toLowerCase())) &&
                    (!this.filters.class || car.class === this.filters.class) &&
                    (!this.filters.condition || car.condition === this.filters.condition) &&
                    (!this.filters.type || car.type === this.filters.type) &&
                    (!this.filters.priceFrom || car.price >= this.filters.priceFrom) &&
                    (!this.filters.priceTo || car.price <= this.filters.priceTo)
                );
            });
        }
    },
    methods: {
        updateModels() {
            this.filters.model = ''; // сбрасываем модель при изменении марки
        }
    }
};
</script>


