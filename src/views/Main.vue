<template>

<div class="navbar">
    <div class="logo"><img src="imgs/photo_2024-12-16_13-19-00.jpg"></div>
    <div class="menu">
        <a href="/" @click.prevent="goTo('/')">Аренда авто</a>
        <a href="/rental-cars" @click.prevent="goTo('/rental-cars')">Прокат авто</a>
        <a href="/buy-cars" @click.prevent="goTo('/buy-cars')">Выкуп авто</a>
        <a href="">Сдать авто</a>
        <a href="">О нас</a>
    </div>

<div class="action_but">
        <a href="#" class="order-button">АВТОРИЗОВАТЬСЯ</a>
</div>
</div>
    

    
    <div class="text_pos">
<div class="text_sld"><a> МАРКЕТПЛЕЙС АРЕНДЫ</a></div>    
<div class="txt2"><a1>АВТОМОБИЛЕЙ</a1></div>
</div>
    
        <div class="order_btn">
    <a2><img src="imgs/car.png" width="24" height="24"></a2>
    <a href="">ВЫБРАТЬ АВТОМОБИЛЬ</a>
</div>

<div class="white_box">  
<div class="isnidebox">
    <div class="coltext">
<div class="dov1"></div>
<div class="dov2"></div>
<div class="dov3"></div>
    <a1>Марка авто</a1>
    <div class="str1"><img src="imgs/ar_up.svg"></div>
    <div class="str2"><img src="imgs/ar_up.svg"></div>
    <div class="str3"><img src="imgs/calend.svg"></div>
    <div class="str4"><img src="imgs/calend.svg"></div>
    <a2>Класс авто</a2>

    <a3>Дата начала</a3>
    <a4>Дата завершения</a4>
    </div>
    <div class="search_btn">
        <a2><img src="imgs/lupa.png" width="14" height="14"></a2>
        <a href="">ПОИСК</a>
        </div>
    </div>
</div>  
    
<div class="avto">
<a>АВТОМОБИЛИ ДЛЯ ЛЮБЫХ ПОТРЕБНОСТЕЙ</a>
</div>
<!--<div class="block4type">

<button  class="block1" data-filter="category1">    <a>АРЕНДА АВТО</a> </button >
<button  class="block2" data-filter="category1">    <a2>ПРОКАТ АВТО</a2> </button >
<button  class="block3" data-filter="category1">    <a3>АВТО ПОД ВЫКУП</a3> </button >
    
</div>
-->
    
<div class="bt_hold">
    <button  class="blockc1" data-filter="category1" onclick="activateButton(this)">    <a>АРЕНДА АВТО</a> </button >
    <button  class="blockc2a" data-filter="category2" onclick="activateButton(this)">    <a2>ПРОКАТ АВТО</a2> </button >
    <button  class="blockc3" data-filter="category3" onclick="activateButton(this)">    <a3>АВТО ПОД ВЫКУП</a3> </button >
    
</div>
        
 
<div class="items">    
    
    <div class="ska" data-category="category1 category3">
    <img src="imgs/ska.png">

    <button class="borede">
    <a href="#" style="text-decoration: none; color: inherit;">
    <a1>БИЗНЕС</a1>
        <div class="circle-wrapper1">
                <span class="material-symbols-outlined"> 
                    arrow_forward
            </span>
        </div>
        </a>
    </button>
    </div>


    <div class="lada" data-category="category1 category3">
    <img src="imgs/lada.png">

    <button class="borede2">
    <a href="#" style="text-decoration: none; color: inherit;">
    <a2>ЭКОНОМ</a2>
        <div class="circle-wrapper2">
            <span class="material-symbols-outlined"> 
                arrow_forward
            </span>
        </div>
        </a>
    </button>
    </div>


    <div class="camry" data-category="category1 category3">
    <img src="imgs/camry.png">

    <button class="borede3">
    <a href="#" style="text-decoration: none; color: inherit;">
    <a3>КОМФОРТ</a3>
        <div class="circle-wrapper3">
            <span class="material-symbols-outlined"> 
                arrow_forward
            </span>
        </div>
    </a>
    </button> 
    </div>


    <div class="jeep" data-category="category1 category2">
    <img src="imgs/jeep.jpg">


    <button class="borede4">
    <a href="#" style="text-decoration: none; color: inherit;">
    <a4>КРОССОВЕРЫ</a4>
        <div class="circle-wrapper4">
            <span class="material-symbols-outlined"> 
                arrow_forward
            </span>
        </div>
        </a>
    </button>
    </div>


    <div class="vclass" data-category="category1 category2">
    <img src="imgs/vclass.png">


    <button class="borede5">
    <a href="#" style="text-decoration: none; color: inherit;">
    <a5>МИНИВЭН</a5>
        <div class="circle-wrapper5">
            <span class="material-symbols-outlined"> 
                arrow_forward
            </span>
        </div>
        </a>
    </button> 
    </div> 


    <div class="sport" data-category="category1 category2">
    <img src="imgs/camry.png">


    <button class="borede6">
    <a href="#" style="text-decoration: none; color: inherit;">
    <a6>СПОРТИВНЫЕ</a6>
        <div class="circle-wrapper6">
            <span class="material-symbols-outlined"> 
                arrow_forward
            </span>
        </div>
        </a>
    </button>
    </div>
     
