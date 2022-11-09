const arrIcon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const user = []
const vegetable = []
const animal = []

for( let i = 0; i < arrIcon.length; i++){
    const objIcon = arrIcon[i];
    if (objIcon.type === 'user') {
        user.push(objIcon)
    } else if (objIcon.type === 'vegetable') {
        vegetable.push(objIcon)
    } else if (objIcon.type === 'animal') {
        animal.push(objIcon)
    }
};



const row = document.querySelector('.stile')

const randomColorUser = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
for (const i of user) {
    i.color = `#${randomColorUser}`;
}

const randomColorAnimal = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
for (const i of animal) {
    i.color = `#${randomColorAnimal}`;
}

const randomColorvegetable = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
for (const i of vegetable) {
    i.color = `#${randomColorvegetable}`;
}



for(let i = 0; i < arrIcon.length; i++){
    const eleDiv = document.createElement('div')
    eleDiv.classList.add('col-2');
    eleDiv.classList.add('box');
    eleDiv.innerHTML = `<i class="${arrIcon[i].family} ${arrIcon[i].prefix}${arrIcon[i].name}"></i>`
    eleDiv.style.color = arrIcon[i].color;
    row.append(eleDiv)
}

let category = document.querySelector('.filterCategory');

category.addEventListener('change', function () {

    if(this.value == 'all'){
        row.innerHTML = "";
        for(let i = 0; i < arrIcon.length; i++){
            const eleDiv = document.createElement('div')
            eleDiv.classList.add('col-2');
            eleDiv.classList.add('box');
            eleDiv.innerHTML = `<i class="${arrIcon[i].family} ${arrIcon[i].prefix}${arrIcon[i].name}"></i>`
            eleDiv.style.color = arrIcon[i].color;
            row.append(eleDiv)
        }
    };

    if(this.value == 'animal'){
        row.innerHTML = "";
        for(let i = 0; i < animal.length; i++){
            const eleDiv = document.createElement('div')
            eleDiv.classList.add('col-2');
            eleDiv.classList.add('box');
            eleDiv.innerHTML = `<i class="${animal[i].family} ${animal[i].prefix}${animal[i].name}"></i>`
            eleDiv.style.color = animal[i].color;
            row.append(eleDiv)
        }
    };

    if(this.value == 'vegetable'){
        row.innerHTML = "";
        for(let i = 0; i < vegetable.length; i++){
            const eleDiv = document.createElement('div')
            eleDiv.classList.add('col-2');
            eleDiv.classList.add('box');
            eleDiv.innerHTML = `<i class="${vegetable[i].family} ${vegetable[i].prefix}${vegetable[i].name}"></i>`
            eleDiv.style.color = vegetable[i].color;
            row.append(eleDiv)
        }
    };

    if(this.value == 'user'){
        row.innerHTML = "";
        for(let i = 0; i < user.length; i++){
            const eleDiv = document.createElement('div')
            eleDiv.classList.add('col-2');
            eleDiv.classList.add('box');
            eleDiv.innerHTML = `<i class="${user[i].family} ${user[i].prefix}${user[i].name}"></i>`
            eleDiv.style.color = user[i].color;
            row.append(eleDiv)
        }
    }
});




