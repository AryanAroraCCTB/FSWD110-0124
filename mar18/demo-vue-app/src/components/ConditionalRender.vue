<script setup>
import { reactive, ref } from "vue";

const isVisible = ref(true);

const items = reactive([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
]);

const authorInfo = reactive({
    fname: "fname",
    lname: "lname",
    age: 100,
});

const toggleBtnHandler = () => {
    isVisible.value = !isVisible.value;
};
</script>

<template>
    <div>
        <p v-show="isVisible">Hello</p>

        <p>World!</p>

        <!-- <p v-if="isVisible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis odio corporis sint saepe, quas magnam ipsam quidem adipisci
            quaerat exercitationem, aliquam inventore possimus eum dolor eaque. Officiis, esse sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto debitis odio corporis sint saepe, quas magnam ipsam quidem adipisci quaerat exercitationem, aliquam inventore
            possimus eum dolor eaque. Officiis, esse sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis odio corporis
            sint saepe, quas magnam ipsam quidem adipisci quaerat exercitationem, aliquam inventore possimus eum dolor eaque. Officiis, esse sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis odio corporis sint saepe, quas magnam ipsam quidem adipisci
            quaerat exercitationem, aliquam inventore possimus eum dolor eaque. Officiis, esse sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto debitis odio corporis sint saepe, quas magnam ipsam quidem adipisci quaerat exercitationem, aliquam inventore
            possimus eum dolor eaque. Officiis, esse sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis odio corporis
            sint saepe, quas magnam ipsam quidem adipisci quaerat exercitationem, aliquam inventore possimus eum dolor eaque. Officiis, esse sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis odio corporis sint saepe, quas magnam ipsam quidem adipisci
            quaerat exercitationem, aliquam inventore possimus eum dolor eaque. Officiis, esse sunt!
        </p> -->

        <ul>
            <li v-for="fruit in items" :key="fruit.id">{{ fruit.name }}</li>
        </ul>

        <div class="card">
            <p v-for="(value, key) in authorInfo">{{ key }} - {{ value }}</p>
        </div>
    </div>

    <button @click="toggleBtnHandler">Toggle 💡</button>
</template>

<style>
.card {
    border: 2px solid white;
    padding: 20px;
    border-radius: 5px;
}
</style>
