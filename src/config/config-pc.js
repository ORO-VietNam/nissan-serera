const cell = 15;
const baseWidth = 1440;
const baseHeight = 700;
const sliderItemCount = 7
const sliderItemSize = Math.round(50 * cell / sliderItemCount);
const sliderSpacing = 8;
const padding = 4;

export default  {
    cell: cell,
    baseWidth: baseWidth,
    baseHeight: baseHeight,
    padding: padding,
    group: {x: 0, y: 0},
    background: {},
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
            stroke: 'blue',
            strokeWidth: 1,
            opacity: .2,
            visible: false
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
            stroke: 'blue',
            strokeWidth: 1,
            opacity: .2,
            visible: false
          })
        }
        
        return lines
    },
    intro: {
        group: {x: 8 * cell, y: 2 * cell},
        h1: {
            x: cell,
            y: 1 * cell,
            text: "เลื่อน พับ ปรับที่นั่ง",
            fontSize: 48,
            fontStyle: 'bold',
            fontFamily: "PSLDisplayPro",
            fill: "#15668E"
        },
        h2: {
            x: cell,
            y: 4 * cell,
            text: "สะดวกสบาย สไตล์ครอบครัวคุณ",
            fontFamily: "PSLDisplayPro",
            fontSize: 30,
            fill: "#15668E"
        },
        image: {
            x: (52 - 20) * cell,
            y: -2 * cell,
            width: 20 * cell ,
            height: 20 * cell * 0.889,
            image: null,
        },
        imageName: "img-head.png",
        items: [
            {
                group: {x: 0 , y: 9 * cell},
                imageName: "intro1.png",
                image: {
                    x: 0,
                    y: 0,
                    width: 105,
                    image: null
                },
            },
            {
                group: {x: cell * 8 , y: 9 * cell},
                imageName: "intro2.png",
                image: {
                    x: 0,
                    y: 0,
                    width: 105,
                    image: null
                },
            },
            {
                group: {x: cell * 17 , y: 9 * cell},
                imageName: "intro3.png",
                image: {
                    x: 0,
                    y: 0,
                    width: 105,
                    image: null
                },
            },
        ]
    },
    head: {
        group: {
            x: 8 * cell,
            y: 21 * cell
        },
        background: { 
            x: 0, y: 0, width: 52 * cell, height: 21 * cell,
            fillLinearGradientStartPoint: { x: 0, y: 0 },
            fillLinearGradientEndPoint: { x: 0, y: 12 * cell },
            fillLinearGradientColorStops: [0, 'white', 1, '#ffffffb4'],
            cornerRadius: 24,
            opacity: .7
        },
        filter: {
            group: {x: cell, y: cell * 1.5 },
            position: {
                "": 2,
                "people": 9 * cell,
                "item": 18 * cell,
            },
            background: {
                width: 27 * cell,
                height: 2.5 * cell,
                fill: '#f2f2f2',
                opacity: 1,
                cornerRadius: cell * 2.5
            },
            activeBackground: {
                x: 2,
                y: 2,
                width: 9 * cell - 4,
                height: 2.5 * cell - 4,
                fill: '#15668E',
                cornerRadius: cell * 2.5
            },
            all: {
                group: {x: 0, y: 0},
                rect: {width: 9 * cell, height: 2.5 * cell},
                text: {
                    y: 0,
                    width: 9 * cell,
                    text: 'ดูทั้งหมด',
                    fontFamily: "PSLDisplayPro",
                    fontSize: 16,
                    lineHeight: 2.5 * cell / 16,
                    align: 'center',
                    fill: 'white'
                }
            },
            people: {
                group: {x: 9 * cell, y: 0},
                rect: {width: 9 * cell, height: 2.5 * cell},
                path: {
                    x: 30,
                    y: 9,
                    fill: '#15668E',
                    data: "M4.33761 3.30657C5.09918 3.30657 5.71667 2.68592 5.71667 1.92047C5.71667 1.15501 5.09918 0.534363 4.33761 0.534363C3.57604 0.534363 2.95855 1.15501 2.95855 1.92047C2.95855 2.68592 3.57604 3.30657 4.33761 3.30657ZM7.20694 4.99028L8.12729 9.7175H14.6936C14.6428 9.57706 14.6153 9.42406 14.6153 9.26397V5.26878C14.6153 4.58368 15.1173 4.02829 15.7363 4.02829H19.769C20.3881 4.02829 20.89 4.58368 20.89 5.26878V9.26397C20.89 9.94667 20.3841 10.5005 19.7049 10.5005L19.1476 17.4517H16.353L15.7941 10.5005C15.7586 10.5005 15.7236 10.499 15.6892 10.496C15.6619 10.502 15.6336 10.5052 15.6046 10.5052H12.6585V13.3518L12.0007 17.4656H10.0627L9.40484 13.3526L9.41088 10.5052H6.91094L7.19824 12.0067H5.80968L5.42098 17.4517H3.25739L2.86869 12.0067H1.48013L1.91317 9.74775H1.80788C1.16031 9.74775 0.672647 9.15495 0.795354 8.51521L1.47063 4.99028C1.57196 4.44125 2.01133 4.02829 2.53778 4.02829H6.1398C6.66625 4.02829 7.10561 4.44125 7.20694 4.99028ZM16.3243 1.92047C16.3243 2.68592 16.9418 3.30657 17.7034 3.30657C18.465 3.30657 19.0824 2.68592 19.0824 1.92047C19.0824 1.15501 18.465 0.534363 17.7034 0.534363C16.9418 0.534363 16.3243 1.15501 16.3243 1.92047ZM10.8369 9.03635C11.4877 9.03635 12.0157 8.50562 12.0157 7.85156C12.0157 7.1975 11.4877 6.66677 10.8369 6.66677C10.1862 6.66677 9.65815 7.1975 9.65815 7.85156C9.65815 8.50562 10.1862 9.03635 10.8369 9.03635Z M4.33761 3.30657C5.09918 3.30657 5.71667 2.68592 5.71667 1.92047C5.71667 1.15501 5.09918 0.534363 4.33761 0.534363C3.57604 0.534363 2.95855 1.15501 2.95855 1.92047C2.95855 2.68592 3.57604 3.30657 4.33761 3.30657ZM7.20694 4.99028L8.12729 9.7175H14.6936C14.6428 9.57706 14.6153 9.42406 14.6153 9.26397V5.26878C14.6153 4.58368 15.1173 4.02829 15.7363 4.02829H19.769C20.3881 4.02829 20.89 4.58368 20.89 5.26878V9.26397C20.89 9.94667 20.3841 10.5005 19.7049 10.5005L19.1476 17.4517H16.353L15.7941 10.5005C15.7586 10.5005 15.7236 10.499 15.6892 10.496C15.6619 10.502 15.6336 10.5052 15.6046 10.5052H12.6585V13.3518L12.0007 17.4656H10.0627L9.40484 13.3526L9.41088 10.5052H6.91094L7.19824 12.0067H5.80968L5.42098 17.4517H3.25739L2.86869 12.0067H1.48013L1.91317 9.74775H1.80788C1.16031 9.74775 0.672647 9.15495 0.795354 8.51521L1.47063 4.99028C1.57196 4.44125 2.01133 4.02829 2.53778 4.02829H6.1398C6.66625 4.02829 7.10561 4.44125 7.20694 4.99028ZM16.3243 1.92047C16.3243 2.68592 16.9418 3.30657 17.7034 3.30657C18.465 3.30657 19.0824 2.68592 19.0824 1.92047C19.0824 1.15501 18.465 0.534363 17.7034 0.534363C16.9418 0.534363 16.3243 1.15501 16.3243 1.92047ZM10.8369 9.03635C11.4877 9.03635 12.0157 8.50562 12.0157 7.85156C12.0157 7.1975 11.4877 6.66677 10.8369 6.66677C10.1862 6.66677 9.65815 7.1975 9.65815 7.85156C9.65815 8.50562 10.1862 9.03635 10.8369 9.03635Z"
                },
                text: {
                    y: 0,
                    x: 55,
                    text: 'เลือกคน',
                    fontFamily: "PSLDisplayPro",
                    fontSize: 16,
                    lineHeight: 2.5 * cell / 16,
                    align: 'center',
                    fill: 'black'
                }
            },
            items: {
                group: {x: 18 * cell, y: 0},
                rect: {width: 9 * cell, height: 2.5 * cell},
                path: {
                    x: 30,
                    y: 10,
                    fill: '#15668E',
                    data: "M9.1982 2.34775H10V1.47999C10 0.774214 9.42903 0.200317 8.72684 0.200317H5.74965C5.04746 0.200317 4.47648 0.774214 4.47648 1.47999V2.34775H5.27828V1.47999C5.27828 1.21868 5.48967 1.00622 5.74965 1.00622H8.72684C8.98682 1.00622 9.1982 1.21868 9.1982 1.47999V2.34775ZM12.5458 3.6462H1.56514C0.701785 3.6462 0.0012207 4.35034 0.0012207 5.21811V12.6193C0.0012207 13.4879 0.701785 14.1913 1.56514 14.1913H12.5458C13.4099 14.1913 14.1097 13.4871 14.1097 12.6193V5.21811C14.1097 4.34953 13.4091 3.6462 12.5458 3.6462ZM4.91084 12.4549C4.91084 12.6031 4.79098 12.7235 4.64357 12.7235C4.49617 12.7235 4.37631 12.6031 4.37631 12.4549V5.38254C4.37631 5.23439 4.49617 5.11391 4.64357 5.11391C4.79098 5.11391 4.91084 5.23439 4.91084 5.38254V12.4549ZM9.73542 12.4549C9.73542 12.6031 9.61556 12.7235 9.46816 12.7235C9.32075 12.7235 9.20089 12.6031 9.20089 12.4549V5.38254C9.20089 5.23439 9.32075 5.11391 9.46816 5.11391C9.61556 5.11391 9.73542 5.23439 9.73542 5.38254V12.4549ZM3.63453 15.7997C4.29217 15.7997 4.82509 15.2641 4.82509 14.6031H2.44317C2.44317 15.2641 2.97689 15.7997 3.63453 15.7997ZM10.791 15.7997C11.4486 15.7997 11.9816 15.2641 11.9816 14.6031H9.59964C9.59964 15.2641 10.1334 15.7997 10.791 15.7997Z M9.1982 2.34775H10V1.47999C10 0.774214 9.42903 0.200317 8.72684 0.200317H5.74965C5.04746 0.200317 4.47648 0.774214 4.47648 1.47999V2.34775H5.27828V1.47999C5.27828 1.21868 5.48967 1.00622 5.74965 1.00622H8.72684C8.98682 1.00622 9.1982 1.21868 9.1982 1.47999V2.34775ZM12.5458 3.6462H1.56514C0.701785 3.6462 0.0012207 4.35034 0.0012207 5.21811V12.6193C0.0012207 13.4879 0.701785 14.1913 1.56514 14.1913H12.5458C13.4099 14.1913 14.1097 13.4871 14.1097 12.6193V5.21811C14.1097 4.34953 13.4091 3.6462 12.5458 3.6462ZM4.91084 12.4549C4.91084 12.6031 4.79098 12.7235 4.64357 12.7235C4.49617 12.7235 4.37631 12.6031 4.37631 12.4549V5.38254C4.37631 5.23439 4.49617 5.11391 4.64357 5.11391C4.79098 5.11391 4.91084 5.23439 4.91084 5.38254V12.4549ZM9.73542 12.4549C9.73542 12.6031 9.61556 12.7235 9.46816 12.7235C9.32075 12.7235 9.20089 12.6031 9.20089 12.4549V5.38254C9.20089 5.23439 9.32075 5.11391 9.46816 5.11391C9.61556 5.11391 9.73542 5.23439 9.73542 5.38254V12.4549ZM3.63453 15.7997C4.29217 15.7997 4.82509 15.2641 4.82509 14.6031H2.44317C2.44317 15.2641 2.97689 15.7997 3.63453 15.7997ZM10.791 15.7997C11.4486 15.7997 11.9816 15.2641 11.9816 14.6031H9.59964C9.59964 15.2641 10.1334 15.7997 10.791 15.7997Z"
                },
                text: {
                    x: 50,
                    y: 0,
                    text: 'เลือกของ',
                    fontFamily: "PSLDisplayPro",
                    fontSize: 16,
                    lineHeight: 2.5 * cell / 16,
                    align: 'center',
                    fill: 'black'
                }
            },
        },
        buttonPrev: {
            group: {x: 47 * cell  - 5, y: cell * 2.75 },
            circle: { radius: 2.5 * cell / 2, fill: '#e2e2e2'},
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
            group: {x: 49.75 * cell, y: cell * 2.75},
            circle: { radius: cell * 2.5 / 2, fill: '#B0D0E0'},
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
    footer: {
        group: {x: 0, y: baseHeight - 6 * cell},
        background: {
            x: 0, 
            y: 0, 
            width: baseWidth, 
            height: 6 * cell, 
            fillLinearGradientStartPoint: { x: 0, y: 0 },
            fillLinearGradientEndPoint: { x: 0, y: 6 * cell },
            fillLinearGradientColorStops: [0, '#15668E', 1, '#0C4B6A'],
            opacity: 0
        },
        selectLayout: {
            group: {x: cell * 8, y: 2.5 * cell },
            circle: { x: 20, y: 20, radius: cell, stroke: 'white', strokeWidth: 2 },
            path: {
                x: 13.5,
                y: 13.5,
                data: 'M7.78788 13H5.21212V7.78788H0V5.21212H5.21212V0H7.78788V5.21212H13V7.78788H7.78788V13Z',
                fill: 'white',
                stroke: 'white',
            },
            text: {
                x: 2 * cell + 10,
                y: 5,
                text: 'ดูรูปแบบที่นั่งทั้ง 13 แบบเพิ่มเติม',
                fontFamily: "PSLDisplayPro",
                fill: 'white',
                fontSize: 16,
                lineHeight: cell / 8
            },
            nav: {
                x: -10 * cell,
                y: 0,
                height: 35 * cell,
                width: 10 * cell,
                group: {
                    x: -10 * cell,
                    y: 0,
                    clipFunc: function(ctx) {
                        ctx.beginPath();
                        ctx.rect(0, 0, 10 * cell, baseHeight - 6 * cell);
                        ctx.closePath();
                    }
                },
                background: {
                    x: 0,
                    y: 0,
                    width: 10 * cell,
                    height: 39 * cell,
                    fill: 'white',
                    opacity: 1,
                    shadowColor: '#aaa',
                    shadowBlur: 20,
                    shadowOffset: { x: 10, y: 10 },
                    shadowOpacity: 1,
                    draggable: true
                },
                groupItem: {
                    x: 0,
                    y: 0, 
                },
                item: {
                    
                },
                text: {
                    x: 15,
                    text: `Layout`,
                    fontSize: 16,
                    lineHeight: 3 * cell / 16
                }
            }
        },
        resetLayout: {
            group: {
                x: 55 * cell,
                y: 2.5 * cell
            },
            circle: { x: cell, y: cell, radius: cell, stroke: 'white', strokeWidth: 2 },
            path: {
                y: 1,
                data: 'M22 14.2556C22 20.0546 17.299 24.7556 11.5 24.7556C5.70101 24.7556 1 20.0546 1 14.2556C1 8.45663 5.70101 3.75562 11.5 3.75562C14.2424 3.75562 16.7393 4.80697 18.6095 6.52862 M17.5 1.24438L19.1471 7.3915L13 9.03861',
                fill: 'transparent',
                stroke: 'white',
                scaleX: 1.4,
                scaleY: 1.4,
            },
            text: {
                x: cell * 2.5,
                y: 5,
                text: 'รีเซ็ต',
                fontFamily: "PSLDisplayPro",
                fill: 'white',
                fontSize: 16,
                lineHeight: cell / 7
            },
        },
    },
    car: {
        group: {x: 0, y: 0},
        shadow: {
            x: 70 * cell,
            y: 2.5 * cell,
            width: 14 * cell,
            height: 41 * cell ,
            fill: 'red',
            cornerRadius: 60,
            shadowColor: '#124057',
            shadowBlur: 50,
            shadowOffset: { x: 0, y: 10 },
            shadowOpacity: 1,
            opacity: 1
        },
        background: {
            x: 65 * cell,
            y: 21 * cell,
            width: 23 * cell,
            height: 21 * cell,
            fill: 'white',
            cornerRadius: 24,
            shadowColor: '#124057',
            shadowBlur: 40,
            shadowOffset: { x: 0, y: 0 },
            shadowOpacity: .2,
            opacity: 0.7,
        },
        groupItem: {x: 4 * cell},
        body: {
            image: null,
            x: cell * 64,
            y: 2 * cell,
            width: 18 * cell,
            height: 18 * cell / 0.43,
            opacity: 1
        },
        volang: {
            image: null,
            x: 70.3 * cell,
            y: 29 * 0.4 * cell,
            width: 13.3 * cell,
            opacity: 1,
        },
        seats: [
            {
                group: {
                    x: 68 * cell,
                    y: 15 * cell,
                },
                rect: {
                    id: "1",
                    width: 4 * cell,
                    height: 4 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 4 * cell,
                    height: 6 * cell,
                    opacity: 1
                },
                imageName: "seat-left.png"
            },
            {
                group: {
                    x: 72 * cell,
                    y: 16 * cell,
                },
                rect: {
                    id: "0",
                    width: 2 * cell,
                    height: 6 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 2 * cell,
                    height: 4.6 * cell,
                    opacity: 1
                },
                imageName: "seat-middle.png"
            },
            {
                group: {
                    x: 74 * cell,
                    y: 15 * cell,
                },
                rect: {
                    id: "2",
                    width: 4 * cell,
                    height: 4 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 4 * cell,
                    height: 6 * cell,
                    opacity: 1
                },
                imageName: "seat-right.png"
            },
            {
                group: {
                    x: 68 * cell,
                    y: 23 * cell,
                },
                rect: {
                    id: "3",
                    width: 4 * cell,
                    height: 4 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 4 * cell,
                    height: 6 * cell,
                    opacity: 1
                },
                imageName: "seat-left.png"
            },
            {
                group: {
                    x: 74 * cell,
                    y: 23 * cell,
                },
                rect: {
                    id: "4",
                    width: 4 * cell,
                    height: 4 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 4 * cell,
                    height: 6 * cell,
                    opacity: 1
                },
                imageName: "seat-right.png"
            },
            {
                group: {
                    x: 68 * cell,
                    y: 32 * cell,
                },
                rect: {
                    id: "11",
                    width: 2 * cell,
                    height: 6 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 2 * cell,
                    height: 6 * cell,
                    opacity: 1
                },
                imageName: "seat-3-left.png"
            },
            {
                group: {
                    x: 76 * cell,
                    y: 32 * cell,
                },
                rect: {
                    id: "11",
                    width: 2 * cell,
                    height: 6 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 2 * cell,
                    height: 6 * cell,
                    opacity: 1
                },
                imageName: "seat-3-right.png"
            },
        ],
    },
    dropZones: [
        {
            id: "5",
            // x: 48 * cell,
            // y: 16 * cell,
            x: 74 * cell,
            y: 29 * cell,
            width: 6 * cell,
            height: 12 * cell,               
            fill:  "" ,
            opacity: 0.2
        },
        {
            id: "6",
            // x: 46 * cell,
            // y: 16 * cell,
            x: 72 * cell,
            y: 29 * cell,
            width: 10 * cell,
            height: 3 * cell,               
            fill:  "" ,
            opacity: 0.2
        },
        {
            id: "7",
            // x: 46 * cell,
            // y: 25 * cell,
            x: 72 * cell,
            y: 38 * cell,
            width: 10 * cell,
            height: 3 * cell,               
            fill:  "" ,
            opacity: 0.2
        },
        {
            id: "8",
            // x: 50 * cell,
            // y: 10 * cell,
            x: 76 * cell,
            y: 23 * cell,
            width: 2 * cell,
            height: 18 * cell,               
            fill:  "" ,
            opacity: 0.2
        },
        {
            id: "9",
            // x: 46 * cell,
            // y: 10 * cell,
            x: 72 * cell,
            y: 23 * cell,
            width: 4 * cell,
            height: 18 * cell,               
            fill:  "" ,
            opacity: 0.2
        }
    ],
    slider: {
        x: -sliderSpacing,
        y: 0,
        groupContainer: {},
        group: {
            x: cell * 9,
            y: 27 * cell - (2 * sliderSpacing),
            clipFunc: function(ctx) {
                ctx.beginPath();
                ctx.rect(0, 0, 50 * cell, sliderItemSize * 2 + (2 * sliderSpacing));
                ctx.closePath();
            }
        },
        count: sliderItemCount,
        perMove: sliderItemSize * sliderItemCount,
        itemSize: sliderItemSize,
        spacing: 2 * sliderSpacing
    },
    item: {
        shadow: {
            x: 0,
            y: 0,
            width: 2 * cell,
            height: 2 * cell,
            opacity: 0.6,
            fill: "#ff56566e",
            stroke: "#ff56566e",
            strokeWidth: 3,
            dash: [40, 4],
            visible: false
        },
        text: {
            y: 110,
            x: 0,
            width: 4 * cell,
            align: "center",
            fontSize: 16,
            fontWeight: "bold"
        }
    },
    // intro: {
    //     group: {x: 0, y: 3 * cell, visible: false},
    //     items: [
    //         {
    //             group: {x: 0 , y: 0, visible: false},
    //             imageName: "intro1.png",
    //             image: {
    //                 x: 0,
    //                 y: 0,
    //                 width: 210,
    //                 image: null
    //             }
    //         },
    //         {
    //             group: {x: 6 * cell , y: 0, visible: false},
    //             imageName: "intro2.png",
    //             image: {
    //                 x: 0,
    //                 y: 0,
    //                 width: 210,
    //                 image: null
    //             }
    //         },
    //         {
    //             group: {x: 12.8 * cell , y: 0, visible: false},
    //             imageName: "intro3.png",
    //             image: {
    //                 x: 0,
    //                 y: 0,
    //                 width: 210,
    //                 image: null
    //             }
    //         }
    //     ]
    // }
}