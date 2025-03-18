<script setup>
import { ref, reactive, defineProps } from "vue";

defineProps({
    initialValue: {
        type: Number,
        required: true,
    },
});

const count = ref(3); // same as useState(3) in react

const state = reactive({
    count: 5,
    greeting: "Good Evening!",
    fruits: ["apple", "banana", "cherry"],
    isActive: true,
    authInfo: {
        fname: "Fname",
        lname: "Lname",
        age: 11,
    },
});

function toggleStatus() {
    state.isActive = !state.isActive;
}
</script>

<template>
    <div>
        <h1 class="heading">{{ state.greeting }}</h1>
        <p>Initial Value: {{ initialValue }}</p>
        <p>Counter: {{ count }}</p>
        <p>Counter 2: {{ state.count }}</p>

        <p>{{ state.isActive ? "Working" : "Out of Order" }}</p>
        <button @click="toggleStatus">Toggle Status</button>

        <hr />

        <p>{{ state.authInfo.fname }}</p>
        <p>{{ state.authInfo.lname }}</p>

        <ul>
            {{
                state.fruits.map((fruit, index) => {})
            }}
        </ul>
    </div>
</template>

<style>
.heading {
    color: brown;
}
</style>
