<template>
    <div class="">
        <!-- <img src="@images/car/car.png" alt=""> -->
        <div class="h-[300px]"></div>
        <div class="border-b lg:border-0 border-[#f5f5f5]">
            <div class="px-5 md:px-10 max-w-[1320px] mx-auto lg:hidden">
                <div class="flex items-center">
                    <div class="flex-1 text-[#15668E]">
                        <p class="font-bold text-[38px] md:text-[42px]">เลื่อน พับ<br class="md:hidden">ปรับที่นั่ง</p>
                        <p class="text-2xl md:text-[32px]">สะดวกสบาย<br class="md:hidden">สไตล์ครอบครัวคุณ</p>
                    </div>
                    <div class="w-[210px]">
                        <img src="@assets/images/img-head.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="relative lg:min-h-screen gradient lg:flex justify-center items-center flex-col ">
            <Layout1 />
        </div>
        <div class="h-screen"></div>
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .konvajs-content {
        margin: 0 auto;
    }
    .gradient:before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: linear-gradient(to right,white 0%, #f2f2f2 65%, #e2e2e2 100%);
        transform: rotate(-180deg);
    }
</style>