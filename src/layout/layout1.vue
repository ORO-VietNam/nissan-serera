<template>
    <div ref="container" class="relative stage-container">
        <LayoutBackground />
        <v-stage
            ref="stageRef"
            :config="stageConfig"
        >
            <v-layer ref="mainLayer">
                <v-group :config="config.group">
    <!-- Car -->    
                    <v-rect :config="config.background" :listening="false"/>
                    <v-group 
                        ref="groupCarRef" 
                        :config="config.car.group"
                    >
                        <v-rect :config="config.car.background" :listening="false"/>
                        <v-rect :config="config.car.shadow" :listening="false"/>
                        <v-group :config="config.car.groupItem" >
                            <v-image ref="carRef" :config="car" :listening="false"/>
                            <v-group
                                v-for="(seat, index) in config.car.seats"
                                :config="seat.group"
                            >
                                <v-image ref="seatsRef" :config="seat.image" :listening="false"/>
                                <v-rect ref="dropZonesRef" :config="seat.rect" :listening="false"/>
                            </v-group>
                        </v-group>
                        <v-image ref="volangRef" :config="volang" :listening="false"/>
                    </v-group>
                    <v-rect
                        v-for="rect in dropZones"
                        ref="dropZonesRef"
                        :key="rect.id"
                        :config="rect"
                        :listening="false"
                    />
                    <v-rect
                        :config="shadowRectConfig"
                        ref="shadowRect"
                    />
    <!-- controll  -->
                    <v-group>
                        <v-rect :config="config.head.background"/>
                        <v-group :config="config.head.filter.group">
                            <v-rect :config="config.head.filter.background"/>
                            <v-rect ref="filterBackground" :config="config.head.filter.activeBackground"/>
                            <v-group 
                                :config="config.head.filter.all.group"
                                @tap="filterSlider($event, '')"
                                @click="filterSlider($event, '')"
                            >
                                <v-rect :config="config.head.filter.all.rect"/>
                                <v-text :listening="false" :config="config.head.filter.all.text"/>
                            </v-group>
                            <v-group 
                                :config="config.head.filter.people.group"
                                @tap="filterSlider($event, 'people')"
                                @click="filterSlider($event, 'people')"
                                >
                                <v-rect :config="config.head.filter.people.rect"/>
                                <v-path :listening="false" :config="config.head.filter.people.path"/>
                                <v-text :listening="false" :config="config.head.filter.people.text"/>
                            </v-group>
                            <v-group 
                                :config="config.head.filter.items.group"
                                @tap="filterSlider($event, 'item')"
                                @click="filterSlider($event, 'item')"
                            >
                                <v-rect :config="config.head.filter.items.rect"/>
                                <v-path :listening="false" :config="config.head.filter.items.path"/>
                                <v-text :listening="false" :config="config.head.filter.items.text"/>
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
                    <v-group ref="" :config="config.slider.group">
                        <v-group ref="groupSlider" >
                        <!-- Shadow     -->
                            <!-- <v-rect :config="{x: 0, y: 0, width: 12 * cell, height: 4 * cell, fill: 'red'}"/> -->
                            
                            <v-group
                                v-for="(item, index) in initItems"
                                :config="item.groupConfig"
                                :key="index"
                                ref="groupItemsRef"
                                @dragstart="handleDragStart($event, index)"
                                @dragend="handleDragEnd($event, index)"
                                @dragmove="handleDragMove"
                            >
                                <v-rect :config="{...item.rect, fill: '', opacity: .1}"/>
                                <v-image :config="item.image" />
                                <!-- <v-text :config="{...config.item.text, text: item.text}"/> -->
                            </v-group>
                        </v-group>
                    </v-group>
    <!-- introduction -->
                    <v-group :config="config.intro.group">
                        <v-group 
                            v-for="(item, index) in itemsIntro"
                            :config="item.group"
                            :listening="false"
                        >
                            <v-image ref="introImageRef" :config="item.image"/>
                        </v-group>
                    </v-group>
    <!-- Footer -->
                    <v-group :config="config.footer.group">
                        <v-rect 
                            :config="config.footer.background"
                        />
                        <v-group 
                            :config="config.footer.selectLayout.group"
                        >
                            <v-circle :config="config.footer.selectLayout.circle"/>
                            <v-path :config="config.footer.selectLayout.path"/>
                            <v-text :config="config.footer.selectLayout.text"/>
                        </v-group>
                        <v-group :config="config.footer.resetLayout.group"
                            @tap="resetKonva"
                        >
                            <v-path :config="config.footer.resetLayout.path"/>
                            <v-text :config="config.footer.resetLayout.text"/>
                        </v-group>
                    </v-group>
                </v-group>
            </v-layer>
            <v-layer>
                <v-line
                    :listening="false"
                    v-for="line in gridLines"
                    :key="line.id"
                    :config="{...line, visible: showGridLine}"
                />
            </v-layer>
        </v-stage>
        <div class="absolute -bottom-20 left-5">
            <div class="flex items-center">
                <input id="grid" type="checkbox" v-model="showGridLine" />
                <label for="grid" class="pl-2">show grid line</label>
            </div>
            <p>*i will delete after review complete</p>
        </div>
    </div>
