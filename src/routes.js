// var url = kokirishop
import Home from "./assets/components/routes/Home.vue";
import Products from "./assets/components/routes/Products.vue";
import About from "./assets/components/routes/About.vue";
import Contact from "./assets/components/routes/Contact.vue";
import Subscribe from "./assets/components/routes/Subscribe.vue";

export const routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "/products",
        component: Products
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/subscribe",
        component: Subscribe
    }
];