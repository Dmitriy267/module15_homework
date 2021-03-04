 const btn=document.querySelector('.btn');
       const myResult=document.querySelector('.myResult');
         
            const userTime=document.querySelector('.user_time');
  const userDate=document.querySelector('.user_date');
            btn.addEventListener('click',()=>{

              if('geolocation' in navigator) {
                  navigator.geolocation.getCurrentPosition((position)=>{
                   const latitude=position.coords.latitude;
                  const longitude=position.coords.longitude; 
                   fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`)
                      .then((response)=>response.json())
                          .then((json) => {
                        userTime.textContent=`Временная зона, в которой находится пользователь:  ${json.timezone}`;
                         userDate.textContent=`Местные дата и время:  ${json.date_time_txt}`;
                        });
                      })
           
            
                   
              } else{
                  myResult.textContent='Информация недоступна';
              }
            });