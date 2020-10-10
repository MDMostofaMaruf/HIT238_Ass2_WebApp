const cacheName= 'v2';


// call install event

self.addEventListener('install', e =>{
    console.log('installed');
   
}) ;


//call activate event
self.addEventListener('activate', e=>{

    console.log('activated');

    //remove unwanted caches
    e.waitUntil(
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
self.addEventListener('fetch', e =>{
    console.log('fecthing');
    e.respondWith(
fetch(e.request)
.then(res=>{
//make copy/clone of response
const resClone = res.clone();

//open cache
caches
.open(cacheName)
.then(cache =>{

    cache.put(e.request, resClone);
});
return res;

}) .catch(err => caches.match(e.request).then(res =>res))
       
    );
});
