<!--
 * @Author: shenjilin-home
 * @Date: 2024-01-13 15:31:51
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-13 16:02:33
 * @Description:
-->
<!--
 * @Author: shenjilin-home
 * @Date: 2023-12-26 21:29:08
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-13 15:41:03
 * @Description:
-->
<script setup lang="ts">
// packages/button/src/button.vue
import { hello } from '@stoneui/shared';

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: 'World',
});

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button
    class="openx-button test-class"
    @click="clickHandler"
  >
    <slot />123abc
  </button>
</template>
<style lang="scss" scoped></style>
