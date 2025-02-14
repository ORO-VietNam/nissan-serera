<template>
    <div ref="container" class="stage-container">
        <v-stage
            ref="stageRef"
            :config="stageConfig"
        >
            <v-layer ref="mainLayer">
<!-- Car -->
                <v-group ref="groupCarRef" :config="config.car.group">
                    <v-rect :config="config.car.shadow"/>
                    <v-group :config="config.car.groupItem">
                        <v-image ref="carRef" :config="car" />
                        <v-image ref="" :config="seat1" />
                        <v-image ref="" :config="seat2" />
                        <v-image ref="" :config="seat3" />
                        <v-image ref="" :config="seat4" />
                    </v-group>
                    <v-image ref="volangRef" :config="volang" />
                </v-group>
                <v-rect
                    v-for="rect in dropZones"
                    ref="dropZonesRef"
                    :key="rect.id"
                    :config="rect"
                />
<!-- controll  -->
                <v-group>
                    <v-rect :config="config.head.background"/>
                    <v-group :config="config.head.filter.group">
                        <v-rect :config="config.head.filter.background"/>
                        <v-rect :config="config.head.filter.activeBackground"/>
                        <v-group :config="config.head.filter.all.group">
                            <v-rect :config="config.head.filter.all.rect"/>
                            <v-text :config="config.head.filter.all.text"/>
                        </v-group>
                        <v-group  :config="config.head.filter.people.group">
                            <v-rect :config="config.head.filter.people.rect"/>
                            <v-text :config="config.head.filter.people.text"/>
                        </v-group>
                        <v-group :config="config.head.filter.items.group">
                            <v-rect :config="config.head.filter.items.rect"/>
                            <v-text :config="config.head.filter.items.text"/>
                        </v-group>
                    </v-group>
                    <!-- Prev -->
                    <v-group ref="prevSliderRef" :config="config.head.buttonPrev.group" @tap="prevSlider" @click="prevSlider">
                        <v-circle 
                             :config="config.head.buttonPrev.circle"
                        />
                        <v-path :config="config.head.buttonPrev.icon"/> 
                    </v-group>
                    <!-- Next -->
                    <v-group ref="nextSliderRef" :config="config.head.buttonNext.group" @tap="nextSlider" @click="nextSlider">
                        <v-circle 
                             :config="config.head.buttonNext.circle"
                        />
                        <v-path :config="config.head.buttonNext.icon"/> 
                    </v-group>
                </v-group>
<!-- slider -->
                <v-group ref="groupSlider" :config="config.slider.group">
                <!-- Shadow     -->
                    <!-- <v-rect :config="{x: 0, y: 0, width: 12 * cell, height: 4 * cell, fill: 'red'}"/> -->
                    <v-rect
                        :config="shadowRectConfig"
                        ref="shadowRect"
                    />
                    <v-group
                        v-for="(item, index) in initItems"
                        :config="item.groupConfig"
                        :key="index"
                        ref="groupItemsRef"
                        @dragstart="handleDragStart($event, index)"
                        @dragend="handleDragEnd($event, index)"
                        @dragmove="handleDragMove"
                    >
                        <v-rect :config="item.config"/>
                        <v-image :config="item.imageConfig" />
                        <v-text :config="{...config.item.text, text: item.text}"/>
                    </v-group>
                </v-group>
