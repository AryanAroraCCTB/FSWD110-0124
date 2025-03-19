<script setup>
import { ref, watch } from "vue";

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
    console.log(num);
    count.value += num;
};

const decrementHandler = (event, num) => {
    count.value -= num;
};

const countChangeHandler = (event, message) => {
    console.log(message);
};
</script>

<template>
    <div>
        <h3>Counter Component</h3>

        <p>{{ count }}</p>

        <div class="container">
            <input type="number" placeholder="Enter a number..." @input="(event) => countChangeHandler(event, `inputing...`)" />
        </div>

        <button @click="(event) => incrementHandler(event, 3)">Increment</button>
        <button @click="(event) => decrementHandler(event, 3)">Decrement</button>
    </div>
</template>

<style>
.container {
    margin: 30px;
}
</style>
