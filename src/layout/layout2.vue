<template>
    <div ref="container" class="absolute left-0 bottom-0 hidden lg:block w-full">
        <v-stage
            ref="stageRef"
            :config="stageConfig"
        >
            <v-layer ref="mainLayer">
                <v-group :config="{x: 0, y: 0}">
    <!-- Intro PC -->
                    <v-group :config="config.intro.group">
                        <v-text :config="config.intro.h1"/>
                        <v-text :config="config.intro.h2"/>
                        <v-image :config="config.intro.image"/>
                        <v-group 
                            v-for="(item, index) in itemsIntro"
                            :config="item.group"
                        >
                            <!-- <v-rect :config="{x: 0, y: 0, width: 200, height: 200, fill: 'red' }"/> -->
                            <v-image ref="introImageRef" :config="item.image"/>
                        </v-group>
                    </v-group>
    <!-- Car -->    
                    <v-group 
                        ref="groupCarRef" 
                        :config="config.car.group"
                    >
                        <!-- <v-rect :config="config.shadow" :listening="false"/> -->
                        
                        <v-group :config="config.car.groupItem" >
                            <v-image ref="carRef" :config="config.car.body" :listening="false"/>
                        </v-group>
                        <!-- <v-image ref="volangRef" :config="volang" /> -->
                    </v-group>
                </v-group>
            </v-layer>
        </v-stage>
    </div>
</template>
    
<script setup>
    import { ref, onMounted } from 'vue'

    const cell = 40;
    const baseWidth = 1280;
    const baseHeight = 620 + 11 * cell;
    let config = ref({
        intro: {
            group: {x: 0, y: 8 * cell},
            h1: {
                x: 0,
                y: 1.5 * cell,
                text: "เลื่อน พับ ปรับที่นั่ง",
                fontSize: 48,
                fontStyle: 'bold',
                fill: "#15668E"
            },
            h2: {
                x: 0,
                y: 3 * cell,
                text: "สะดวกสบาย สไตล์ครอบครัวคุณ",
                fontSize: 30,
                fill: "#15668E"
            },
            image: {
                x: 10 * cell,
                y: 0 * cell,
                width: 8 * cell ,
                height: 8 * cell * 0.889,
                image: null,
            },
            imageName: "img-head.png",
            items: [
                {
                    group: {x: 0 , y: 5 * cell},
                    imageName: "intro1.png",
                    image: {
                        x: 0,
                        y: 0,
                        width: 105,
                        height: 114,
                        image: null
                    },
                },
                {
                    group: {x: cell * 3 , y: 5 * cell},
                    imageName: "intro2.png",
                    image: {
                        x: 0,
                        y: 0,
                        width: 105,
                        height: 114,
                        image: null
                    },
                },
                {
                    group: {x: cell * 6.4 , y: 5 * cell},
                    imageName: "intro3.png",
                    image: {
                        x: 0,
                        y: 0,
                        width: 105,
                        height: 114,
                        image: null
                    },
                },
            ]
        },
        car: {
            group: {x: 0, y: 0},
            groupItem: {x: 2 * cell},
            body: {
                image: null,
                x: cell * 19,
                y: 5.5 * cell,
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
        }
    },)
    const stageRef = ref();
    const mainLayer = ref();
    const container = ref()
    const groupCarRef = ref()
    const carRef = ref()
    const stageConfig = {width: baseWidth, height: baseHeight};
    let car = ref(config.value.car.body)
    let itemsIntro = ref(config.value.intro.items)


    function loadImage(config, name) {
        let path = new URL(`../assets/images/${name}`, import.meta.url).href ;
        let img = new Image()
        img.onload = function() {
            config['image'] = img
        }
        img.src = path
    }

    function loadImageInit() {
        loadImage(car.value, 'car.png')
        loadImage(config.value.intro.image, 'img-head.png')
        itemsIntro.value.forEach(function(el, index) {
            loadImage(el.image, el.imageName)
        })
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
        loadImageInit()
        window.addEventListener('resize', fitStageIntoParentContainer)
    })
</script>
  
<style scoped>
</style>