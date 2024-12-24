<template>
    <div class="p-5">
        <v-stage ref="stage" :config="configKonva">
            <v-layer :config="layerCar">
                <v-image 
                    :config="car" 
                    @mouseenter="mouseDrag" 
                    @mouseleave="mouseLeave"/>
                <!-- <v-Rect :config="carRec">
                </v-Rect> -->
                <v-Rect 
                    :config="seat1"
                    @mouseenter="mouseMove"
                    @mouseleave="mouseLeave"
                />
                <!-- <v-Rect 
                    :config="seat2"
                    @mouseenter="mouseMove"
                    @mouseleave="mouseLeave"
                />
                <v-Rect :config="seat3" /> -->
                <v-Rect 
                    :config="box" 
                    @mouseenter="mouseDrag" 
                    @mouseleave="mouseLeave"
                />
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
    import sonImg from '../assets/images/son.png';
    import dadImg from '../assets/images/dad.png';
    import carImg from '../assets/images/car2.jpg';
    import { ref, onMounted } from 'vue'
    let son = ref({
        image: null,
        x: 700,
        y: 0,
        width: 60,
        height: 60,
        draggable: true,
        dragBoundFunc: function (pos) {
            return {
                x: pos.x > 740 ? 740 : pos.x <= 0 ? 0 : pos.x,
                y: pos.y > 190 ? 190 : pos.y <= 0 ? 0 : pos.y
            }
        }
    })

    let dad = ref({
        image: null,
        x: 700,
        y: 80,
        width: 60,
        height: 60,
        draggable: true,
        dragBoundFunc: function (pos) {
            return {
                x: pos.x > 740 ? 740 : pos.x <= 0 ? 0 : pos.x,
                y: pos.y > 190 ? 190 : pos.y <= 0 ? 0 : pos.y
            }
        }
    })

    let car = ref({
        image: null,
        x: 0,
        y: 0,
        width: 600,
        height: 267,
        draggable: false,
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
    let carRec = ref({
        x: 0,
        y: 0,
        width: 600,
        height: 250,
        fill: 'black',
    })
    let seat1 = ref({
        x: 200,
        y: 150,
        width: 70,
        height: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 0,
        draggable: true,
        dragBoundFunc: function (pos) {
            // console.log(pos.x)
            let x = pos.x < 180 ? 180 : pos.x > 220 ? 220 : pos.x;
            return {
                x: x,
                y: this.absolutePosition().y ,
            };
        },
    })
    let seat2 = ref({
        x: 350,
        y: 150,
        width: 70,
        height: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 0,
        draggable: true,
        dragBoundFunc: function (pos) {
            // console.log(pos.x)
            let x = pos.x < 310 ? 310 : pos.x > 370 ? 370 : pos.x;
            return {
                x: x,
                y: this.absolutePosition().y,
            };
        },
    })
    
    let seat3 = ref({
        x: 450,
        y: 150,
        width: 70,
        height: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 0,
    })

    let box = ref({
        x: 630,
        y: 160,
        width: 175,
        height: 70,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 0,
        draggable: true,
        dragBoundFunc: function (pos) {
            return {
                x: pos.x > 765 ? 765 : pos.x <= 0 ? 0 : pos.x,
                y: pos.y > 180 ? 180 : pos.y <= 0 ? 0 : pos.y
            }
        }
    })

    function mouseMove(e) {
        const stage = e.target.getStage();
        stage.container().style.cursor = 'ew-resize';
    }
    
    function mouseDrag(e) {
        const stage = e.target.getStage();
        stage.container().style.cursor = 'move';
    }

    function mouseLeave(e) {
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
        son.value.image = await loadSon(sonImg);
        dad.value.image = await loadSon(dadImg);
        car.value.image = await loadSon(carImg);
    })
</script>