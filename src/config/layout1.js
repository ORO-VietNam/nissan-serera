const blockSize = 35;
const cell = 35;
const baseWidth = 430;
const baseHeight = 25 * blockSize;
const imageSize = 80;
const space = 10;
let padding = 4;

export default  {
    blockSize: blockSize,
    baseWidth: baseWidth,
    baseHeight: baseHeight,
    padding: padding,
    grid: function() {
        const lines = []
        // Vertical lines
        for (let i = 0; i < baseWidth / cell; i++) {
          lines.push({
            points: [
              Math.round(i * cell),
              0,
              Math.round(i * cell),
              baseHeight
            ],
            stroke: '#ddd',
            strokeWidth: 1,
            opacity: .4
          })
        }
        
        // Horizontal lines
        for (let j = 0; j < baseHeight / cell; j++) {
          lines.push({
            id: `horizontal-${j}`,
            points: [
              0,
              Math.round(j * cell) + 0.5,
              baseWidth,
              Math.round(j * cell) + 0.5
            ],
            stroke: '#ddd',
            strokeWidth: 1,
            opacity: .4
          })
        }
        
        return lines
    },
    head: {
        background: { 
            x: 0, y: 0, width: baseWidth, height: 6 * cell + 30, 
            fillLinearGradientStartPoint: { x: 0, y: 0 },
            fillLinearGradientEndPoint: { x: 0, y: 6 * cell },
            fillLinearGradientColorStops: [0.6, 'white', 1, '#ffffffb4'],
        },
        filter: {
            group: {x: cell / 2, y: cell / 2},
            background: {
                width: 9 * cell,
                height: 1 * cell,
                fill: '#f2f2f2',
                opacity: 1,
                cornerRadius: 2*cell 
            },
            activeBackground: {x: 0 * cell,
                width: 3 * cell,
                height: 1 * cell,
                fill: '#15668E',
                cornerRadius: cell
            },
            all: {
                group: {x: 0, y: 0},
                rect: {width: 3 * cell, height: 1 * cell},
                text: {
                    y: 14,
                    width: 3 * cell,
                    text: 'ดูทั้งหมด',
                    align: 'center',
                    fill: 'white'
                }
            },
            people: {
                group: {x: 3 * cell, y: 0},
                rect: {width: 3 * cell, height: 1 * cell},
                text: {
                    y: 14,
                    width: 3 * cell,
                    text: 'ดูทั้งหมด',
                    align: 'center',
                    fill: 'black'
                }
            },
            items: {
                group: {x: 6 * cell, y: 0},
                rect: {width: 3 * cell, height: 1 * cell},
                text: {
                    y: 14,
                    width: 3 * cell,
                    text: 'ดูทั้งหมด',
                    align: 'center',
                    fill: 'black'
                }
            },
        },
        buttonPrev: {
            group: {x: cell * 10.5, y: cell / 2 + 18 },
            circle: { width: 30, height: 30, fill: '#e2e2e2'},
            icon: {
                x: -4,
                y: -6,
                scaleX: 1,
                scaleY: 1,
                data: 'M6.55566 0.944458L1.50011 6.00001L6.55566 11.0556',
                fill: 'transparent',
                stroke: 'black',
            }
        },
        buttonNext: {
            group: {x: cell * 11.5, y: cell / 2 + 18},
            circle: { width: 30, height: 30, fill: '#B0D0E0'},
            icon: {
                x: -4,
                y: -6,
                scaleX: 1,
                scaleY: 1,
                data: 'M1.44434 0.944458L6.49989 6.00001L1.44434 11.0556',
                fill: 'transparent',
                stroke: 'black',
            }
        }
    },
    car: {
        group: {x: cell, y: 2 * cell},
        shadow: {
            x: 3 * blockSize,
            y: 0,
            width: 7 * blockSize,
            height: 20 * blockSize,
            fill: 'red',
            cornerRadius: blockSize,
            shadowColor: '#124057',
            shadowBlur: 80,
            shadowOffset: { x: 0, y: 0 },
            shadowOpacity: 1,
        },
        groupItem: {x: 2 * cell},
        body: {
            image: null,
            x: 0,
            y: -0.5 * blockSize,
            width: 9 * blockSize,
            height: 9 * blockSize / 0.43,
            opacity: 1
        },
        volang: {
            image: null,
            x: 3.15 * blockSize,
            y: 4.4 * blockSize,
            width: 6.65 * blockSize,
            opacity: 1,
        },
        seat1: {
            image: null,
            x: 2 * blockSize,
            y: 6 * blockSize,
            width: 2 * blockSize,
            height: 3 * blockSize,
            opacity: 1
        },
        seat2: {
            image: null,
            x: 5 * blockSize,
            y: 6 * blockSize,
            width: 2 * blockSize,
            height: 3 * blockSize,
            opacity: 1
        },
        seat3: {
            image: null,
            x: 2 * blockSize,
            y: 10 * blockSize,
            width: 2 * blockSize,
            height: 3 * blockSize,
            opacity: 1
        },
        seat4: {
            image: null,
            x: 5 * blockSize,
            y: 10 * blockSize,
            width: 2 * blockSize,
            height: 3 * blockSize,
            opacity: 1
        },
    },
    dropZones: [
        {
            id: '1',
            x: 5 * blockSize,
            y: 8 * blockSize,
            width: 2 * blockSize,
            height: 2 * blockSize,               
            fill:  'transparent' ,
            opacity: 0.2
        },
        {
            id: '2',
            x: 8 * blockSize,
            y: 8 * blockSize,
            width: 2 * blockSize,
            height: 2 * blockSize,               
            fill:  'transparent' ,
            opacity: 0.2
        },
        {
            id: '3',
            x: 5 * blockSize,
            y: 12 * blockSize,
            width: 2 * blockSize,
            height: 2 * blockSize,               
            fill:  'transparent' ,
            opacity: 0.2
        },
        {
            id: '4',
            x: 8 * blockSize,
            y: 12 * blockSize,
            width: 2 * blockSize,
            height: 2 * blockSize,               
            fill:  'transparent' ,
            opacity: 0.2
        },
        {
            id: '5',
            x: 6 * blockSize,
            y: 15 * blockSize,
            width: 3 * blockSize,
            height: 6 * blockSize,               
            fill:  'transparent' ,
            opacity: 0.2
        },
    ],
    slider: {
        group: {x: cell , y: cell * 2},
        perMove: blockSize * 10
    },
    item: {
        shadow: {
            x: 0,
            y: 0,
            width: blockSize,
            height: blockSize,
            opacity: 0.6,
            fill: '#ff56566e',
            stroke: '#ff56566e',
            strokeWidth: 3,
            dash: [20, 2],
            visible: false
        },
        text: {
            y: 55,
            x: 0,
            width: cell * 2,
            align: 'center',
            fontSize: 8,
            fontWeight: 'bold'
        }
    },
    items: [
        // {
        //     groupConfig: {
        //         id: 'dad,1,2,3,4',
        //         x: 0 * blockSize * 2, 
        //         y: 0 * blockSize * 2,
        //         width: blockSize * 2,
        //         height: blockSize * 2, 
        //         fill: 'azure',
        //         draggable: true,
        //     },
        //     config: {
        //         x: 0 * blockSize * 2 + padding, 
        //         y: 0 * blockSize * 2 + padding, 
        //         width: blockSize * 2 - padding * 2, 
        //         height: blockSize * 2 - padding * 2, 
        //         fill: '#f2f2f2', 
        //         stroke: '#3D95B5',
        //         strokeWidth: 1,
        //         cornerRadius: 5
        //     },
        //     image: {
        //         x: 20,
        //         y: 5,
        //         width: 23,
        //         height: 45,
        //         image: null
        //     },
        //     imageDrag: {
        //         x: 10,
        //         y: -(blockSize / 2),
        //         width: 54,
        //         height: 84,
        //     },
        //     text: "คุณพ่อ",
        //     imageName: "dad-group.png",
        //     imageDragName: "dad.png",
        //     size: [2,2]
        // },
        // {
        //     groupConfig: {
        //         id: 'wife,1,2,3,4',
        //         x: 1 * blockSize * 2, 
        //         y: 0 * blockSize * 2, 
        //         width: blockSize * 2,
        //         height: blockSize * 2, 
        //         fill: 'azure',
        //         draggable: true,
        //     },
        //     config: {
        //         x: 0 * blockSize * 2 + padding, 
        //         y: 0 * blockSize * 2 + padding, 
        //         width: blockSize * 2 - padding * 2, 
        //         height: blockSize * 2 - padding * 2, 
        //         fill: '#f2f2f2', 
        //         stroke: '#3D95B5',
        //         strokeWidth: 1,
        //         cornerRadius: 5
        //     },
        //     image: {
        //         x: 20,
        //         y: 8,
        //         width: 22,
        //         height: 42,
        //         image: null
        //     },
        //     imageDrag: {
        //         x: 10,
        //         y: -(blockSize / 2),
        //         width: 54,
        //         height: 84,
        //     },
        //     text: "คุณแม่",
        //     imageName: "wife-group.png",
        //     imageDragName: "wife.png",
        //     size: [2,2]
        // },
        // {
        //     groupConfig: {
        //         id: 'kidboy1,3,4',
        //         x: 2 * blockSize * 2, 
        //         y: 0 * blockSize * 2, 
        //         width: blockSize * 2,
        //         height: blockSize * 2, 
        //         fill: 'azure',
        //         draggable: true,
        //     },
        //     config: {
        //         x: 0 * blockSize * 2 + padding, 
        //         y: 0 * blockSize * 2 + padding, 
        //         width: blockSize * 2 - padding * 2, 
        //         height: blockSize * 2 - padding * 2, 
        //         fill: '#f2f2f2', 
        //         stroke: '#3D95B5',
        //         strokeWidth: 1,
        //         cornerRadius: 5
        //     },
        //     image: {
        //         x: 20,
        //         y: 15,
        //         width: 16,
        //         height: 32,
        //         image: null
        //     },
        //     imageDrag: {
        //         x: 10,
        //         y: -(blockSize / 2),
        //         width: 46,
        //         height: 68,
        //     },
        //     text: "ลูกคนกลาง",
        //     imageName: "kid-boy-group.png",
        //     imageDragName: "kid-boy.png",
        //     size: [2,2],
        // },
        // {
        //     groupConfig: {
        //         id: 'kidgirl,1,3,4',
        //         x: 3 * blockSize * 2, 
        //         y: 0 * blockSize * 2, 
        //         width: blockSize * 2,
        //         height: blockSize * 2, 
        //         fill: 'azure',
        //         draggable: true,
        //     },
        //     config: {
        //         x: 0 * blockSize * 2 + padding, 
        //         y: 0 * blockSize * 2 + padding, 
        //         width: blockSize * 2 - padding * 2, 
        //         height: blockSize * 2 - padding * 2, 
        //         fill: '#f2f2f2', 
        //         stroke: '#3D95B5',
        //         strokeWidth: 1,
        //         cornerRadius: 5
        //     },
        //     image: {
        //         x: 20,
        //         y: 15,
        //         width: 19,
        //         height: 35,
        //         image: null
        //     },
        //     imageDrag: {
        //         x: 10,
        //         y: -(blockSize / 2),
        //         width: 46,
        //         height: 68,
        //     },
        //     text: "ลูกคนกลาง",
        //     imageName: "kid-girl-group.png",
        //     imageDragName: "kid-girl.png",
        //     size: [2,2]
        // },
        // {
        //     groupConfig: {
        //         id: 'baby,3,4',
        //         x: 5 * blockSize * 2, 
        //         y: 0 * blockSize * 2, 
        //         width: blockSize * 2,
        //         height: blockSize * 2, 
        //         fill: 'azure',
        //         draggable: true,
        //     },
        //     config: {
        //         x: 0 * blockSize * 2 + padding, 
        //         y: 0 * blockSize * 2 + padding, 
        //         width: blockSize * 2 - padding * 2, 
        //         height: blockSize * 2 - padding * 2, 
        //         fill: '#f2f2f2', 
        //         stroke: '#3D95B5',
        //         strokeWidth: 1,
        //         cornerRadius: 5
        //     },
        //     image: {
        //         x: 20,
        //         y: 15,
        //         width: 25,
        //         height: 25,
        //         image: null
        //     },
        //     imageDrag: {
        //         x: 10,
        //         y: 5,
        //         width: 48,
        //         height: 68,
        //     },
        //     text: "ลูกคนกลาง",
        //     imageName: "baby-group.png",
        //     imageDragName: "baby.png",
        //     size: [2,2]
        // },
        // {
        //     groupConfig: {
        //         id: 'baby,3,4',
        //         x: 4 * blockSize * 2, 
        //         y: 0 * blockSize * 2, 
        //         width: blockSize * 2,
        //         height: blockSize * 2, 
        //         fill: 'azure',
        //         draggable: true,
        //     },
        //     config: {
        //         x: 0 * blockSize * 2 + padding, 
        //         y: 0 * blockSize * 2 + padding, 
        //         width: blockSize * 2 - padding * 2, 
        //         height: blockSize * 2 - padding * 2, 
        //         fill: '#f2f2f2', 
        //         stroke: '#3D95B5',
        //         strokeWidth: 1,
        //         cornerRadius: 5
        //     },
        //     image: {
        //         x: 20,
        //         y: 15,
        //         width: 25,
        //         height: 25,
        //         image: null
        //     },
        //     imageDrag: {
        //         x: 10,
        //         y: 5,
        //         width: 48,
        //         height: 68,
        //     },
        //     text: "ลูกคนกลาง",
        //     imageName: "baby-group.png",
        //     imageDragName: "baby.png",
        //     size: [2,2]
        // },
        // {
        //     groupConfig: {
        //         id: 'bigbag,5',
        //         x: 0 * blockSize * 2, 
        //         y: 1 * blockSize * 2, 
        //         width: blockSize * 2,
        //         height: blockSize * 2, 
        //         fill: 'azure',
        //         draggable: true,
        //     },
        //     config: {
        //         x: 0 * blockSize * 2 + padding, 
        //         y: 0 * blockSize * 2 + padding, 
        //         width: blockSize * 2 - padding * 2, 
        //         height: blockSize * 2 - padding * 2, 
        //         fill: '#f2f2f2', 
        //         stroke: '#3D95B5',
        //         strokeWidth: 1,
        //         cornerRadius: 5
        //     },
        //     image: {
        //         x: 20,
        //         y: 5,
        //         width: 24,
        //         height: 46,
        //         image: null
        //     },
        //     imageDrag: {
        //         x: -8,
        //         y: 20,
        //         height: 105,
        //         width: 52,
        //     },
        //     text: "ลูกคนกลาง",
        //     imageName: "bike-group.png",
        //     imageDragName: "bike.png",
        //     size: [1,4]
        // },
        {
            groupConfig: {
                id: 'people|dad|1,2,3,4',
                draggable: true,
            },
            image: {
                image: null,
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 10,
                y: -(blockSize / 2),
                width: 54,
                height: 84,
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 10,
                y: -(blockSize / 2),
                width: 54,
                height: 84,
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 10,
                y: -(blockSize / 2),
                width: 54,
                height: 84,
            },
            imageName: "kid-boy-group.png",
            imageDragName: "kid-boy.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|kidboy|1,2,3,4',
                draggable: true,
            },
            image: {
                image: null,
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 10,
                y: -(blockSize / 2),
                width: 54,
                height: 84,
            },
            imageName: "kid-girl-group.png",
            imageDragName: "kid-girl.png",
            type: "people",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'people|kidboy|1,2,3,4',
                draggable: true,
            },
            image: {
                image: null,
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 10,
                y: 5,
                width: 48,
                height: 68,
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 10,
                y: 5,
                width: 48,
                height: 68,
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 10,
                y: 5,
                width: 48,
                height: 68,
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
            },
            imageDrag: {
                x: 5,
                y: 5,
                width: 54,
                height: 84
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
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
                x: space,
                y: space,
                width: imageSize - space,
                height: imageSize - space
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
