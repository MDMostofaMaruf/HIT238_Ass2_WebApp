if ('serviceWorker' in navigator){
    console.log("service worker supported")
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('HIT238_Ass2_WebApp/js/ServiceWorker.js')
        .then(Reg => console.log('service worker:regsiter', Reg))
        .catch(err => console.log(`error: ${err}`))
        
    })
    
    }
        