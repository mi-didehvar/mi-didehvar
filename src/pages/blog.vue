<script lang="ts" setup>
import layout from "../layouts/default.vue";
</script>
<template>
  <layout>
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full columns-1 mx-4">
        <div class="w-auto rounded-4 border-1 border-gray mb-2 flex flex-col items-start cursor-pointer" v-for="index in 19" :key="index">
        <img src="https://cdnfa.com/fabrickala/6b3a/files/4527011.png" class="rounded-t-4 h-512px w-full bg-light-blue"/>
        <div class="mx-2">
          <h1 class="m-0 p-2 font-500 text-4">How am I?</h1>
          <p class="py-0.5 px-2 text-left overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse consequatur! Error recusandae eveniet repellendus soluta maiores quasi magni autem earum deserunt. Asperiores eius nulla quasi quae natus exercitationem consequuntur?
          Rem similique ex quos iste asperiores recusandae sint ea aut iure maiores error, delectus aperiam praesentium. Excepturi molestias veritatis omnis modi esse? Inventore, excepturi! Excepturi nam nesciunt deleniti laborum nihil.
          Id quis repudiandae laborum autem sed in ipsa repellendus accusamus ut inventore dicta aliquam eveniet ad qui nam, officia modi velit natus dolorem exercitationem. Ad cum pariatur corporis illum quis.</p>
          <div class="w-full flex justify-between">
            <div class="flex p-2">
            <div class="flex items-center mr-2"><div class="i-mdi-heart-outline text-red w-6.25 h-6.25"></div><span class="font-300 text-3.5 mx-2">32</span></div>
            <div class="flex items-center mx-2"><div class="i-mdi-clock-outline text-red w-6.25 h-6.25"></div><span class="font-300 text-3.5 mx-2">02:00</span></div>
            </div>
            <div class="px-4 flex items-center">
              <div class="i-mdi-linkedin text-blue w-6.25 h-6.25"></div>
              <div class="i-mdi-link w-6.25 h-6.25 mx-2.5"></div>
              <div class="i-mdi-twitter text-blue w-6.25 h-6.25"></div>
              <div class="i-mdi-instagram text-red w-6.25 h-6.25 mx-2.5"></div>
              <div class="i-mdi-telegram text-blue w-6.25 h-6.25"></div>
              <div class="i-mdi-whatsapp text-green w-6.25 h-6.25 mx-2.5"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<route lang="yaml">
    meta:
      layout: default
</route>

<style lang="scss" scoped>
</style>