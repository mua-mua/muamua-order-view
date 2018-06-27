import Vue from 'vue';
import Router from 'vue-router';
import HelloMuamua from './components/HelloMuamua.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/muamua',
            name: 'muamua',
            component: HelloMuamua
        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders
        }
    ]
});
