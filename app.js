window.onload = function(){
    if(localStorage.getItem('divs')){
    sidebar.innerHTML = localStorage.getItem('divs');//берём сайдбар
    //если в localStorage есть дивс 
    }
    var arr = [];
    let doc = document.querySelectorAll('.create');//делаем нодлист
    //достаём массив из JSON
    //
    if(localStorage.getItem('arr')){
        arr = JSON.parse(localStorage.getItem('arr'));
        console.log(arr);
    };
    let vi = document.querySelectorAll('.view')
};
let btnCreare = document.getElementById('btn');
let area = document.querySelector('.in');
let sidebar = document.querySelector('.sidebar');

btnCreare.addEventListener('click',(e)=>{
    let createSideElem = document.createElement('div');//coздаем див
    
    let del = document.createElement('button');//{кнопка удаления
    del.className = 'del';
    del.innerHTML = 'del';
    
    let view = document.createElement('button');//{кнопка вывода контента
    view.className = 'view';
    view.innerHTML = 'vi';
    
    
    createSideElem.className = 'create '+ String(arr.length);//делаем класс с счётчиком
    createSideElem.innerHTML = area.value.substr(0,10) + " ..."//добавляем троеточие
    sidebar.append(createSideElem);
    
    createSideElem.append(del);
    createSideElem.append(view);
    del.addEventListener('click',(e) =>{
        let k =del.parentNode.className;
        console.log(k[k.length - 1]);//получаем последний элемент строки класса
    })
    
    
    
    //добавляем див в сайдбар
    
    
    
    
    arr.push(area.value);
    console.log(arr);//проверка
    localStorage.setItem('arr',JSON.stringify(arr)); //{ запись всякого
    localStorage.setItem('divs',sidebar.innerHTML);//{в JSON
    console.log(del.parentElement.className);
    
})

//Переименуй нахуй все переменные хоть как-то по человечески блять пидорас