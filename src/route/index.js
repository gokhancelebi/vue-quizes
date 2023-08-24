import { createRouter,createWebHistory } from "vue-router";
import NotFoundView from './../views/404View.vue'
import HomeView from './../views/HomeView.vue'
import QuizView from './../views/QuizView.vue'

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name : "home",
            component : HomeView
        },
        {
            path : "/quiz/:quiz_id",
            name : "quiz",
            component : QuizView
        },
        {
            path: '/:catchall(.*)*',
            name: 'Not Found',
            component : NotFoundView
        }
    ]
})


export default router