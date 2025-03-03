<template>
    <div 
        ref="container" 
        class="hidden lg:block w-full" 
    >
        <v-stage
            ref="stageRef"
            :config="{
                width: config.baseWidth,
                height: config.baseHeight,
            }"
        >
            <v-layer ref="mainLayer">
                <v-group :config="config.footer.group">
                    <v-rect 
                        :config="config.footer.background"
                    />
                </v-group>
            </v-layer>
        </v-stage>
    </div>
</template>
    
<script setup>
    import { ref, onMounted } from 'vue'
    import configSP from '../config/config-sp'
    import configTB from '../config/config-tb'
    import configPC from '../config/config-pc'
    const windowWidth = window.innerWidth
    let config = ref()
    const props = defineProps({
        footerHeight: Number
    })
    if(windowWidth < 768) {
        config.value = {...configSP}
    } else if(windowWidth >= 768 && windowWidth < 1024) {
        config.value = {...configTB}
    } else {
        config.value = {...configPC}
    }
    const stageRef = ref()
    let footerBackground = {
        x: 0,
        y: window.innerHeight = props.footerHeight
    }

    // Function to calculate and update scale
    // const fitStageIntoParentContainer = () => {
    //     const scaleX = window.innerWidth / baseWidth
    //     const scaleY = window.innerHeight / baseHeight
    //     const scale = Math.min(scaleX, scaleY)
    //     let _stage = stageRef.value.getNode();
    //     console.log()
    //     _stage.width(baseWidth * scaleX);
    //     _stage.height(baseHeight * scaleX);
    //     _stage.scale({ x: scaleX, y: scaleX });
    //     _stage.batchDraw();
    // }

    // onMounted(async () => {
    //     fitStageIntoParentContainer()
    //     // loadImageInit()
    //     window.addEventListener('resize', fitStageIntoParentContainer)
    // })
</script>
  
<style scoped>
</style>