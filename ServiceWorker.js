const cacheName= 'v';


// call install event

self.addEventListener('install', event =>{
    console.log('installed');
   
}) ;


//call activate event
self.addEventListener('activate', event=>{

    console.log('activated');

    //remove unwanted caches
    event.waitUntil(
        caches.keys().then(cacheName=>{
return Promise.all(

    cacheName.map(cache=>{
if(cache !=cacheName){
console.log('clearing old caches')
return caches.delete(cache);

}

    })
)

        })
    );
});



//call Fetch Event
self.addEventListener('fetch', event =>{
    console.log('fecthing');
    event.respondWith(
fetch(event.request)
.then(res=>{
//make copy/clone of response
const resClone = res.clone();

//open cache
caches
.open(cacheName)
.then(cache =>{

    cache.put(event.request, resClone);
});
return res;

}) .catch(err => caches.match(event.request).then(res =>res))
       
    );
});
