import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import HelloMuamua from './components/HelloMuamua.vue';
import CommentList from './components/CommentList';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/hello',
            name: 'helloworld',
            component: HelloWorld
        },
        {
            path: '/muamua',
            name: 'muamua',
            component: HelloMuamua
        },
        {
            path: '/comment-list',
            name: 'commentList',
            component: CommentList
        }
    ]
});