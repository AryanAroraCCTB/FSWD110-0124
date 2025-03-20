<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <router-link to="/counter" class="nav-btns">Counter Page</router-link>
        <RouterLink to="/render" class="nav-btns">Render Page</RouterLink>
        <RouterLink to="/bind" class="nav-btns">Bind Page</RouterLink>

        <div class="bad-practice">
            <a href="/counter">Counter Page</a>
            <a href="/render">Render Page</a>
            <a href="/bind">Bind Page</a>
        </div>

        <RouterView></RouterView>
    </div>
</template>

<style scoped>
.bad-practice {
    border: 3px double red;
    margin: 10px;
    padding: 10px;
}
.nav-btns,
a {
    margin: 10px;
    padding: 10px;
}
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
