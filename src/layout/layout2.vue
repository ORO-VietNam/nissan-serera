<template>
    <div ref="container" class="absolute left-1/2 top-1/2 hidden lg:block w-full max-w-[1280px] -translate-x-1/2 -translate-y-1/2">
        <v-stage
            ref="stageRef"
            :config="stageConfig"
        >
            <v-layer ref="mainLayer">
<!-- Car -->    
                <v-group 
                    ref="groupCarRef" 
                    :config="config.group"
                >
                    <v-rect :config="config.shadow" :listening="false"/>
                    <v-group :config="config.groupItem" >
                        <v-image ref="carRef" :config="config.body" :listening="false"/>
                    </v-group>
                    <!-- <v-image ref="volangRef" :config="volang" /> -->
                </v-group>
            </v-layer>
        </v-stage>
    </div>
</template>
    
<script setup>
    import { ref, onMounted, computed } from 'vue'
    import configSP from '../config/config-sp'
    import configTB from '../config/config-tb'
    import configPC from '../config/config-pc'
    import items from '../config/item-layout-1'
    
    const windowWidth = window.innerWidth
    const cell = 40;
    const baseWidth = 1280;
    const baseHeight = 620 + 11 * cell;
    let config = ref( {
        group: {x: 0, y: 0},
        shadow: {
            x: 22 * cell,
            y: 0 * cell,
            width: 7 * cell,
            height: 15 * cell,
            fill: 'red',
            cornerRadius: cell,
            shadowColor: '#124057',
            shadowBlur: 80,
            shadowOffset: { x: 0, y: 0 },
            shadowOpacity: 1,
            opacity: 0
        },
        background: {
            x: 20 * cell,
            y: 1.5 * cell,
            width: 11 * cell,
            height: 12 * cell,
            fill: 'white',
            cornerRadius: cell,
            shadowColor: '#124057',
            shadowBlur: 40,
            shadowOffset: { x: 0, y: 0 },
            shadowOpacity: .2,
            opacity: 0.9,
        },
        groupItem: {x: 2 * cell},
        body: {
            image: null,
            x: cell * 19,
            y: 0 * cell,
            width: 9 * cell,
            height: 9 * cell / 0.43,
            opacity: 1
        },
        volang: {
            image: null,
            x: 22.15 * cell,
            y: -0.2 * cell,
            width: 6.65 * cell,
            opacity: 1,
        },
    },)
    const stageRef = ref();
    const mainLayer = ref();
    const container = ref()
    const groupCarRef = ref()
    const carRef = ref()
    const stageConfig = {width: baseWidth, height: baseHeight};
    let car = ref(config.value.body)
    let volang = ref(config.value.volang)



    // window.addEventListener('resize', stageScale)

    function loadImage(config, name) {
        let path = new URL(`../assets/images/${name}`, import.meta.url).href ;
        let img = new Image()
        img.onload = function() {
            config['image'] = img
        }
        img.src = path
    }

    function imageInit() {
        // config.value.car.seats.forEach(function(el, index) {
        //     loadImage(el.image, el.imageName)
        // })
    }



    function loadCar() {
        loadImage(car.value, 'car.png')
    }

    // Function to calculate and update scale
    const fitStageIntoParentContainer = () => {
        if (!container.value || !stageRef.value) return
        const containerWidth = container.value.offsetWidth
        const containerHeight = container.value.offsetHeight
        // Calculate scale
        const scaleX = containerWidth / baseWidth
        const scaleY = containerHeight / baseHeight
        const scale = Math.min(scaleX, scaleY)
        let _stage = stageRef.value.getNode();
        _stage.width(baseWidth * scale);
        _stage.height(baseHeight * scale );
        _stage.scale({ x: scale, y: scale });
        _stage.batchDraw();
    }

    onMounted(async () => {
        fitStageIntoParentContainer()
        loadCar()
        imageInit()
        window.addEventListener('resize', fitStageIntoParentContainer)
    })
</script>
  
<style scoped>
</style>