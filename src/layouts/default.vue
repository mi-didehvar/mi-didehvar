<script setup>
import { useRoute } from "vue-router";
import data from "../data/data";
const route = useRoute();
</script>

<template>
  <div class="relative flex flex-col justify-center items-center">
  <header class="w-full flex justify-between top-0 left-0 right-0 py-2 sticky bg-#ffffff z-2">
    <nav class="w-full h-12 px-2 flex items-center text-2xl">
      <ul class="flex justify-start w-full">
        <li
          v-for="(item, index) in data.menu"
          :key="index"
          class="mx-4 list-none"
        >
          <router-link :to="item.route" class="text-sm font-600 decoration-none"
          :class="route.path === item.route ? 'text-blue' : 'text-black'"
          >{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
    <div
      class="w-full h-12 pr-16 flex items-center font-800 text-2xl justify-end"
    >
      MI
    </div>
  </header>
  <main class="max-w-60% h-100% py-2 px-4">
    <slot />
  </main>
</div>
</template>

<style lang="scss" scoped>
nav {
  ul {
    li {
      cursor: pointer;
    }
  }
}
</style>