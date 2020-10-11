if ('serviceWorker' in navigator){
    console.log("service worker supported")
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('../ServiceWorker.js')
        .then(Reg => console.log('service worker:regsiter'))
        .catch(err => console.log(`error: ${err}`))
        
    })
    
    }
        