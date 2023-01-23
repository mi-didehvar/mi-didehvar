<script lang="ts" setup>
import layout from '../layouts/default.vue';
</script>
<template>
    <layout>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <img
      src="https://www.pngmart.com/files/4/Coder-Transparent-PNG.png"
      class="w-80 h-80"
    />

    <span class="text-center mt-8 leading-7">
      Hello. <br />
      I'm Iman Didehvar and this is my website.
    </span>
  </div>
</layout>
</template>

<route lang="yaml">
    meta:
      layout: default
</route>

<style lang="scss" scoped>
</style>