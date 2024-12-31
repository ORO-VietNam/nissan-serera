<template>
    <div class="p-5">
        <div>
            <select class="border border-black/55 h-10 w-32" name="" id="" v-model="layout">
                <option value="1">Layout 1</option>
                <option value="2">Layout 2</option>
                <option value="3">Layout 3</option>
                <option value="4">Layout 4</option>
            </select>
        </div>
        <div class='container w-[500px] max-w-full aspect-[1]'>
            <Layout1  v-if="layout == 1"/> 
            <Layout2  v-if="layout == 2"/> 
            <Layout3  v-if="layout == 3"/> 
            <Layout4  v-if="layout == 4"/> 
        </div>
    </div>
</template>

<script setup>
    import Layout1 from './layout/layout1.vue'
    import Layout2 from './layout/layout2.vue'
    import Layout3 from './layout/layout3.vue'
    import Layout4 from './layout/layout4.vue'
    import { ref, onMounted } from 'vue'
    let layout = ref(1)

</script>

<style>
    /* .konvajs-content {
        background-color: #000;
    } */
</style>