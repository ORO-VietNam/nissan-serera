const blockSize = 35;
const cell = 35;
const baseWidth = 430;
const baseHeight = 25 * blockSize;
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
            x: 0, y: 0, width: baseWidth, height: 6 * cell + 15, 
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
            circle: { width: 30, height: 30, fill: '#e2e2e2'},
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
        {
            groupConfig: {
                id: 'dad,1,2,3,4',
                x: 0 * blockSize * 2, 
                y: 0 * blockSize * 2,
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 5,
                with: 23,
                height: 45,
                image: null
            },
            afterImageConfig: {
                x: 10,
                y: -(blockSize / 2),
                with: 54,
                height: 84,
            },
            text: "คุณพ่อ",
            imgBefore: "dad-group.png",
            imgAfter: "dad.png",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'wife,1,2,3,4',
                x: 1 * blockSize * 2, 
                y: 0 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 8,
                with: 22,
                height: 42,
                image: null
            },
            afterImageConfig: {
                x: 10,
                y: -(blockSize / 2),
                with: 54,
                height: 84,
            },
            text: "คุณแม่",
            imgBefore: "wife-group.png",
            imgAfter: "wife.png",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'kidboy1,3,4',
                x: 2 * blockSize * 2, 
                y: 0 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 15,
                with: 16,
                height: 32,
                image: null
            },
            afterImageConfig: {
                x: 10,
                y: -(blockSize / 2),
                with: 46,
                height: 68,
            },
            text: "ลูกคนกลาง",
            imgBefore: "kid-boy-group.png",
            imgAfter: "kid-boy.png",
            size: [2,2],
        },
        {
            groupConfig: {
                id: 'kidgirl,1,3,4',
                x: 3 * blockSize * 2, 
                y: 0 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 15,
                with: 19,
                height: 35,
                image: null
            },
            afterImageConfig: {
                x: 10,
                y: -(blockSize / 2),
                with: 46,
                height: 68,
            },
            text: "ลูกคนกลาง",
            imgBefore: "kid-girl-group.png",
            imgAfter: "kid-girl.png",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'baby,3,4',
                x: 5 * blockSize * 2, 
                y: 0 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 15,
                with: 25,
                height: 25,
                image: null
            },
            afterImageConfig: {
                x: 10,
                y: 5,
                with: 48,
                height: 68,
            },
            text: "ลูกคนกลาง",
            imgBefore: "baby-group.png",
            imgAfter: "baby.png",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'baby,3,4',
                x: 4 * blockSize * 2, 
                y: 0 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 15,
                with: 25,
                height: 25,
                image: null
            },
            afterImageConfig: {
                x: 10,
                y: 5,
                with: 48,
                height: 68,
            },
            text: "ลูกคนกลาง",
            imgBefore: "baby-group.png",
            imgAfter: "baby.png",
            size: [2,2]
        },
        {
            groupConfig: {
                id: 'bigbag,5',
                x: 0 * blockSize * 2, 
                y: 1 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 5,
                with: 24,
                height: 46,
                image: null
            },
            afterImageConfig: {
                x: 5,
                y: 5,
                height: 84,
                with: 54,
            },
            text: "ลูกคนกลาง",
            imgBefore: "big-bag-group.png",
            imgAfter: "big-bag.png",
            size: [2,3]
        },
        {
            groupConfig: {
                id: 'bigbag,5',
                x: 1 * blockSize * 2, 
                y: 1 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 5,
                with: 24,
                height: 46,
                image: null
            },
            afterImageConfig: {
                x: 5,
                y: 5,
                height: 84,
                with: 54,
            },
            text: "ลูกคนกลาง",
            imgBefore: "big-bag-group.png",
            imgAfter: "big-bag.png",
            size: [2,3]
        },
        {
            groupConfig: {
                id: 'bigbag,5',
                x: 2 * blockSize * 2, 
                y: 1 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 5,
                with: 24,
                height: 46,
                image: null
            },
            afterImageConfig: {
                x: 5,
                y: 5,
                height: 84,
                with: 54,
            },
            text: "ลูกคนกลาง",
            imgBefore: "big-bag-group.png",
            imgAfter: "big-bag.png",
            size: [2,3]
        },
        {
            groupConfig: {
                id: 'bigbag,5',
                x: 3 * blockSize * 2, 
                y: 1 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 5,
                with: 24,
                height: 46,
                image: null
            },
            afterImageConfig: {
                x: 5,
                y: 5,
                height: 84,
                with: 54,
            },
            text: "ลูกคนกลาง",
            imgBefore: "big-bag-group.png",
            imgAfter: "big-bag.png",
            size: [2,3]
        },
        {
            groupConfig: {
                id: 'bigbag,5',
                x: 4 * blockSize * 2, 
                y: 1 * blockSize * 2, 
                with: blockSize * 2,
                height: blockSize * 2, 
                fill: 'azure',
                draggable: true,
            },
            config: {
                x: 0 * blockSize * 2 + padding, 
                y: 0 * blockSize * 2 + padding, 
                width: blockSize * 2 - padding * 2, 
                height: blockSize * 2 - padding * 2, 
                fill: '#f2f2f2', 
                stroke: '#3D95B5',
                strokeWidth: 1,
                cornerRadius: 5
            },
            imageConfig: {
                x: 20,
                y: 5,
                with: 24,
                height: 46,
                image: null
            },
            afterImageConfig: {
                x: 5,
                y: 5,
                height: 84,
                with: 54,
            },
            text: "ลูกคนกลาง",
            imgBefore: "big-bag-group.png",
            imgAfter: "big-bag.png",
            size: [2,3]
        },
    ]    
}
