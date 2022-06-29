import css from './index.css';

// Діма, не знаю як бути з картинками, якщо ніхто не допоможе, то залишаю роботу таку як зараз. 
//Погуглила, показує глобально. Вибач. Не впевнена, що вірно зробила импорт css

<body>
    <div class="main__content">
        <div class="main__content_text">
            <p>Let's find a crowdfunding projects</p>
            <p>around the world</p>
        </div>
    </div>
    <div class="block1__search d-flex justify-content align-items-center" >

        <div class="block1__search_left">
            All Category </div>
        <div class="arrow"></div>

        <div class="block1__search_right">
            <input type="text" placeholder="Find Projects" />
            <div class="search"></div>
        </div>
    </div>
    <div class="popular_search">
        Popular Search:
    </div>
    <div class="technology">
        Technology Projects
    </div>
    <div class="cancer">
        Cancer Charity Programs
    </div>
    <div class="design">
        Design Interior
    </div>
</body>