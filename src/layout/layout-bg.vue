<template>
    <div 
        ref="container" 
        class="hidden lg:block w-full" 
    >
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
                        <v-rect :config="config.car.shadow" :listening="false"/>
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
    const cell = 20;
    const baseWidth = 1280;
    const baseHeight = 620 + 15 * cell;
    let config = ref({
        intro: {
            group: {x: 0, y: 4 * cell},
            h1: {
                x: cell,
                y: 3 * cell,
                text: "เลื่อน พับ ปรับที่นั่ง",
                fontSize: 48,
                fontStyle: 'bold',
                fontFamily: "PSLDisplayPro",
                fill: "#15668E"
            },
            h2: {
                x: cell,
                y: 6 * cell,
                text: "สะดวกสบาย สไตล์ครอบครัวคุณ",
                fontFamily: "PSLDisplayPro",
                fontSize: 30,
                fill: "#15668E"
            },
            image: {
                x: 22 * cell,
                y: 0 * cell,
                width: 16 * cell ,
                height: 16 * cell * 0.889,
                image: null,
            },
            imageName: "img-head.png",
            items: [
                {
                    group: {x: 0 , y: 10 * cell},
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
                    group: {x: cell * 6 , y: 10 * cell},
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
                    group: {x: cell * 12.8 , y: 10 * cell},
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
            group: {x: 0, y: 1 * cell},
            shadow: {
                x: 45 * cell,
                y: 2 * cell,
                width: 14 * cell,
                height: 38 * cell,
                fill: 'red',
                cornerRadius: cell * 4,
                shadowColor: '#124057',
                shadowBlur: 60,
                shadowOffset: { x: 0, y: 10 },
                shadowOpacity: 1,
            },
            groupItem: {x: 5 * cell},
            body: {
                image: null,
                x: cell * 38,
                y: 0,
                width: 18 * cell,
                height: 18 * cell / 0.43,
                opacity: 1
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
        const containerWidth = Math.min(1280, window.innerWidth)
        const containerHeight = container.value.offsetHeight
        // Calculate scale
        const scaleX = containerWidth / baseWidth
        const scaleY = containerHeight / baseHeight
        const scale = Math.min(scaleX, scaleY)
        let _stage = stageRef.value.getNode();
        console.log()
        _stage.width(baseWidth * scaleX);
        _stage.height(baseHeight * scaleX);
        _stage.scale({ x: scaleX, y: scaleX });
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