</div>

<a href="#" class="custom-button">
        БОЛЬШЕ
    <div class="arbt"><img src="imgs/uil--arrow-up-right.svg"></div>
    </a>
  

    
<div class="renta">УСЛОВИЯ АРЕНДЫ</div>
<div class="savetext">
<a>Стаж вождения от 1 года</a>
<div class="sq1">
<img src="imgs/vy.jpg">
</div>
<a1>Оплата при получении авто</a1>
<div class="sq2">
<img src="imgs/litlecar.png">
</div>
<a2>Гражданство РФ</a2>
<div class="sq3">
<img src="imgs/passport.png">    
</div>
<a3>Наличный и безналичный расчет</a3>
<div class="sq4">
<img src="imgs/cardhold.png">
<div class="sq41"><img src="imgs/cash.png"></div>
</div>
</div>
    
<div class="hands">
<a2>ДЕТАЛИ</a2>
<a12>Оставьте заявку на сайте или свяжитесь с нами по телефону, чтобы обсудить все детали: наличие автомобилей, стоимость, условия аренды, а так же вопросы о доставке автомобиля</a12>
<div class="smt"><img src="imgs/smt.png"></div>
</div>
<div class="full"><img src="imgs/hands.png"></div>
    
<div class="s0001"><a>НАШИ ПРЕИМУЩЕСТВА</a></div>

<div class="back"><img src="imgs/bg2.png"></div>    
<div class="d1">
<a1>1</a1>
<a>Минимальный пробег и максимальная комплектация</a>
<div class="backa1"><img src="imgs/spedometr.png" width="362" height="259"></div>
</div>

<div class="d2">
<a1>2</a1>
<a>Аренда авто без скрытых платежей и комиссии.</a>
</div>

<div class="d3">
<a1>3</a1>
<a>Уход и обслуживание автомобилей перед подачей</a>
<div class="insqw">
<div class="back1s"><img src="imgs/cleaner.png"></div>
<div class="back2s"><img src="imgs/wing.png"></div>

</div>
</div>
    
<div class="d4">
<a>4</a>
<a1>В нашем автопарке нет автомобилей старше 8 лет.</a1>
<div class="ins2">
<div class="s">
<div class="baack1"><img src="imgs/key.png"></div>
<div class="baack2"><img src="imgs/kia.png"></div>
</div>
</div>
</div>
    
<div class="abotus">
<a>О НАС</a>
<div class="grendiv"></div>
<div class="fortext">
Компания является лидером в сфере аренды и выкупа автомобилей, предлагая своим клиентам выгодные условия и качественный сервис. За 5 лет работы на рынке компания зарекомендовала себя как надежного партнера, предоставляя услуги, которые значительно упрощают жизнь и работу своих клиентов.
<br><br>Компания предлагает более 70 различных автомобилей для аренды, что позволяет каждому клиенту найти подходящий для себя вариант. В отличие от банков, мы предлагаем выкупать транспорт напрямую, что зачастую оказывается выгоднее и удобнее для наших клиентов.
Мы помогаем живым людям, которые нуждаются в автомобиле для своих личных нужд или работы, а не корпоративным клиентам. Выкупаем автомобили не для таксопарков, а для водителей, которые хотят иметь собственный транспорт, но не могут позволить себе его покупку сразу.
<br><br>Наши специалисты всегда готовы помочь в выборе автомобиля, исходя из потребностей и бюджета клиента. Мы ценим каждого клиента и стремимся создать максимально комфортные условия для сотрудничества.
Обращаясь в нашу компанию, вы получаете не просто автомобиль, а надежного партнера в решении своих транспортных задач. Мы работаем для того, чтобы сделать вашу жизнь и работу проще и приятнее!
    </div>

</div>    
<div class="cls_cont">
<img src="imgs/cls.jpg">
</div>
<div class="undecls"></div>


<div class="join">
    
<a>ПРИСОЕДИНЯЙТЕСЬ <br>К НАМ</a>
<a1>Зарегистрируйтесь и начните пользоватся сервисом,<br> как владелец авто или арендатор. Удачи на дорогах</a1>

    <button class="buttond place-car">РАЗМЕСТИТЬ СВОЕ АВТО</button>
    <button class="buttond rent-car">АРЕНДОВАТЬ АВТОМОБИЛЬ</button>
    
