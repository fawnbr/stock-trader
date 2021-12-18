import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Stocks from './pages/StockList';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
});