
            const myChat=document.querySelector('#my_chat');
            const myMessage=document.querySelector('.my_message');
         const btn=document.querySelector('.btn');
            const chatOutput = document.querySelector(".chat_output");
            const lockation= document.querySelector(".lockation");
            const linkLockation= document.querySelector(".link_lockation");
           const myLockation=document.querySelector(".my_lockation");
             const success=(position)=>{
               linkLockation.href=`https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
                          linkLockation.textContent='Ссылка на геолокацию';  
            }
          const webSocket = new WebSocket('wss://echo.websocket.org');
            webSocket.onmessage=function(event){
         const data=JSON.parse(event.data);
              myChat.innerHTML+='<div>'+data.message+'</div>';
           
            }
          
btn.addEventListener('click',()=>{
    
   message=myMessage.value
    webSocket.send(JSON.stringify({
      'message':message  
    }));
     writeToChat(myMessage.value, false);
    myMessage.value='';
    function writeToChat(message) {
    let messageHTML = `<div class='eho_message'>${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
});
            lockation.addEventListener('click',()=>{
           linkLockation.textContent='';
            linkLockation.href='';
                if('geolocation in navigator'){
                     navigator.geolocation.getCurrentPosition(success);  
                }else{
                   Lockation.textContent='Местоположение недоступно '; 
                }
            })