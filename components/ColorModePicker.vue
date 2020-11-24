<template>
  <div class="colorPicker">
    <div class="icons">
      <span
        v-for="color of colors"
        :key="color.name"
        class="aroundIcon"
        @click="$colorMode.preference = color.name"
      >
        <b-icon :icon="`${color.icon}`" scale="1.5" :class="getClasses(color)"></b-icon>
      </span>
    </div>
    <div>
      Color mode: <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'">
        (<i>{{ $colorMode.value }}</i> mode detected)
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        { name: 'system', icon: 'tv' },
        { name: 'light', icon: 'brightness-high' },
        { name: 'dark', icon: 'brightness-alt-low' },
      ],
    }
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.colorPicker {
  text-align: center;
}
.icons {
  display: inline-block;
  padding: 10px;

  .aroundIcon {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 10px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 5px;
    border-radius: 5px;
    transition: all 350ms ease-in-out;
  }
  .aroundIcon:hover {
    top: -3px;
  }
  .aroundIcon.preferred {
    border-color: var(--color-primary);
    top: -3px;
  }
  .aroundIcon.selected {
    color: var(--color-primary);
  }
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
</style>
