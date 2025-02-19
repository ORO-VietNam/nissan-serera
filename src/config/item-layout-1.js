const windowWidth = window.innerWidth
let cell = 35;
let sliderItemSize = 80
let sliderSpacing = 10;
if(windowWidth >= 768 && windowWidth < 1024) {
    cell = 40
    sliderItemSize = 100
} else if(windowWidth >= 1024) {
    sliderItemSize = Math.round(cell * 3);
}

export default  {
    items: [
        {
            groupConfig: {
                id: 'people|dad|1,2,3,4',
                draggable: true,
            },
            image: {
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
// items
        {
            groupConfig: {
                id: 'item|box,5',
                draggable: true,
            },
            image: {
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
            },
            imageDrag: {
                x: 5,
                y: 5,
                width: 54,
                height: 84
            },
            imageName: "box-group.png",
            imageDragName: "box.png",
            type: "item",
            size: [1,5]
        },
        {
            groupConfig: {
                id: 'item|vali|5',
                draggable: true,
            },
            image: {
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
            },
            imageDrag: {
                x: 0,
                y: cell * 0.1,
                width: cell * 2,
                height: cell * 2.8
            },
            imageName: "vali-group.png",
            imageDragName: "vali.png",
            type: "item",
            size: [2,3]
        },
        {
            groupConfig: {
                id: 'item|surfboard|5',
                draggable: true,
            },
            image: {
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
            },
            imageDrag: {
                x: 5,
                y: 5,
                width: 54,
                height: 84
            },
            imageName: "surfboard-group.png",
            imageDragName: "surfboard.png",
            type: "item",
            size: [1,3]
        },
        {
            groupConfig: {
                id: 'item|bike|5',
                draggable: true,
            },
            image: {
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
            size: [1,4]
        },
        {
            groupConfig: {
                id: 'item|kidbike|5',
                draggable: true,
            },
            image: {
                image: null,
                x: sliderSpacing,
                y: sliderSpacing,
                width: sliderItemSize - sliderSpacing,
                height: sliderItemSize - sliderSpacing
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
            size: [1,4]
        },
    ]    
}