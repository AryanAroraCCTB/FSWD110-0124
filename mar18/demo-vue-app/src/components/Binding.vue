<script setup>
import { ref } from "vue";

const message = ref("SampleMessage");

const handleInput = (e) => {
    message.value = e.target.value;
};

const alertMe = () => {
    alert(message.value);
};
</script>

<template>
    <div class="binding">
        <input :value="message" type="text" placeholder="Enter Message here..." @input="handleInput" />

        <button @click="alertMe" v-if="message">Alert Me</button>
    </div>
</template>

<style>
.binding {
    margin: 10px;
    padding: 20px;
    border: 2px solid whitesmoke;
}

.binding > input,
.binding > button {
    margin: 10px;
    display: block;
}
</style>
