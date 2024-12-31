<template>
  <v-stage ref="stage" :config="stageConfig">
    <v-layer>
      <!-- Target Area -->
      <v-rect ref="rect" :config="targetConfig" />
      
      <!-- Draggable Item -->
      <v-circle
        :config="itemConfig"
        @dragmove="handleDragMove"
        @dragend="handleDragEnd"
      />
    </v-layer>
  </v-stage>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    let rect = ref(null)

    let stage = ref(null)

    let stageConfig = ref({
        width: 500,
        height: 500,
        fill: 'lightblue'
    })

    let targetConfig = ref({
        x: 300,
        y: 150,
        width: 100,
        height: 100,
        fill: "lightgreen",
        stroke: "black",
        strokeWidth: 2,
    })

    let itemConfig = ref({
        x: 50,
        y: 50,
        radius: 25,
        fill: "blue",
        draggable: true,
    })

    let originalPosition = ref({ x: 50, y: 50 })

    function handleDragMove(event) {
      // Optionally, you can handle live visual feedback on dragging
      const item = event.target;
      const itemBox = item.getClientRect();
      const targetBox = rect.value.getNode().getClientRect()

      if (!isColliding(itemBox, targetBox)) {
        targetConfig.value.fill = 'red'
      } else {
        targetConfig.value.fill = 'lightgreen'
      }
    }
    
    function handleDragEnd(event) {
      const item = event.target;
      const itemBox = item.getClientRect();
      const targetBox = rect.value.getNode().getClientRect()

      if (isColliding(itemBox, targetBox)) {
        console.log("Dropped inside target!");
      } else {
          console.log("Dropped outside target. Resetting position.");
          
        // Snap back to the original position
        item.to({
          x: originalPosition.value.x,
          y: originalPosition.value.y,
          duration: 0.2, // Add a smooth animation
        });
        targetConfig.value.fill = 'lightgreen'
      }
    }

    function isColliding(itemBox, targetBox) {
      return (
        itemBox.x < targetBox.x - itemBox.width + targetBox.width &&
        itemBox.x - itemBox.width + itemBox.width > targetBox.x &&
        itemBox.y < targetBox.y - itemBox.height + targetBox.height &&
        itemBox.y - itemBox.height + itemBox.height > targetBox.y
      );
    }

    function scale() {
      const container = document.querySelector('.container')
      const containerWidth = container.offsetWidth
      const containerHeight = container.offsetHeight
      let _stage = stage.value.getNode();

    // Calculate scale
      const scaleX = containerWidth / 500;
      const scaleY = containerHeight / 500;
      const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio
      return scale;
    }

    function stageScale() {
        let _stage = stage.value.getNode();
        _stage.width(500 * scale());
        _stage.height(500 * scale());
        _stage.scale({ x: scale(), y: scale() });
        _stage.batchDraw(); // Redraw stage
    }

    window.addEventListener('resize', stageScale);

    onMounted( () => {
        console.log('1')
        stageScale()

    })

    document.addEventListener("readystatechange", (event) => {
        console.log(`readystate: ${document.readyState}\n`)
    });
</script>


<style>
    canvas {
        background-color: azure !important;
    }
</style>