<!--
 * @Author: shenjilin-home
 * @Date: 2023-12-26 21:29:08
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2024-01-03 22:58:47
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
  <button class="openx-button" @click="clickHandler">
    <slot></slot>123abc
  </button>
</template>