</template>
    
<script setup>
    import { ref, onMounted, computed } from 'vue'
    import '../components/array'
    import LayoutBackground from './layout-bg.vue'
    import configSP from '../config/config-sp'
    import configTB from '../config/config-tb'
    import configPC from '../config/config-pc'
    import items from '../config/item-layout-1'
    
    const windowWidth = window.innerWidth
    let config = ref()
    if(windowWidth < 768) {
        config.value = {...configSP, ...items}
    } else if(windowWidth >= 768 && windowWidth < 1024) {
        config.value = {...configTB, ...items}
    } else {
        config.value = {...configPC, ...items}
    }
    const stageRef = ref();
    const mainLayer = ref();
    const container = ref()
    const shadowRect = ref();
    const filterBackground = ref()
    const groupSlider = ref();
    const prevSliderRef = ref();
    const nextSliderRef = ref();
    const groupItemsRef = ref();
    const dropZonesRef = ref()
    const groupCarRef = ref()
    const carRef = ref()
    const volangRef = ref()
    const seatsRef = ref()
    const introImageRef = ref()
    const baseWidth = config.value.baseWidth
    const baseHeight = config.value.baseHeight
    const padding = config.value.padding;
    const shadowRectConfig = ref(config.value.item.shadow);
    const stageConfig = {width: baseWidth, height: baseHeight};
    const sliderConfig = config.value.slider;
    let cell = ref(config.value.cell);
    let car = ref(config.value.car.body)
    let volang = ref(config.value.car.volang)
    let dropZones = ref(config.value.dropZones)
    let itemsIntro = ref(config.value.intro.items)
    let gridLines = ref(config.value.grid())
    let showGridLine = ref(false)
    let getItemOverlap = () => groupItemsRef.value.filter(item => item.getNode().find('Rect')[0].fill() == 'red')
    let getDropZoneActive = () => dropZonesRef.value.filter(item => item.getNode().fill() == 'green')
    let overlapItem = () => getItemOverlap().length > 0
    let inDropZone = () => getDropZoneActive().length > 0 
    let sliderPerMove = ref(config.value.slider.perMove)
    let moveCount = ref(0)
    let filterType = ""
    let itemsDropped = [];

    const initSlider = () => {
        let list = []
        let size = sliderConfig.itemSize
        let breakLine = 0
        let count = 0
        config.value.items.forEach(function(item, index) {
            let id = item.groupConfig.id
            if(id == "item|longbox|9") {
                breakLine = 1
                count = 0
            }
            item.groupConfig = {
                ...item.groupConfig,
                x: count * size,
                y: breakLine * size 
            }
            item.rect = {
                x: 0,
                y: 0,
                width: size,
                height: size,
            }
            count++
            list.push(item)
        })
        return list;
    }

    const initItems = ref(initSlider())

    function filterSlider(e, type) {
        let size = sliderConfig.itemSize
        let slideCount = sliderConfig.count
        let count = 0
        let breakLine = 0
        let listGroupVisible = []
        filterType = type;
        activeFilterBackground(e, type)
        groupSlider.value.getNode().find('Group').forEach(function(el, index) {
            const groupRef = el
            const groupId = el.id()
            if(!groupId.includes(type)) {
                groupRef.visible(false)
            } else {
                groupRef.visible(true)
                listGroupVisible.push(groupRef)
            }
        })
       
        listGroupVisible.forEach(function(group, index) {
            if(((type != '' && count == slideCount) || (type == '' && group.id().includes('item'))) && breakLine == 0) {
                breakLine++
                count = 0
            }
            group.to({
                x: count * size,
                y: breakLine * size 
            })
            count++
        })
    }

    function activeFilterBackground(e, type) {
        let texts = e.target.parent.parent.find("Text")
        let paths = e.target.parent.parent.find("Path")
        let text = e.target.parent.find('Text')[0]
        let path = e.target.parent.find('Path')[0]
        const background = filterBackground.value.getNode()
        let x = 0
        switch (type) {
            case '':
                x = 0
                break;
            case 'people':
                x = cell.value * 6;
                break;
            case 'item':
                x = cell.value * 12;
                break;
            default:
                break;
        }
        handleButtonSlider()
        texts.forEach(el => el.fill('black'))
        paths.forEach(el => el.fill('#15668E'))
        text.fill('white')
        if(type != '') {
            path.fill('white')
            prevSlider()
        }
        background.to({
            x: x + 2
        })
    }

    function prevSlider() {
        if(moveCount.value == 0) return;
        const slider = groupSlider.value.getNode()
        moveCount.value--
        slider.to({
            x: slider.x() + sliderPerMove.value,
            y: slider.y(),
            duration: 0.3,
        })
        handleButtonSlider()
    }
  
    function nextSlider() {
        if(moveCount.value == 2 || filterType != '') return;
        const slider = groupSlider.value.getNode()
        moveCount.value++
        slider.to({
          x: slider.x() - sliderPerMove.value,
          y: slider.y(),
          duration: 0.3,
        })
        handleButtonSlider()
    }

    function handleButtonSlider() {
        const prev = prevSliderRef.value.getNode()
        const circlePrev = prev.find('Circle')[0]
        const next = nextSliderRef.value.getNode()
        const circleNext = next.find('Circle')[0]
        if(moveCount.value == 0) {
            circleNext.fill('#B0D0E0')
            circlePrev.fill('#e2e2e2')
            if(filterType != '') {
                circleNext.fill('#e2e2e2')
            }
        } else {
            circleNext.fill('#e2e2e2')
            circlePrev.fill('#B0D0E0')
        }
        // console.log(moveCount.value)
    }

    const handleDragStart = async (e, index) => {
        const group = e.target
        const shape = e.target.find('Rect')[0]
        const image = e.target.find('Image')[0]
        const itemOriginal = initItems.value[index]
        group.moveTo(groupCarRef.value.getNode())
        shape.width(itemOriginal.size[0] * cell.value - padding * 2)
        shape.height(itemOriginal.size[1] * cell.value - padding * 2)
        
        image.to({
            x: itemOriginal.imageDrag.x,
            y: itemOriginal.imageDrag.y,
            width: itemOriginal.imageDrag.width,
            height: itemOriginal.imageDrag.height,
        })
        loadImageRef(image, index, 'imageDragName')
        group.moveToTop()
        shadowRectConfig.value.visible = true
    }
    
    const handleDragEnd = (e, index) => {
        const group = e.target
        const shape = group.find('Rect')[0]
        const image = group.find('Image')[0]
        const text = group.find('Text')[0]
        if(!overlapItem() && inDropZone()) {
            group.moveTo(groupCarRef.value.getNode())
            group.position({
                x: Math.round(group.x() / cell.value) * cell.value,
                y: Math.round(group.y() / cell.value) * cell.value
            })
            // group.attrs.drop = true
            volangRef.value.getNode().moveToTop()
            if(!itemsDropped.includes(group))
                itemsDropped.push(group)
            console.log(itemsDropped)
        } else {
            const itemOriginal = initItems.value[index]
            group.moveTo(groupSlider.value.getNode())
            group.to({
                x: itemOriginal.groupConfig.x,
                y: itemOriginal.groupConfig.y,
                duration: 0.3,
            })
            shape.to({
                width: 4 * cell.value - padding * 2,
                height: 4 * cell.value - padding * 2,
                duration: 0.3
            })
            image.to({
                x: itemOriginal.image.x,
                y: itemOriginal.image.y,
                width: itemOriginal.image.width,
                height: itemOriginal.image.height,
            })
            loadImageRef(image, index, 'imageName')
            if(itemsDropped.includes(group)) {
                itemsDropped.removeItem(group)
            }
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
        shadowRectConfig.value.x = Math.round(group.x() / cell.value ) * cell.value + padding 
        shadowRectConfig.value.y = Math.round(group.y() / cell.value) * cell.value + padding 
        itemsDropped.forEach(item => {
            // let item = el.getNode()
            let shape = item.find('Rect')[0]
            if(item == group) return;

            if (checkOverlap(shape.getClientRect(), shadowRect.value.getNode().getClientRect())) {
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
        groupItemsRef.value.forEach(function(el, index) {
            let imageRef = el.getNode().find('Image')[0]
            loadImageRef(imageRef, index, 'imageName')
        })
        itemsIntro.value.forEach(function(el, index) {
            loadImage(el.image, el.imageName)
        })
        config.value.car.seats.forEach(function(el, index) {
            loadImage(el.image, el.imageName)
        })
    }

    function loadImageRef(imageRef, index, type) {
        let item = initItems.value[index]
        let size = item.image
        if(type == 'imageDragName') size = item.imageDrag
        let path = new URL(`../assets/images/${item[type]}`, import.meta.url).href;
        let img = new Image()
        img.onload = function() {
            imageRef.image(img)
            imageRef.width(size.width)
            imageRef.height(size.height)
        }
        img.src = path
    }

    function loadCar() {
        loadImage(car.value, 'car.png')
        loadImage(volang.value, 'volang.png')
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
        let data = stageRef.value.getNode().toJSON()
        console.log(data)
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