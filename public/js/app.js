const Home = { template: '<body></body>' };
const Renta = { template: '<body></body>' };
const Buy = { template: '<body></body>' };


const routes = [
    { path: '/', component: Home },
    { path: '/rental-cars', component: Renta },
    { path: '/buy-cars', component: Buy }
];


const router = new VueRouter({
    routes,
    mode: 'hash'  
});


new Vue({
    el: '#app', 
    router
});