</div>
<div class="pics">
<span class="keys"><img src="imgs/key.png"></span>
<span class="mb"><img src="imgs/mb.png"></span>

</div>
<div class="ourotz">
     <a>НАШИ ОТЗЫВЫ</a> 
</div>
<div class="reviews">    
    <div class="revcar">
        <img src="imgs/ford.jpg">
    </div>
    <div class="krug"></div>
    <a1>МОДЕЛЬ АВТО</a1>
    <a2>Имя<br>Фамилия</a2>
    <a3>Какой-то объемный и приятный отзыв о взаимодействии с компанией. Так же можно поставить Аватар человека котоый оставил отзыв</a3>
</div>    
    
<div class="qests">
    
<a>ВОПРОС & ОТВЕТ</a>
<a1>Наша команда готова оказать Вам всю необходимую поддержку и ответить на любые вопросы которые у Вас могут возникнуть</a1>
<span class="jagx"><img src=imgs/jagx.png width="1082" height="568"></span>
<div class="textforq">
<a2>Можно ли арендовать автомобиль<br> на несколько дней ?</a2>
    <div class="hidden-text">Да, можно арендовать автомобиль на любой<br> период времени, начиная от одного дня</div>
<div class="strip"></div>
    <a3>Какие документы необходимы для аренды автомобиля?</a3>
    <div class="hidden-text2">Ответ</div>
<div class="strip2"></div>
    <a4>Как я могу забронировать автомобиль?</a4>
<div class="hidden-text3">Ответ</div>
<div class="strip3"></div>
    <a5>Что произойдет, если я задержу возврат автомобиля?</a5>
<div class="hidden-text4">Ответ</div>
</div>
<div class="body1">
    <button class="gradient-button" onclick="toggleText()">
        <span class="plus">+</span>
    </button>
</div>
<div class="body2">
    <button class="gradient-buttona" onclick="toggleTexta()">
        <span class="plus">+</span>
    </button>
</div>
<div class="body3">
    <button class="gradient-buttona1" onclick="toggleTexta1()">
        <span class="plus">+</span>
    </button>
</div>
<div class="body4">
    <button class="gradient-buttona1a" onclick="toggleTexta1a()">
        <span class="plus">+</span>
    </button>
</div>
</div>
    
<div class="ostq">
<a>ОСТАЛИСЬ<br> ВОПРОСЫ?</a>
<a1>Заполните форму и мы свяжемся с Вами в ближайшее время</a1>
</div>
<div class="forms">
    <input type="text" class="input-field" placeholder="Ваше имя">
    <input type="text" class="input-field" placeholder="Номер телефона">
    <button class="buttona">
        СВЯЗАТЬСЯ С НАМИ
    <img src="imgs/phone.svg" alt="icon">
    </button>
<div class="cars1">
<span><img src="imgs/jaaac.png"></span>
    </div>
</div>
<div class="divider2"></div>
<span class="logodown"><img src="imgs/photo_2024-12-16_13-19-00.jpg" width="150" height="110"></span>
    
<div class="firstcol">
<a href="#">Аренда авто</a>
<a href="#">Сдать авто</a>
<a href="#">О нас</a>
<a href="#">Отзывы</a>
<a href="#">Контакты</a>
</div>
    
<div class="scndcol">
<a href="#">Инвесторам</a>
<a href="#">Условия аренды</a>
<a href="#">Каталог</a>
<a href="#">Приемущества</a>
</div>

    
<div class="lol">
<div class="lfte"></div>    
<div class="carstand"><img src="imgs/crsa.png"></div>
<div class="stnadss"><img src="imgs/sstand.png"></div>
<div class="fone"><img src="imgs/phonevvv.png"></div>
</div>    
    
    
<button class="trcs">ОСТАВИТЬ ЗАЯВКУ</button>
<div class="phnumber"><a>+7 (999) 999-99-99</a></div>


<div class="form" id="popup">
    
    <div class="forcars">
        <img src="imgs/carss.jpg">
    </div>
    <div class="txthold" id="popup-body">
        <a2>Получи дисконтную карту на </a2><span>5 % скидки в подарок</span>
    </div>
     <a3>Чтобы получить подарок заполните форму ниже и нажмите на кнопку “ПОЛУЧИТЬ”</a3>

    <div class="afks">
        <input type="text" class="input-field" placeholder="Ваше имя">
        <input type="text" class="input-field" placeholder="Номер телефона">
        <button class="butonassa doga">ПОЛУЧИТЬ<img src="imgs/ant-design--gift-filled.svg"></button>  
    </div>    
    <button class="x" onclick="closePopup()">x</button>

</div>   

    
</template>

