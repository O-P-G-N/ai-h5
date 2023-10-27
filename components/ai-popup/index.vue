<template>
  <view :style="{ '--duration': `${duration / 1000}s` }">
    <template v-if="viewObject.show">
      <view
        class="popMaskView"
        :style="{ 'z-index': zIndex }"
        @touchmove.stop="() => {}"
      ></view>
      <view
        :style="{ 'z-index': zIndex + 10 }"
        class="pupMainView"
        :class="{
          topView: mode == 'top',
          bottomView: mode == 'bottom',
          leftView: mode == 'left',
          rightView: mode == 'right',
          centerView: mode == 'center',
          topBottomAm: (mode == 'top' || mode == 'bottom') && viewObject.am,
          leftRightAm: (mode == 'left' || mode == 'right') && viewObject.am,
          centerAm: mode == 'center' && viewObject.am
        }"
      >
        <slot></slot>
      </view>
    </template>
  </view>
</template>
<script>
//  this.$emit('close') // 获取关闭
//  this.$emit('open') // 获取开启
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // top / right / bottom / center/ left
    mode: {
      type: String,
      default: 'center'
    },
    zIndex: {
      type: Number,
      default: 99999
    },
    duration: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      viewObject: {
        cliskShow: false, //点击切换的是这个
        show: false,
        am: false
      }
    }
  },
  watch: {
    value: {
      handler(value) {
        this.viewObject.cliskShow = value
      },
      deep: true,
      immediate: true
    },
    'viewObject.cliskShow': {
      handler(value) {
        if (value) {
          if (!this.viewObject.show) {
            this.viewObject.show = true
            setTimeout(() => {
              this.$emit('input', true)
              this.viewObject.am = true
              this.$emit('open', true)
            }, 10)
          }
        } else {
          this.viewObject.am = false
          setTimeout(() => {
            this.$emit('input', false)
            this.viewObject.show = false
            this.$emit('close', true)
          }, this.duration)
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.popMaskView {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.pupMainView {
  position: fixed;
  transition: transform var(--duration);
}
.topView {
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
}
.bottomView {
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
}
.topBottomAm {
  transform: translate(-50%, 0);
}
.leftView {
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
}
.rightView {
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
}
.leftRightAm {
  transform: translate(0, -50%);
}
.centerView {
  transition: all var(--duration);
  top: 50%;
  left: 50%;
  transform: scale(0) translate(-50%, -50%);
  transform-origin: 0 0;
  opacity: 0;
  &.centerAm {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
}
</style>
