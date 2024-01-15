import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('./components/Home.vue')
        },
        {
            path: '/detail',
            component: () => import('./components/Detail.vue')
        },
        {
            path: '/new-detail',
            component: () => import('./components/NewDetail.vue')
        }
    ]
})

export default router;
