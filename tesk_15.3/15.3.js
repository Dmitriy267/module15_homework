 const btn=document.querySelector('.btn');
            const mydiv=document.querySelector('.mydiv');
            const mylocation=document.querySelector('.mylocation');
            const mapLink=document.querySelector('#map-link');
            const success=(position)=>{
                mylocation.textContent=`Широта ${position.coords.latitude}. Долгота ${position.coords.longitude}`
                mapLink.href=`https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
                mapLink.textContent=`Ссылка на карту`;
            }
            const error = () => {
  mylocation.textContent = 'Информация о местоположении недоступна';
}
btn.addEventListener('click',()=>{
    mydiv.textContent=`Высота экрана ${screen.height} px, ширина экрана ${screen.width} px`;
    mapLink.href='';
   mapLink.textContent='';
   if('geolocation' in navigator){
       mylocation.textContent='Определение места положения...';
     navigator.geolocation.getCurrentPosition(success,error);
        
    }else{
       mylocation.textContent='Информация о местоположении недоступна';
    }
});