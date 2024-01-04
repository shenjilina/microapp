<!--
 * @Author: shenjilin-home
 * @Date: 2023-12-26 21:29:08
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-04 22:49:39
 * @Description:
-->
<script setup lang="ts">
// packages/button/src/button.vue
import { hello } from '@microappui/shared';

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
    class="openx-button"
    @click="clickHandler"
  >
    <slot />123abc
  </button>
</template>
<style lang="scss">
.testClass {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background-color: #e9ecef;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
