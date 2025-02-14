<template>
    <div class="">
        <!-- <img src="@images/car/car.png" alt=""> -->
        <div class="border-b border-[#f5f5f5]">
            <div class="px-5">
                <div class="flex items-center">
                    <div class="flex-1 text-[#15668E]">
                        <p class="font-bold text-2xl">เลื่อน พับ<br>ปรับที่นั่ง</p>
                        <p class="text-xl">สะดวกสบาย<br>สไตล์ครอบครัวคุณ</p>
                    </div>
                    <div class="w-[210px]">
                        <img src="@assets/images/img-head.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <Layout1 />
    </div>
</template>

<script setup>
    import Layout1 from './layout/layout1.vue'
    import { ref, onMounted } from 'vue'
    let layout = ref(1)
</script>

<style>
    .stage-container {
        width: 1280px;
        height: 100vh;
        max-width: 100%;
        margin: 0 auto;
    }
    .konvajs-content {
        margin: 0 auto;
    }
</style>