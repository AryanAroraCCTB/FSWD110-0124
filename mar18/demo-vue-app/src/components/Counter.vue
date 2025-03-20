<script setup>
import { ref, watch } from "vue";

defineProps({
    products: [],
});

const count = ref(11);

const changeByNumber = ref(0);

const loggedInAccount = ref("test@cctb.ca");

watch(count, (newValue, oldValue) => {
    console.log(`Value going from ${oldValue} to ${newValue}`);
});

watch(loggedInAccount, (newLogin, oldLogin) => {
    // signOut(oldLogin)
    // clear cookies
    // expire the token
    // ----------------
    // signIn(newLogin)
    // set new cookies
});

const incrementHandler = (event, num) => {
    count.value += num;
};

const decrementHandler = (event, num) => {
    count.value -= num;
};

const countChangeHandler = (event, message) => {
    console.log(message);

    changeByNumber.value = parseInt(event.target.value);
};

const handleBtnClick = (event) => {
    console.log(`button clicked`);
};
</script>

<template>
    <div>
        <h3>Counter Component</h3>

        <p>{{ count }}</p>

        <div class="container">
            <input type="number" placeholder="Enter a number..." @input="(event) => countChangeHandler(event, `inputing...`)" />

            <input type="text" placeholder="Enter a name..." v-on:input="(event) => handleBtnClick(event)" />
        </div>

        <button @click="(event) => incrementHandler(event, changeByNumber)">Increment</button>
        <button @click="(event) => decrementHandler(event, changeByNumber)">Decrement</button>
        <button v-on:click="handleBtnClick">Click Me</button>

        <button v-on:click="handleBtnClick">
            Click Me 2
            <button v-on.stop:click="handleBtnClick">Click Me</button>
        </button>

        <button @click="handleBtnClick">
            Click Me 2
            <button @click.stop="handleBtnClick">Click Me</button>
        </button>
    </div>
</template>

<style>
.container {
    margin: 30px;
}
</style>
