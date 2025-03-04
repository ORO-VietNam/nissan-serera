<template>
    <div ref="container" class="relative w stage-container">
        <div 
            class="absolute left-0 bottom-0 w-full footer-backgroud" 
            :style="{
                height: outputCell * (screenWidth >= 1024 ? 6 : 4) + 'px'
            }">
            
        </div>
        <v-stage
            ref="stageRef"
            :config="stageConfig"
        >
            <v-layer ref="mainLayer">
                <v-group :config="config.group">
                    <v-group :config="config.intro.group">
                        <!-- <v-rect :config="{x: 0, y: 0, width: 200, height: 200, fill: 'red' }"/> -->
                        <v-text :config="config.intro.h1"/>
                        <v-text :config="config.intro.h2"/>
                        <v-image :config="config.intro.image"/>
                        <v-group 
                            v-for="(item, index) in config.intro.items"
                            :config="item.group"
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
                            <v-rect 
                                :config="{
                                    x: 0,
                                    y: 0,
                                    height: 2 * cell,
                                    width: 13 * cell,
                                }"
                                @tap="showSelectLayout"
                                @click="showSelectLayout"
                            />
                            <v-circle :config="config.footer.selectLayout.circle" :listening="false"/>
                            <v-path :config="config.footer.selectLayout.path" :listening="false"/>
                            <v-text :config="config.footer.selectLayout.text" :listening="false"/>
                        </v-group>
                        <v-group :config="config.footer.resetLayout.group"
                            @tap="resetKonva"
                            @click="resetKonva"
                        >
                            <v-path :config="config.footer.resetLayout.path"/>
                            <v-text :config="config.footer.resetLayout.text"/>
                        </v-group>
                    </v-group>
    <!-- Car -->    
                    <v-rect :config="config.background" :listening="false"/>
                    <v-group 
                        ref="groupCarImageRef" 
                        :config="config.car.group"
                    >
                        <v-rect :config="config.car.background" :listening="false"/>
                        <!-- <v-filter :config="{ type: 'Blur', blurRadius: 20 }">
                        </v-filter> -->
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
                    
    <!-- controll  -->
                    <v-group :config="config.head.group">
                        <v-rect :config="config.head.background"/>
                        <v-group :config="config.head.filter.group">
                            <v-rect :config="config.head.filter.background"/>
                            <v-rect ref="filterBackground" :config="config.head.filter.activeBackground"/>
                            <!-- <v-filter :config="{ type: 'Blur', blurRadius: 20 }">
                            </v-filter> -->
                            <v-group
                                ref="filterAllButtonRef" 
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
                    <v-group 
                        ref="" 
                        :config="config.slider.group"
                    >
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
                                <v-rect 
                                    :config="{ fill: '', opacity: .1}" 
                                />
                                <v-image 
                                    :config="item.image" 
                                />
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
    
    <!-- Select layer -->
                    <v-group 
                        ref="seclectLayoutRef"
                        :config="{
                            ...config.footer.selectLayout.nav.group,
                            
                        }"
                    >
                        <v-rect :config="{
                            ...config.footer.selectLayout.nav.background, 
                            dragBoundFunc: function (pos) {
                                let y = pos.y
                                let max = baseHeight - 43 * cell
                                if(y > 0) y = 0
                                else if(y < max) y = max
                                scrollSelectLayout(y)
                                return {
                                    x: this.absolutePosition().x,
                                    y: windowWidth >= 1024 ? y : this.absolutePosition().y 
                                }
                            },
                        }"/>
                        <v-group 
                            :config="{
                                ...config.footer.selectLayout.nav.groupItem, 
                                y: windowWidth >= 1024 ? navY : navConfig.y
                            }"
                        >
                            <v-group 
                                v-for="(layout, index) in layouts"
                                :config="{
                                    x: 0,
                                    y: index * 3 * cell
                                }"
                            >
                                <v-text 
                                    :config="{
                                        ...config.footer.selectLayout.nav.text,
                                        text: `Layout ${index}` 
                                    }"
                                />
                            </v-group>
                        </v-group>
                    </v-group>
                    <v-group 
                        ref="groupCarRef" 
                        :config="config.car.group"
                    >
                        <v-image ref="volangRef" :config="volang" :listening="false"/>
                    </v-group>
                    <v-rect
                        :config="shadowRectConfig"
                        ref="shadowRect"
                    />
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
        <!-- <div class="absolute top-4 left-4">
            <div class="flex items-center">
                <input id="grid" type="checkbox" v-model="showGridLine" />
                <label for="grid" class="pl-2">show grid line</label>
            </div>
            <p>*i will delete after review complete</p>
        </div> -->
    </div>