<!-- introduction -->
                <v-group :config="{x: 0, y: 8 * cell}">
                    <v-rect 
                        :config="{ x: 0, y: 0, width: cell * 4, height: cell, fill: '', }"
                    />
                </v-group>
                <v-group :config="{x: 0, y: 23 * cell}">
                    <v-rect 
                        :config="{ 
                            x: 0, y: 0, width: width, height: 2 * cell, fill: '#124057', }"
                    />
                    <v-group 
                        :config="{
                            x: cell / 2 + 20,
                            y: (2 * cell - 40) / 2 +  20,
                        }"
                    >
                        <v-circle :config="{
                            x: 0,
                            y: 0,
                            radius: 20,
                            stroke: 'white',
                            strokeWidth: 2
                        }"/>
                        <v-path :config="{
                            x: -6,
                            y: -6,
                            data: 'M7.78788 13H5.21212V7.78788H0V5.21212H5.21212V0H7.78788V5.21212H13V7.78788H7.78788V13Z',
                            fill: 'white',
                            stroke: 'white',
                        }"/>
                        <v-text :config="{
                            x: 30,
                            y: -6,
                            text: 'ดูรูปแบบที่นั่งทั้ง 13 แบบเพิ่มเติม',
                            fill: 'white',
                            fontSize: 16,
                        }"/>
                    </v-group>
                    <v-group :config="{
                            x: 9.5 * cell,
                            y: 21
                        }"
                        @tap="resetKonva"
                    >
                        <v-path :config="{
                            data: 'M22 14.2556C22 20.0546 17.299 24.7556 11.5 24.7556C5.70101 24.7556 1 20.0546 1 14.2556C1 8.45663 5.70101 3.75562 11.5 3.75562C14.2424 3.75562 16.7393 4.80697 18.6095 6.52862 M17.5 1.24438L19.1471 7.3915L13 9.03861',
                            fill: 'transparent',
                            stroke: 'white',
                            scaleX: 1,
                            scaleY: 1,
                        }"/>
                        <v-text :config="{
                            x: 35,
                            y: 7,
                            text: 'รีเซ็ต',
                            fill: 'white',
                            fontSize: 16,
                        }"/>
                    </v-group>
                </v-group>
            </v-layer>
            <v-layer>
                <v-path />
                <!-- <v-line
                    v-for="line in gridLines"
                    :key="line.id"
                    :config="line"
                /> -->
            </v-layer>
        </v-stage>
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    import configLayout1 from '../config/layout1'
    
    const config = ref(configLayout1)
    const stageRef = ref();
    const mainLayer = ref();
    const container = ref()
    const shadowRect = ref();
    const groupSlider = ref();
    const prevSliderRef = ref();
    const nextSliderRef = ref();
    const groupItemsRef = ref();
    const dropZonesRef = ref()
    const groupCarRef = ref()
    const carRef = ref()
    const volangRef = ref()
    const blockSize = config.value.blockSize;
    const baseWidth = config.value.baseWidth
    const baseHeight = config.value.baseHeight
    const padding = config.value.padding;
    const shadowRectConfig = ref(config.value.item.shadow);
    const stageConfig = {width: baseWidth, height: baseHeight};
    let width =  ref(baseWidth);
    let height = ref(baseHeight)
    let cell = ref(blockSize);
    let initItems = ref(config.value.items)
    let car = ref(config.value.car.body)
    let volang = ref(config.value.car.volang)
    let seat1 = ref(config.value.car.seat1)
    let seat2 = ref(config.value.car.seat2)
    let seat3 = ref(config.value.car.seat3)
    let seat4 = ref(config.value.car.seat4)
    let dropZones = ref(config.value.dropZones)
    let gridLines = ref(config.value.grid())
    let getItemOverlap = () => groupItemsRef.value.filter(item => item.getNode().find('Rect')[0].fill() == 'red')
    let getDropZoneActive = () => dropZonesRef.value.filter(item => item.getNode().fill() == 'green')
    let overlapItem = () => getItemOverlap().length > 0
    let inDropZone = () => getDropZoneActive().length == 1
    let sliderPerMove = ref(config.value.slider.perMove)
    let moveCount = ref(0)

    function prevSlider() {
        if(moveCount.value == 0) return;
        const slider = groupSlider.value.getNode()
        moveCount.value++
        slider.to({
            x: slider.x() + sliderPerMove.value,
            y: slider.y(),
            duration: 0.3,
        })
        handleButtonSlider()
        console.log(moveCount.value)
    }
  
    function nextSlider() {
        if(moveCount.value == -1) return;
        const slider = groupSlider.value.getNode()
        moveCount.value--
        slider.to({
          x: slider.x() - sliderPerMove.value,
          y: slider.y(),
          duration: 0.3,
        })
        handleButtonSlider()
        console.log(moveCount.value)
    }

    function handleButtonSlider() {
        const prev = prevSliderRef.value.getNode()
        const circlePrev = prev.find('Circle')[0]
        const next = nextSliderRef.value.getNode()
        const circleNext = next.find('Circle')[0]
        if(moveCount.value == 0) {
            circleNext.fill('#B0D0E0')
            circlePrev.fill('#e2e2e2')
        } else {
            circleNext.fill('#e2e2e2')
            circlePrev.fill('#B0D0E0')
        }
    }

    const handleDragStart = async (e, index) => {
        const group = e.target
        const shape = e.target.find('Rect')[0]
        const text = e.target.find('Text')[0]
        const image = e.target.find('Image')[0]
        const itemOriginal = initItems.value[index]
        group.attrs.index = index
        group.attrs.drop = false
        shape.width(itemOriginal.size[0] * cell.value - padding * 2)
        shape.height(itemOriginal.size[1] * cell.value - padding * 2)
        shape.fill('transparent')
        shape.stroke('transparent')
        image.to({
            x: itemOriginal.afterImageConfig.x,
            y: itemOriginal.afterImageConfig.y,
            width: itemOriginal.afterImageConfig.with,
            height: itemOriginal.afterImageConfig.height,
        })
        text.visible(false);
        loadDrapImage(index, 'imgAfter')
        group.moveToTop()
        shadowRectConfig.value.visible = true
    }
    
    const handleDragEnd = (e, index) => {
        const group = e.target
        const shape = group.find('Rect')[0]
        const image = group.find('Image')[0]
        const text = group.find('Text')[0]
        // console.log(group)
        if(!overlapItem() && inDropZone()) {
            group.moveTo(groupCarRef.value.getNode())
            group.position({
                x: Math.round((group.x() + (sliderPerMove.value * moveCount.value)) / cell.value) * cell.value,
                y: Math.round(group.y() / cell.value) * cell.value 
            })
            group.attrs.drop = true
            volangRef.value.getNode().moveToTop()
        } else {
            const itemOriginal = initItems.value[index]
            group.moveTo(groupSlider.value.getNode())
            group.to({
                x: itemOriginal.groupConfig.x,
                y: itemOriginal.groupConfig.y,
                duration: 0.3,
            })
            shape.to({
                width: 2 * cell.value - padding * 2,
                height: 2 * cell.value - padding * 2,
                fill: itemOriginal.config.fill,
                stroke: itemOriginal.config.stroke,
                duration: 0.3
            })
            shape.fill(itemOriginal.config.fill)
            shape.stroke(itemOriginal.config.stroke)
            image.to({
                x: itemOriginal.imageConfig.x,
                y: itemOriginal.imageConfig.y,
                width: itemOriginal.imageConfig.with,
                height: itemOriginal.imageConfig.height,
            })
            text.visible(true)
            loadDrapImage(index, 'imgBefore')
        }
        getItemOverlap().forEach(el => el.getNode().find('Rect')[0].fill('transparent'))
        getDropZoneActive().forEach(el => el.getNode().fill('transparent'))
        shadowRectConfig.value.visible = false
    }
  
    const handleDragMove = (e) => {
        const group = e.target
        const shape = group.find("Rect")[0]
        const groupId = group.id()
        shadowRectConfig.value.width = shape.width()
        shadowRectConfig.value.height = shape.height()
        shadowRectConfig.value.x = Math.round(group.x() / cell.value ) * cell.value
        shadowRectConfig.value.y = Math.round(group.y() / cell.value) * cell.value
        groupItemsRef.value.forEach(el => {
            let item = el.getNode()
            if(item == group) return;
            if (checkOverlap(item.getClientRect(), shadowRect.value.getNode().getClientRect())) {
                item.find('Rect')[0].fill('red')
            } else {
                if(item.find('Rect')[0].fill() == 'red')
                    item.find('Rect')[0].fill('transparent')
            }
        });
        dropZonesRef.value.forEach(el => {
            let dropZone = el.getNode()
            let dropZoneId = dropZone.id();
            if(dropZone == group) return;
            if (
                checkDropZone( shadowRect.value.getNode().getClientRect(), dropZone.getClientRect(),) && 
                groupId.includes(dropZoneId)
            ) {
                dropZone.fill('green')
            } else {
                dropZone.fill('transparent')
            }
        });
        if(!overlapItem() && inDropZone()) {
            shadowRectConfig.value.fill = '#28fa2878'
            shadowRectConfig.value.stroke = '#28fa2878'
        } else {
            shadowRectConfig.value.fill = '#ff56566e'
            shadowRectConfig.value.stroke = '#ff56566e'
        }
    }

    function checkDropZone(itemBox, targetBox) {
        return (
            itemBox.x - 4 < targetBox.x - itemBox.width + targetBox.width &&
            itemBox.x - itemBox.width + itemBox.width > targetBox.x - 4 &&
            itemBox.y - 4 < targetBox.y - itemBox.height + targetBox.height &&
            itemBox.y - itemBox.height + itemBox.height > targetBox.y - 4
        );
    }
  
    function checkOverlap(r1, r2) {
        return !(
            r2.x + 4 > r1.x + r1.width ||
            r2.x - 4 + r2.width - 4 < r1.x  ||
            r2.y + 4 > r1.y + r1.height ||
            r2.y - 4 + r2.height - 4 < r1.y
        );
    }


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
        initItems.value.forEach(function(el) {
            let path = new URL(`../assets/images/${el.imgBefore}`, import.meta.url).href ;
            let img = new Image()
            img.onload = function() {
                el.imageConfig.image = img
            }
            img.src = path
        })
    }

    function loadDrapImage(index, type) {
        let item = initItems.value[index]
        let path = new URL(`../assets/images/${item[type]}`, import.meta.url).href ;
        let img = new Image()
        img.onload = function() {
            item.imageConfig.image = img
        }
        img.src = path
    }

    function loadCar() {
        loadImage(car.value, 'car.png')
        loadImage(volang.value, 'volang.png')
        loadImage(seat1.value, 'seat-left.png')
        loadImage(seat2.value, 'seat-right.png')
        loadImage(seat3.value, 'seat-left.png')
        loadImage(seat4.value, 'seat-right.png')
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

    const resetKonva = () => {
        window.location.href = '.'
    };

  
    onMounted(async () => {
        fitStageIntoParentContainer()
        loadCar()
        imageInit()
        window.addEventListener('resize', fitStageIntoParentContainer)
    })
</script>
  
<style scoped>
</style>