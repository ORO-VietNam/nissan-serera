const windowWidth = window.innerWidth
const cell = 40;
const baseWidth = 768;
const baseHeight = 1024;
const sliderItemCount = 7
const sliderItemSize = (windowWidth - cell) / sliderItemCount;
const sliderSpacing = 10;
const padding = 4;
const sliderX = cell / 2
const sliderY = cell * 2

export default  {
    cell: cell,
    baseWidth: baseWidth,
    baseHeight: baseHeight,
    padding: padding,
    group: {x: 0, y: 0},
    background: {
        x: 0,
        y: 0,
        width: baseWidth,
        height: baseHeight ,
        rotate: -180,
        fillLinearGradientStartPoint: { x: 0, y: 0 },
        fillLinearGradientEndPoint: { x: 0, y: baseHeight },
        fillLinearGradientColorStops: [0, 'white', 0.65, "#f2f2f2", 1, '#e2e2e2'],
    },
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
            stroke: '#ccc',
            strokeWidth: 1,
            opacity: .8
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
            stroke: '#ccc',
            strokeWidth: 1,
            opacity: .8
          })
        }
        
        return lines
    },
    head: {
        background: { 
            x: 0, y: 0, width: baseWidth, height: 2 * cell + sliderItemSize * 2 + sliderSpacing , 
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
                cornerRadius: 2 * cell 
            },
            activeBackground: {
                x: 0 * cell + 2,
                y: 2,
                width: 3 * cell - 4,
                height: 1 * cell - 4,
                fill: '#15668E',
                cornerRadius: cell
            },
            all: {
                group: {x: 0, y: 0},
                rect: {width: 3 * cell, height: 1 * cell},
                text: {
                    y: 0,
                    width: 3 * cell,
                    text: 'ดูทั้งหมด',
                    fontSize: 16,
                    lineHeight: cell / 16,
                    align: 'center',
                    fill: 'white'
                }
            },
            people: {
                group: {x: 3 * cell, y: 0},
                rect: {width: 3 * cell, height: 1 * cell},
                path: {
                    x: 20,
                    y: 9,
                    fill: '#15668E',
                    data: "M4.33761 3.30657C5.09918 3.30657 5.71667 2.68592 5.71667 1.92047C5.71667 1.15501 5.09918 0.534363 4.33761 0.534363C3.57604 0.534363 2.95855 1.15501 2.95855 1.92047C2.95855 2.68592 3.57604 3.30657 4.33761 3.30657ZM7.20694 4.99028L8.12729 9.7175H14.6936C14.6428 9.57706 14.6153 9.42406 14.6153 9.26397V5.26878C14.6153 4.58368 15.1173 4.02829 15.7363 4.02829H19.769C20.3881 4.02829 20.89 4.58368 20.89 5.26878V9.26397C20.89 9.94667 20.3841 10.5005 19.7049 10.5005L19.1476 17.4517H16.353L15.7941 10.5005C15.7586 10.5005 15.7236 10.499 15.6892 10.496C15.6619 10.502 15.6336 10.5052 15.6046 10.5052H12.6585V13.3518L12.0007 17.4656H10.0627L9.40484 13.3526L9.41088 10.5052H6.91094L7.19824 12.0067H5.80968L5.42098 17.4517H3.25739L2.86869 12.0067H1.48013L1.91317 9.74775H1.80788C1.16031 9.74775 0.672647 9.15495 0.795354 8.51521L1.47063 4.99028C1.57196 4.44125 2.01133 4.02829 2.53778 4.02829H6.1398C6.66625 4.02829 7.10561 4.44125 7.20694 4.99028ZM16.3243 1.92047C16.3243 2.68592 16.9418 3.30657 17.7034 3.30657C18.465 3.30657 19.0824 2.68592 19.0824 1.92047C19.0824 1.15501 18.465 0.534363 17.7034 0.534363C16.9418 0.534363 16.3243 1.15501 16.3243 1.92047ZM10.8369 9.03635C11.4877 9.03635 12.0157 8.50562 12.0157 7.85156C12.0157 7.1975 11.4877 6.66677 10.8369 6.66677C10.1862 6.66677 9.65815 7.1975 9.65815 7.85156C9.65815 8.50562 10.1862 9.03635 10.8369 9.03635Z M4.33761 3.30657C5.09918 3.30657 5.71667 2.68592 5.71667 1.92047C5.71667 1.15501 5.09918 0.534363 4.33761 0.534363C3.57604 0.534363 2.95855 1.15501 2.95855 1.92047C2.95855 2.68592 3.57604 3.30657 4.33761 3.30657ZM7.20694 4.99028L8.12729 9.7175H14.6936C14.6428 9.57706 14.6153 9.42406 14.6153 9.26397V5.26878C14.6153 4.58368 15.1173 4.02829 15.7363 4.02829H19.769C20.3881 4.02829 20.89 4.58368 20.89 5.26878V9.26397C20.89 9.94667 20.3841 10.5005 19.7049 10.5005L19.1476 17.4517H16.353L15.7941 10.5005C15.7586 10.5005 15.7236 10.499 15.6892 10.496C15.6619 10.502 15.6336 10.5052 15.6046 10.5052H12.6585V13.3518L12.0007 17.4656H10.0627L9.40484 13.3526L9.41088 10.5052H6.91094L7.19824 12.0067H5.80968L5.42098 17.4517H3.25739L2.86869 12.0067H1.48013L1.91317 9.74775H1.80788C1.16031 9.74775 0.672647 9.15495 0.795354 8.51521L1.47063 4.99028C1.57196 4.44125 2.01133 4.02829 2.53778 4.02829H6.1398C6.66625 4.02829 7.10561 4.44125 7.20694 4.99028ZM16.3243 1.92047C16.3243 2.68592 16.9418 3.30657 17.7034 3.30657C18.465 3.30657 19.0824 2.68592 19.0824 1.92047C19.0824 1.15501 18.465 0.534363 17.7034 0.534363C16.9418 0.534363 16.3243 1.15501 16.3243 1.92047ZM10.8369 9.03635C11.4877 9.03635 12.0157 8.50562 12.0157 7.85156C12.0157 7.1975 11.4877 6.66677 10.8369 6.66677C10.1862 6.66677 9.65815 7.1975 9.65815 7.85156C9.65815 8.50562 10.1862 9.03635 10.8369 9.03635Z"
                },
                text: {
                    y: 0,
                    x: 45,
                    text: 'เลือกคน',
                    fontSize: 16,
                    lineHeight: cell / 16,
                    align: 'center',
                    fill: 'black'
                }
            },
            items: {
                group: {x: 6 * cell, y: 0},
                rect: {width: 3 * cell, height: 1 * cell},
                path: {
                    x: 20,
                    y: 10,
                    fill: '#15668E',
                    data: "M9.1982 2.34775H10V1.47999C10 0.774214 9.42903 0.200317 8.72684 0.200317H5.74965C5.04746 0.200317 4.47648 0.774214 4.47648 1.47999V2.34775H5.27828V1.47999C5.27828 1.21868 5.48967 1.00622 5.74965 1.00622H8.72684C8.98682 1.00622 9.1982 1.21868 9.1982 1.47999V2.34775ZM12.5458 3.6462H1.56514C0.701785 3.6462 0.0012207 4.35034 0.0012207 5.21811V12.6193C0.0012207 13.4879 0.701785 14.1913 1.56514 14.1913H12.5458C13.4099 14.1913 14.1097 13.4871 14.1097 12.6193V5.21811C14.1097 4.34953 13.4091 3.6462 12.5458 3.6462ZM4.91084 12.4549C4.91084 12.6031 4.79098 12.7235 4.64357 12.7235C4.49617 12.7235 4.37631 12.6031 4.37631 12.4549V5.38254C4.37631 5.23439 4.49617 5.11391 4.64357 5.11391C4.79098 5.11391 4.91084 5.23439 4.91084 5.38254V12.4549ZM9.73542 12.4549C9.73542 12.6031 9.61556 12.7235 9.46816 12.7235C9.32075 12.7235 9.20089 12.6031 9.20089 12.4549V5.38254C9.20089 5.23439 9.32075 5.11391 9.46816 5.11391C9.61556 5.11391 9.73542 5.23439 9.73542 5.38254V12.4549ZM3.63453 15.7997C4.29217 15.7997 4.82509 15.2641 4.82509 14.6031H2.44317C2.44317 15.2641 2.97689 15.7997 3.63453 15.7997ZM10.791 15.7997C11.4486 15.7997 11.9816 15.2641 11.9816 14.6031H9.59964C9.59964 15.2641 10.1334 15.7997 10.791 15.7997Z M9.1982 2.34775H10V1.47999C10 0.774214 9.42903 0.200317 8.72684 0.200317H5.74965C5.04746 0.200317 4.47648 0.774214 4.47648 1.47999V2.34775H5.27828V1.47999C5.27828 1.21868 5.48967 1.00622 5.74965 1.00622H8.72684C8.98682 1.00622 9.1982 1.21868 9.1982 1.47999V2.34775ZM12.5458 3.6462H1.56514C0.701785 3.6462 0.0012207 4.35034 0.0012207 5.21811V12.6193C0.0012207 13.4879 0.701785 14.1913 1.56514 14.1913H12.5458C13.4099 14.1913 14.1097 13.4871 14.1097 12.6193V5.21811C14.1097 4.34953 13.4091 3.6462 12.5458 3.6462ZM4.91084 12.4549C4.91084 12.6031 4.79098 12.7235 4.64357 12.7235C4.49617 12.7235 4.37631 12.6031 4.37631 12.4549V5.38254C4.37631 5.23439 4.49617 5.11391 4.64357 5.11391C4.79098 5.11391 4.91084 5.23439 4.91084 5.38254V12.4549ZM9.73542 12.4549C9.73542 12.6031 9.61556 12.7235 9.46816 12.7235C9.32075 12.7235 9.20089 12.6031 9.20089 12.4549V5.38254C9.20089 5.23439 9.32075 5.11391 9.46816 5.11391C9.61556 5.11391 9.73542 5.23439 9.73542 5.38254V12.4549ZM3.63453 15.7997C4.29217 15.7997 4.82509 15.2641 4.82509 14.6031H2.44317C2.44317 15.2641 2.97689 15.7997 3.63453 15.7997ZM10.791 15.7997C11.4486 15.7997 11.9816 15.2641 11.9816 14.6031H9.59964C9.59964 15.2641 10.1334 15.7997 10.791 15.7997Z"
                },
                text: {
                    x: 40,
                    y: 0,
                    text: 'เลือกของ',
                    fontSize: 12,
                    lineHeight: cell / 12,
                    align: 'center',
                    fill: 'black'
                }
            },
        },
        buttonPrev: {
            group: {x: baseWidth - 2 * cell  - 5, y: cell },
            circle: { radius: cell / 2 , fill: '#e2e2e2'},
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
            group: {x: baseWidth - cell, y: cell},
            circle: { radius: cell / 2 , fill: '#B0D0E0'},
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
        group: {x: 0, y: 23 * cell},
        background: {x: 0, y: 0, width: baseWidth, height: 2 * cell, fill: '#124057', },
        selectLayout: {
            group: {x: cell / 2, y: cell / 2 },
            circle: { x: cell / 2, y: cell / 2, radius: cell / 2, stroke: 'white', strokeWidth: 2 },
            path: {
                x: 13.5,
                y: 13.5,
                data: 'M7.78788 13H5.21212V7.78788H0V5.21212H5.21212V0H7.78788V5.21212H13V7.78788H7.78788V13Z',
                fill: 'white',
                stroke: 'white',
            },
            text: {
                x: cell + 10,
                y: 0,
                text: 'ดูรูปแบบที่นั่งทั้ง 13 แบบเพิ่มเติม',
                fill: 'white',
                fontSize: 16,
                lineHeight: cell / 16
            },
        },
        resetLayout: {
            group: {
                x: baseWidth - 25 * cell,
                y: cell / 2
            },
            circle: { x: cell / 2, y: cell / 2, radius: cell / 2, stroke: 'white', strokeWidth: 2 },
            path: {
                data: 'M22 14.2556C22 20.0546 17.299 24.7556 11.5 24.7556C5.70101 24.7556 1 20.0546 1 14.2556C1 8.45663 5.70101 3.75562 11.5 3.75562C14.2424 3.75562 16.7393 4.80697 18.6095 6.52862 M17.5 1.24438L19.1471 7.3915L13 9.03861',
                fill: 'transparent',
                stroke: 'white',
                scaleX: 1,
                scaleY: 1,
            },
            text: {
                x: cell,
                y: 0,
                text: 'รีเซ็ต',
                fill: 'white',
                fontSize: 16,
                lineHeight: cell / 16
            },
        },
    },
    car: {
        group: {x: 0, y: 0},
        shadow: {
            x: 9 * cell,
            y: 2 * cell,
            width: 7 * cell,
            height: 20 * cell,
            fill: 'red',
            cornerRadius: cell,
            shadowColor: '#124057',
            shadowBlur: 80,
            shadowOffset: { x: 0, y: 0 },
            shadowOpacity: 1,
        },
        background: {
            x: 7 * cell,
            y: 9.5 * cell,
            width: 11 * cell,
            height: 12 * cell,
            fill: 'white',
            cornerRadius: cell,
            blurRadius: 20,
            // shadowBlur: 44.1,
            opacity: 0.7,
        },
        groupItem: {x: 3 * cell},
        body: {
            image: null,
            x: cell * 5,
            y: 1.5 * cell,
            width: 9 * cell,
            height: 9 * cell / 0.43,
            opacity: 1
        },
        volang: {
            image: null,
            x: 9.15 * cell,
            y: 6.4 * cell,
            width: 6.65 * cell,
            opacity: 1,
        },
        seats: [
            {
                group: {
                    x: 7 * cell,
                    y: 8 * cell,
                },
                rect: {
                    id: "1",
                    width: 2 * cell,
                    height: 2 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 2 * cell,
                    height: 3 * cell,
                    opacity: 1
                },
                imageName: "seat-left.png"
            },
            {
                group: {
                    x: 9 * cell,
                    y: 8.5 * cell,
                },
                rect: {
                    id: "0",
                    width: 1 * cell,
                    height: 3 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 1 * cell,
                    height: 2.3 * cell,
                    opacity: 1
                },
                imageName: "seat-middle.png"
            },
            {
                group: {
                    x: 10 * cell,
                    y: 8 * cell,
                },
                rect: {
                    id: "2",
                    width: 2 * cell,
                    height: 2 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 2 * cell,
                    height: 3 * cell,
                    opacity: 1
                },
                imageName: "seat-right.png"
            },
            {
                group: {
                    x: 7 * cell,
                    y: 12 * cell,
                },
                rect: {
                    id: "3",
                    width: 2 * cell,
                    height: 2 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 2 * cell,
                    height: 3 * cell,
                    opacity: 1
                },
                imageName: "seat-left.png"
            },
            {
                group: {
                    x: 10 * cell,
                    y: 12 * cell,
                },
                rect: {
                    id: "4",
                    width: 2 * cell,
                    height: 2 * cell,
                    fill: ''
                },
                image: {
                    image: null,
                    width: 2 * cell,
                    height: 3 * cell,
                    opacity: 1
                },
                imageName: "seat-right.png"
            },
        ],
    },
    dropZones: [
        {
            id: '5',
            x: 10 * cell,
            y: 19 * cell,
            width: 5 * cell,
            height: 2 * cell,               
            fill:  'red' ,
            opacity: 0.2
        },
        {
            id: '5',
            x: 11 * cell,
            y: 15 * cell,
            width: 3 * cell,
            height: 6 * cell,               
            fill:  'green' ,
            opacity: 0.2
        },
    ],
    slider: {
        group: {x: cell / 2, y: sliderY},
        count: sliderItemCount,
        perMove: sliderItemSize * sliderItemCount,
        itemSize: sliderItemSize,
        spacing: sliderSpacing
    },
    item: {
        shadow: {
            x: 0,
            y: 0,
            width: cell,
            height: cell,
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
    intro: {
        group: {x: 2 * cell, y: 7 * cell},
        items: [
            {
                group: {x: cell / 3 , y: cell * 1.5},
                imageName: "intro1.png",
                image: {
                    x: 0,
                    y: 0,
                    width: 105,
                    height: 114,
                    image: null
                },
            },
            {
                group: {x: cell / 3 , y: cell * 5.5},
                imageName: "intro2.png",
                image: {
                    x: 0,
                    y: 0,
                    width: 105,
                    height: 114,
                    image: null
                },
            },
            {
                group: {x: cell / 3 , y: cell * 9.5},
                imageName: "intro3.png",
                image: {
                    x: 0,
                    y: 0,
                    width: 105,
                    height: 114,
                    image: null
                },
            },
        ]
    }
}