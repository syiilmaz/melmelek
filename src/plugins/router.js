import Vue from "vue"
import VueRouter from "vue-router"

import Cart from "/home/sena/melmelek/pages/cart"
import login from "/home/sena/melmelek/pages/login"

import store from "./store"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: "/",
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/login")
                }
            }
        },
        {
            path: "/cart",
            component: Cart,
            beforeEnter(to, from, next) {
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/login")
                }
            }
        },
        {path: "/login", component: login}
    ],
    mode: "history"
})