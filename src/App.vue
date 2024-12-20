<template>
    <div class="p-5">
        <v-stage ref="stage" :config="configKonva">
            <v-layer :config="layerCar">
                <v-Rect :config="car"
                ></v-Rect>
                <v-Rect 
                    :config="seat1"
                    @mouseenter="mouseMove"
                    @mouseleave="mouseLeave"
                    ></v-Rect>
                    <v-Rect 
                    :config="seat2"
                    @mouseenter="mouseMove"
                    @mouseleave="mouseLeave"
                    ></v-Rect>
                    <v-Rect :config="seat3"></v-Rect>
                    <v-image 
                        :config="son" 
                        @mouseenter="mouseDrag" 
                        @mouseleave="mouseLeave" />
                    <v-image 
                        :config="dad" 
                        @mouseenter="mouseDrag" 
                        @mouseleave="mouseLeave"/>
                    
            </v-layer>
        </v-stage>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    let son = ref({
        image: null,
        x: 700,
        y: 0,
        width: 60,
        height: 60,
        draggable: true,
    })

    let dad = ref({
        image: null,
        x: 700,
        y: 80,
        width: 60,
        height: 60,
        draggable: true,
    })

    let configKonva = ref({
        width: 800,
        height: 250,
    })

    let layerCar = ref({
        clip:{ 
            x: 0, 
            y: 0, 
            width: 600
        }
    })
    let car = ref({
        x: 0,
        y: 0,
        width: 600,
        height: 250,
        fill: 'black',
    })
    let seat1 = ref({
        x: 50,
        y: 170,
        width: 70,
        height: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 0,
        draggable: true,
        dragBoundFunc: function (pos) {
            // console.log(pos.x)
            let x = pos.x < 25 ? 25 : pos.x > 75 ? 75 : pos.x;
            return {
                x: x,
                y: x != 255 ? this.absolutePosition().y : pos.y,
            };
        },
    })
    let seat2 = ref({
        x: 200,
        y: 170,
        width: 70,
        height: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 0,
        draggable: true,
        dragBoundFunc: function (pos) {
            // console.log(pos.x)
            let x = pos.x < 175 ? 175 : pos.x > 225 ? 225 : pos.x;
            return {
                x: x,
                y: x != 255 ? this.absolutePosition().y : pos.y,
            };
        },
    })
    let seat3 = ref({
        x: 350,
        y: 170,
        width: 70,
        height: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 0,
    })

    function mouseMove(e) {
        console.log('move')
        const stage = e.target.getStage();
        stage.container().style.cursor = 'ew-resize';
    }
    
    function mouseDrag(e) {
        console.log('drag')
        const stage = e.target.getStage();
        stage.container().style.cursor = 'move';
    }

    function mouseLeave(e) {
        console.log('leave')
        const stage = e.target.getStage();
        stage.container().style.cursor = 'default';
    }

    async function loadSon(img) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = img;
            image.onload = () => resolve(image); 
            image.onerror = reject; 
        });
    }

    onMounted(async function() {
        son.value.image = await loadSon("./src/images/son.png");
        dad.value.image = await loadSon("./src/images/dad.png");
    })
</script>

<style>
    /* .konvajs-content {
        background-color: #000;
    } */
</style>