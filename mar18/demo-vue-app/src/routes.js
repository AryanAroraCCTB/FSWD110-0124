import { createRouter, createWebHistory } from "vue-router";
import Counter from "./components/Counter.vue";
import ConditionalRender from "./components/ConditionalRender.vue";
import Binding from "./components/Binding.vue";

const routes = [
    {
        path: "/counter",
        component: Counter,
        props: {
            products: [],
        },
    },
    { path: "/render", component: ConditionalRender },
    { path: "/bind", component: Binding },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
