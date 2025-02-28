const windowWidth = window.innerWidth
let cell = 17;
let sliderItemSize = Math.round((windowWidth ) / 5);
let sliderSpacing = 4;
if(windowWidth >= 768 && windowWidth < 1024) {
    sliderSpacing = 8;
    cell = 20
    sliderItemSize = Math.round((windowWidth ) / 7);
} else if(windowWidth >= 1024) {
    cell = 20
    sliderItemSize = Math.round((36 * cell) / 7);
}

const imageConfig= {
    image: null,
    x: sliderSpacing ,
    y: sliderSpacing ,
    width: sliderItemSize - sliderSpacing * 2,
    height: sliderItemSize - sliderSpacing * 2
}

export default  {
    items: [
        {
            groupConfig: {
                id: 'people|dad|1,2,3,4',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0.5 * cell,
                y: -cell,
                width: cell * 5 * 0.64,
                height: cell * 5
            },
            imageName: "dad-group.png",
            imageDragName: "dad.png",
            type: "people",
            size: [4,4]
        },
        {
            groupConfig: {
                id: 'people|wife|1,2,3,4',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0.5 * cell,
                y: -cell,
                width: cell * 5 * 0.64,
                height: cell * 5
            },
            imageName: "wife-group.png",
            imageDragName: "wife.png",
            type: "people",
            size: [4,4]
        },
        {
            groupConfig: {
                id: 'people|kidboy|1,3,4',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: cell / 2,
                y: -cell,
                width: cell * 4.4 * 0.64,
                height: cell * 4.4
            },
            imageName: "kid-boy-group.png",
            imageDragName: "kid-boy.png",
            type: "people",
            size: [4,4]
        },
        {
            groupConfig: {
                id: 'people|kidgirl|1,3,4',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: cell / 2,
                y: -cell,
                width: cell * 4.4 * 0.64,
                height: cell * 4.4
            },
            imageName: "kid-girl-group.png",
            imageDragName: "kid-girl.png",
            type: "people",
            size: [4,4]
        },
        {
            groupConfig: {
                id: 'people|baby|3,4',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: cell / 2,
                y: 0,
                width: cell * 4.4 * 0.64,
                height: cell * 4.4
            },
            imageName: "baby-group.png",
            imageDragName: "baby.png",
            type: "people",
            size: [4,4]
        },
        {
            groupConfig: {
                id: 'people|grandfather|1,2,3,4',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0.5 * cell,
                y: -cell,
                width: cell * 5 * 0.64,
                height: cell * 5
            },
            imageName: "grand-father-group.png",
            imageDragName: "grand-father.png",
            type: "people",
            size: [4,4]
        },
        {
            groupConfig: {
                id: 'people|grandfather|1,2,3,4',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0.5 * cell,
                y: -cell,
                width: cell * 5 * 0.64,
                height: cell * 5
            },
            imageName: "grand-mother-group.png",
            imageDragName: "grand-mother.png",
            type: "people",
            size: [4,4]
        },
        {
            groupConfig: {
                id: 'people|lieboy|_',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: cell,
                y: 0,
                width: cell * 6 * 0.35,
                height: cell * 6
            },
            imageName: "sleep-boy-group.png",
            imageDragName: "sleep-boy.png",
            type: "people",
            size: [4,6]
        },
// items
        {
            groupConfig: {
                id: 'item|longbox|9',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0.2 * cell,
                y: 0.2 * cell,
                width: 3.6 * cell,
                height: 16.6 * cell
            },
            imageName: "long-box-group.png",
            imageDragName: "long-box.png",
            type: "item",
            size: [4,17]
        },
        {
            groupConfig: {
                id: 'item|bigbag|5',
                draggable: false,
            }, 
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: cell * 0.2,
                y: cell * 0.2,
                width: cell * 3.6,
                height: cell * 5.6
            },
            imageName: "big-bag-group.png",
            imageDragName: "big-bag.png",
            type: "item",
            size: [4,6] 
        },
        {
            groupConfig: {
                id: 'item|surfboard|8',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: cell / 2,
                width: cell ,
                height: 16 * cell,
            },
            imageName: "surf-group.png",
            imageDragName: "surf.png",
            type: "item",
            size: [2,17]
        },
        {
            groupConfig: {
                id: 'item|bike|5,8',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -cell * 2 ,
                y: cell / 2,
                width: 6 * cell,
                height: 16 * cell,
            },
            imageName: "bike-group.png",
            imageDragName: "bike.png",
            type: "item",
            size: [2,17]
        },
        {
            groupConfig: {
                id: 'item|kidbike|5,8',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: - cell,
                y: 0.5 * cell,
                width: 4 * cell,
                height: 8 * cell,
            },
            imageName: "kid-bike-group.png",
            imageDragName: "kid-bike.png",
            type: "item",
            size: [2, 9]
        },
        {
            groupConfig: {
                id: 'item|backpack|5,8',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: cell / 2,
                width: cell * 2,
                height: cell * 5,
            },
            imageName: "backpack-group.png",
            imageDragName: "backpack.png",
            type: "item",
            size: [2, 6]
        },
        {
            groupConfig: {
                id: 'item|smallbag|5,6,7',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: cell * 0.25,
                width: 4 * cell,
                height: 2.5 * cell,
            },
            imageName: "small-bag-group.png",
            imageDragName: "small-bag.png",
            type: "item",
            size: [4, 3]
        },
        {
            groupConfig: {
                id: 'item|aimalcase|1,3,4,5',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: cell / 2,
                y: 0,
                width: 3 * cell,
                height: 4 * cell,
            },
            imageName: "animal-cage-group.png",
            imageDragName: "animal-cage.png",
            type: "item",
            size: [3, 4]
        },
        {
            groupConfig: {
                id: 'item|stroller|5,6',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: 0,
                width: 4 * cell,
                height: 3 * cell,
            },
            imageName: "stroller-group.png",
            imageDragName: "stroller.png",
            type: "item",
            size: [4, 3]
        },
        {
            groupConfig: {
                id: 'item|lieBox|5',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: 0,
                width: cell * 4,
                height: cell * 6,
            },
            imageName: "lie-box-group.png",
            imageDragName: "lie-box.png",
            type: "item",
            size: [4,6]
        },
        {
            groupConfig: {
                id: 'item|golf|7',
                draggable: false,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: 0,
                width: cell * 10,
                height: cell * 3,
            },
            imageName: "golf-group.png",
            imageDragName: "golf.png",
            type: "item",
            size: [10, 3]
        },
    ]    
}