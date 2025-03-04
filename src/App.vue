<template>
    <div class="relative gradient overflow-hidden">
        <div class="relative lg:flex justify-center items-center min-h-screen">
            <Layout1 />
        </div>
    </div>
</template>

<script setup>
    import Layout1 from './layout/layout1.vue'
    import { ref, onMounted } from 'vue'
    let layout = ref(1)
</script>

<style>
    .stage-container {
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
    .konvajs-content {
        margin: 0 auto;
    }
    .gradient:before {
        content: '';
        /* display: none; */
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 100%;
        transform: translateY(-50%);
        background-image: linear-gradient(to left,white 0%, #f2f2f2 65%, #e2e2e2 100%);

        @screen lg {
            display: block;
            height: 200%;
        }   
    }
</style>