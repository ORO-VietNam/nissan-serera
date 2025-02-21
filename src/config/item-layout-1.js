const windowWidth = window.innerWidth
let cell = 35;
let sliderItemSize = (windowWidth - cell) / 5;
let sliderSpacing = 8;
if(windowWidth >= 768 && windowWidth < 1024) {
    cell = 40
    sliderItemSize = (windowWidth - cell) / 7;
} else if(windowWidth >= 1024) {
    cell = 40
    sliderItemSize = (17 * cell) / 7;
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
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 2.5 * 0.64) / 2,
                y: -(cell / 2),
                width: cell * 2.5 * 0.64,
                height: cell * 2.5
            },
            imageName: "dad-group.png",
            imageDragName: "dad.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|wife|1,2,3,4',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 2.5 * 0.64) / 2,
                y: -(cell / 2),
                width: cell * 2.5 * 0.64,
                height: cell * 2.5
            },
            imageName: "wife-group.png",
            imageDragName: "wife.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|kidboy|1,3,4',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 2.2 * 0.64) / 2,
                y: -(cell / 2),
                width: cell * 2.2 * 0.64,
                height: cell * 2.2
            },
            imageName: "kid-boy-group.png",
            imageDragName: "kid-boy.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|kidgirl|1,3,4',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 2.2 * 0.64) / 2,
                y: -(cell / 2),
                width: cell * 2.2 * 0.64,
                height: cell * 2.2,
            },
            imageName: "kid-girl-group.png",
            imageDragName: "kid-girl.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|baby|3,4',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 2.2 * 0.64) / 2,
                y: 0,
                width: cell * 2.2 * 0.64,
                height: cell * 2.2
            },
            imageName: "baby-group.png",
            imageDragName: "baby.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|grandfather|1,3,4',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 2.5 * 0.64) / 2,
                y: -(cell / 2),
                width: cell * 2.5 * 0.64,
                height: cell * 2.5
            },
            imageName: "grand-father-group.png",
            imageDragName: "grand-father.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|grandfather|1,3,4',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 2.5 * 0.64) / 2,
                y: -(cell / 2),
                width: cell * 2.5 * 0.64,
                height: cell * 2.5
            },
            imageName: "grand-mother-group.png",
            imageDragName: "grand-mother.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|lieboy|1,3,4,5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: (2 * cell - cell * 3 * 0.35) / 2,
                y: 0,
                width: cell * 3 * 0.35,
                height: cell * 3
            },
            imageName: "sleep-boy-group.png",
            imageDragName: "sleep-boy.png",
            type: "people",
            size: [2,3]
        },
// items
        {
            groupConfig: {
                id: 'item|box,5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 5,
                y: 5,
                width: 2 * cell,
                height: 8 * cell
            },
            imageName: "long-box-group.png",
            imageDragName: "long-box.png",
            type: "item",
            size: [2,9]
        },
        {
            groupConfig: {
                id: 'item|vali|5',
                draggable: true,
            }, 
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: cell * 0.1,
                width: cell * 2,
                height: cell * 2.8
            },
            imageName: "big-bag-group.png",
            imageDragName: "big-bag.png",
            type: "item",
            size: [2,3]
        },
        {
            groupConfig: {
                id: 'item|surfboard|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 5,
                y: 5,
                width: 54,
                height: 84
            },
            imageName: "surf-group.png",
            imageDragName: "surf.png",
            type: "item",
            size: [1,9]
        },
        {
            groupConfig: {
                id: 'item|bike|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -8,
                y: 20,
                height: 105,
                width: 52,
            },
            imageName: "bike-group.png",
            imageDragName: "bike.png",
            type: "item",
            size: [1,9]
        },
        {
            groupConfig: {
                id: 'item|kidbike|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -8,
                y: 20,
                height: 105,
                width: 52,
            },
            imageName: "kid-bike-group.png",
            imageDragName: "kid-bike.png",
            type: "item",
            size: [1, 4.5]
        },
        {
            groupConfig: {
                id: 'item|backpack|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -8,
                y: 20,
                height: 105,
                width: 52,
            },
            imageName: "backpack-group.png",
            imageDragName: "backpack.png",
            type: "item",
            size: [2,4]
        },
        {
            groupConfig: {
                id: 'item|smallbag|7',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: 0,
                y: 0.5,
                height: 105,
                width: 52,
            },
            imageName: "small-bag-group.png",
            imageDragName: "small-bag.png",
            type: "item",
            size: [2, 1.5]
        },
        {
            groupConfig: {
                id: 'item|aimalcase|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -8,
                y: 20,
                height: 105,
                width: 52,
            },
            imageName: "animal-cage-group.png",
            imageDragName: "animal-cage.png",
            type: "item",
            size: [3, 2]
        },
        {
            groupConfig: {
                id: 'item|stroller|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -8,
                y: 20,
                height: 105,
                width: 52,
            },
            imageName: "stroller-group.png",
            imageDragName: "stroller.png",
            type: "item",
            size: [2, 1.5]
        },
        {
            groupConfig: {
                id: 'item|lieBox|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -8,
                y: 20,
                height: 105,
                width: 52,
            },
            imageName: "lie-box-group.png",
            imageDragName: "lie-box.png",
            type: "item",
            size: [2,3]
        },
        {
            groupConfig: {
                id: 'item|golf|5',
                draggable: true,
            },
            image: {
                ...imageConfig
            },
            imageDrag: {
                x: -8,
                y: 20,
                height: 105,
                width: 52,
            },
            imageName: "golf-group.png",
            imageDragName: "golf.png",
            type: "item",
            size: [5, 1.5]
        },
    ]    
}