import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountryShow from "../views/CountryShow.vue";
import VideoShow from "../views/VideoShow.vue";
import Cookies from "../views/Cookies.vue";
import Gallery from "../views/Gallery.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Domov | GezaHorvatVideo",
        },
    },
    {
        path: "/drzava/:countryName",
        name: "country-show",
        component: CountryShow,
        props: true,
        meta: {
            title: "Videposnetki | GezaHorvatVideo",
        },
    },
    {
        path: "/video/:id",
        name: "video-show",
        component: VideoShow,
        props: true,
        meta: {
            title: "Videoposnetki | GezaHorvatVideo",
        },
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: {
            title: "O strani | GezaHorvatVideo",
        },
    },
    {
        path: "/legal",
        name: "Legal",
        component: Cookies,
        meta: {
            title: "Zasebnost | GezaHorvatVideo",
        },
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery,
        meta: {
            title: "Galerija | GezaHorvatVideo",
        },
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