</template>
    
<script setup>
    import { ref, onMounted } from 'vue'
    import '../components/array'
    import LayoutBackground from './layout-bg.vue'
    import configSP from '../config/config-sp'
    import configTB from '../config/config-tb'
    import configPC from '../config/config-pc'
    import items from '../config/item-layout-1'
    
    const windowWidth = window.innerWidth
    let holdTimeout = null;
    let holdDuration = 0;
    let config = ref()
    if(windowWidth < 768) {
        config.value = {...configSP, ...items}
    } else if(windowWidth >= 768 && windowWidth < 1024) {
        config.value = {...configTB, ...items}
    } else {
        config.value = {...configPC, ...items}
        holdDuration = 0;
    }
    const stageRef = ref();
    const mainLayer = ref();
    const container = ref()
    const shadowRect = ref();
    const filterBackground = ref()
    const filterAllButtonRef = ref()
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
    const seclectLayoutRef = ref()
    const baseWidth = config.value.baseWidth
    const baseHeight = config.value.baseHeight
    const padding = config.value.padding;
    const shadowRectConfig = ref(config.value.item.shadow);
    const stageConfig = {width: baseWidth, height: baseHeight};
    const sliderConfig = config.value.slider;
    const navConfig = config.value.footer.selectLayout.nav;
    let screenWidth = ref(window.innerWidth)
    let screenHeight = ref(window.innerHeight)
    let cell = ref(config.value.cell);
    let car = ref(config.value.car.body)
    let volang = ref(config.value.car.volang)
    let dropZones = ref(config.value.dropZones)
    let itemsIntro = ref(config.value.intro.items)
    let gridLines = ref(config.value.grid())
    let showGridLine = ref(false)
    let getItemOverlap = () => itemsDropped.filter(item => item.find('Rect')[0].fill() == 'red')
    let getDropZoneActive = () => dropZonesRef.value.filter(item => item.getNode().fill() == 'green')
    let overlapItem = () => getItemOverlap().length > 0
    let inDropZone = () => getDropZoneActive().length > 0 
    let sliderPerMove = ref(config.value.slider.perMove)
    let itemPerPage = sliderConfig.count
    let sliderPage= baseWidth < 768 ? 3 : 2
    let moveCount = ref(0)
    let filterType = "";
    let itemsDropped = [];
    const layouts = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    const navY = ref(navConfig.y)
    let outputCell = ref(15)

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
                y: breakLine * size,
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
    
    function scrollSelectLayout(posY) {
        navY.value = posY
    }

    function showSelectLayout() {
        // let layout = seclectLayoutRef.value.getNode()
        // showLayout = !showLayout
        // layout.to({
        //     x: showLayout ? 0 : (-10 * cell.value),
        //     y: navConfig.y
        // })
        window.open("https://th-th.dark.prod.heliosnissan.net/vehicles/new-vehicles/serena-epower/seat-arrangement.html", "_blank");
    }

    let initItems = ref(initSlider())

    function filterSlider(e, type) {
        let listGroupVisible = []
        filterType = type;
       
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
        reOrderSlider()
        activeFilterBackground(e, type)
    }

    function reOrderSlider() {
        let breakLine = 0
        let size = sliderConfig.itemSize
        let slideCount = sliderConfig.count
        let count = -1
        let peopleCount = -1
        let itemCount = -1
        groupSlider.value.getNode().find('Group').forEach(function(group, index) {
            const groupId = group.id()
           
            if(group.visible()) {
                if(filterType == '') {
                    if(groupId.includes('people')) {
                        breakLine = 0
                        peopleCount++
                        count = peopleCount
                    } else {
                        breakLine = 1
                        itemCount++
                        count = itemCount
                    }
                }
                else {
                    count++
                    if(slideCount == count && breakLine == 0) {
                        breakLine++
                        count = 0
                    }
                }
                group.to({
                    x: count * size,
                    y: breakLine * size,
                    duration: 0 
                })
            }
        })
        handleButtonSlider()
    }

    function activeFilterBackground(e, type) {
        let texts = e.target.parent.parent.find("Text")
        let paths = e.target.parent.parent.find("Path")
        let text = e.target.parent.find('Text')[0]
        let path = e.target.parent.find('Path')[0]
        const background = filterBackground.value.getNode()
        // let x = 0
        // switch (type) {
        //     case '':
        //         x = 0
        //         break;
        //     case 'people':
        //         x = cell.value * 6;
        //         break;
        //     case 'item':
        //         x = cell.value * 12;
        //         break;
        //     default:
        //         break;
        // }
        texts.forEach(el => el.fill('black'))
        paths.forEach(el => el.fill('#15668E'))
        text.fill('white')
        if(type != '') {
            path.fill('white')
            moveCount.value = 0
            sliderTo(0)
        }
        let x = config.value.head.filter.position[type]
        background.to({
            x: x + 2
        })
    }

    function handleButtonSlider() {
        const prev = prevSliderRef.value.getNode()
        const next = nextSliderRef.value.getNode()
        let slideCount = sliderConfig.count
        let peopleCount = groupSlider.value.getNode().find(group => group.id().includes('people') && group.visible()).length
        let itemCount = groupSlider.value.getNode().find(group => group.id().includes('item') && group.visible()).length
        if((peopleCount > slideCount || itemCount > slideCount) && peopleCount + itemCount > itemPerPage * 2 ) {
            prev.visible(true)
            next.visible(true)
        } else {
            prev.visible(false)
            next.visible(false)
        }
        let a = 1
        if(filterType != '') a = 2
        sliderPage = Math.ceil(Math.max(peopleCount, itemCount) / (itemPerPage * a))
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
        checkButtonSlider()
    }

    function sliderTo(to) {
        const slider = groupSlider.value.getNode()
        slider.to({
            x: sliderPerMove.value * to,
            y: 0,
            duration: 0.3,
        })
    }
  
    function nextSlider() {
        if(moveCount.value == sliderPage - 1) return;
        const slider = groupSlider.value.getNode()
        moveCount.value++
        slider.to({
            x: slider.x() - sliderPerMove.value,
            y: slider.y(),
            duration: 0.3,
        })
        checkButtonSlider()
    }

    function checkButtonSlider() {
        const prev = prevSliderRef.value.getNode()
        const next = nextSliderRef.value.getNode()
        const circlePrev = prev.find('Circle')[0]
        const circleNext = next.find('Circle')[0]
        if(moveCount.value == 0) {
            circlePrev.fill('#e2e2e2')
            circleNext.fill('#B0D0E0')
        } else {
            circlePrev.fill('#B0D0E0')
        }
        if(moveCount.value == sliderPage - 1) {
            circleNext.fill('#e2e2e2')
        }
    }

    let dragClone = undefined;

    const handleDragStart = async (e, index) => {
        const group = e.target
        const shape = e.target.find('Rect')[0]
        const image = e.target.find('Image')[0]
        const itemOriginal = initItems.value[index]
        if(group.id().includes('clone')) {
            itemsDropped.removeItem(group)
        } else {
            dragClone = group.clone()
            groupSlider.value.getNode().add(dragClone)
            group.to({
                x: dragClone.x(),
                y: dragClone.y(),
                duration: 0,
            })

            group.attrs.originalX = dragClone.x()
            group.attrs.originalY = dragClone.y()
        }
        console.log('drag start')
        group.moveTo(groupCarRef.value.getNode())
        group.moveToTop()
        shape.width(itemOriginal.size[0] * cell.value - padding * 2)
        shape.height(itemOriginal.size[1] * cell.value - padding * 2)
        image.visible(false)
        image.to({
            x: itemOriginal.imageDrag.x,
            y: itemOriginal.imageDrag.y,
            width: itemOriginal.imageDrag.width,
            height: itemOriginal.imageDrag.height,
            duration: 0
        })
        loadImageRef(image, index, 'imageDragName')
        shadowRectConfig.value.visible = true
    }

    const handleDragMove = (e) => {
        const group = e.target
        const shape = group.find("Rect")[0]
        const image = group.find('Image')[0]
        const groupId = group.id()
        image.visible(true)
        shadowRectConfig.value.width = shape.width()
        shadowRectConfig.value.height = shape.height()
        shadowRectConfig.value.x = Math.round(group.x() / cell.value ) * cell.value + padding 
        shadowRectConfig.value.y = Math.round(group.y() / cell.value) * cell.value + padding 
        itemsDropped.forEach(item => {
            let shapeDrop = item.find('Rect')[0]
            if(shapeDrop == undefined) return;
            if (checkOverlap(shapeDrop.getClientRect(), shadowRect.value.getNode().getClientRect())) {
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
    
    const handleDragEnd = (e, index) => {
        const group = e.target
        const shape = group.find('Rect')[0]
        const image = group.find('Image')[0]
        const groupId = group.id()
        const itemOriginal = initItems.value[index]
        if(!overlapItem() && inDropZone()) {
            // group.moveTo(groupCarRef.value.getNode())
            group.position({
                x: Math.round(group.x() / cell.value) * cell.value,
                y: Math.round(group.y() / cell.value) * cell.value
            })
            if(!groupId.includes('clone')) {
                const clone = group.clone()
                clone.id(group.id()+ '|clone')
                clone.on('dragstart',($event) => handleDragStart($event, index));
                clone.on('dragend',($event) =>  handleDragEnd($event, index));
                clone.on('dragmove', handleDragMove);
                groupCarRef.value.getNode().add(clone)
                itemsDropped.push(clone)
                grouBackSlider(group, shape, image, itemOriginal, index)
            }
            volangRef.value.getNode().moveToTop()    
        } else {
            grouBackSlider(group, shape, image, itemOriginal, index)
            if(groupId.includes('clone')) {
                group.destroy()
                itemsDropped.removeItem(group)
            }
        }
        getItemOverlap().forEach(el => el.find('Rect')[0].fill('transparent'))
        getDropZoneActive().forEach(el => el.getNode().fill('transparent'))
        shadowRectConfig.value.visible = false
        dragClone.destroy()
        // console.log(dragClone)
    }
  
    function grouBackSlider(group, shape, image, itemOriginal, index) {
        group.visible(false)
        group.moveTo(groupSlider.value.getNode())
        group.to({
            x: group.attrs.originalX,
            y: group.attrs.originalY,
            duration: 0,
        })
        shape.to({
            width: 4 * cell.value - padding * 2,
            height: 4 * cell.value - padding * 2,
            duration: 0
        })
        image.to({
            x: itemOriginal.image.x,
            y: itemOriginal.image.y,
            width: itemOriginal.image.width,
            height: itemOriginal.image.height,
            duration: 0
        })
        loadImageRef(image, index, 'imageName')
        group.zIndex(index)
        group.visible(true)
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

    function loadImage(config, name, setHeight = false) {
        let path = new URL(`../assets/images/${name}`, import.meta.url).href ;
        let img = new Image()
        img.onload = function() {
            config['image'] = img
            if(setHeight) {
                let ratio = img.width / img.height
                config['height'] = config.width / ratio
            }
        }
        img.src = path
    }

    function imageInit() {
        loadImage(car.value, 'car.png')
        loadImage(volang.value, 'volang.png')
        if(window.innerWidth >= 1024)
        loadImage(config.value.intro.image, 'img-head.png')
        groupItemsRef.value.forEach(function(el, index) {
            let group = el.getNode()
            group.attrs['originalX'] = group.x()
            group.attrs['originalY'] = group.y()
            group.attrs['index'] = index
            let imageRef = group.find('Image')[0]
            loadImageRef(imageRef, index, 'imageName')
        })
        itemsIntro.value.forEach(function(el, index) {
            loadImage(el.image, el.imageName, true)
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

    function stageDraw() {
        let _stage = stageRef.value.getNode();
        _stage.batchDraw();
    }

    const containStageIntoParentContainer = () => {
        screenWidth.value = window.innerWidth
        screenHeight.value = window.innerHeight
        const scaleX = window.innerWidth / baseWidth
        const scaleY = window.innerHeight / baseHeight
        const scale = Math.min(scaleX, scaleY)
        let _stage = stageRef.value.getNode();
        _stage.width(baseWidth * scale);
        _stage.height(baseHeight * scale );
        _stage.scale({ x: scale, y: scale });
        _stage.batchDraw();
        outputCell.value = cell.value * scale
        console.log(scale)
    }

    const fitStageIntoParentContainer = () => {
        if (!container.value || !stageRef.value) return
        const containerWidth = window.innerWidth
        const containerHeight =  window.innerHeight
        // Calculate scale
        const scaleX = containerWidth / baseWidth
        const scaleY = containerHeight / baseHeight
        let _stage = stageRef.value.getNode();
        console.log()
        _stage.width(baseWidth * scaleX);
        _stage.height(baseHeight * scaleX);
        _stage.scale({ x: scaleX, y: scaleX });
        outputCell.value = cell.value * scaleX
        _stage.batchDraw();
    }

    const resetKonva = () => {
        itemsDropped.forEach(el => el.destroy())
        itemsDropped = [];
    };

    onMounted(async () => {
        imageInit()
        if(screenWidth.value >= 768) {
            containStageIntoParentContainer()
            window.addEventListener('resize', containStageIntoParentContainer)
        } else {
            fitStageIntoParentContainer()
            window.addEventListener('resize', fitStageIntoParentContainer)
        }
    })
</script>
  
<style scoped>
    .footer-backgroud {
        background-image: linear-gradient(to bottom, #0C4B6A 0%, #15668E 100%);
    }
</style>