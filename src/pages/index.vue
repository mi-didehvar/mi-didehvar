<script setup lang="ts">
import data from '../data/data'
function open() {
  window.open("../assets/avatar.jpeg");
}
</script>
<template>
  <div class="c20 doc-content">
    <div>
      <p class="c11">
        <span
          style="
            overflow: hidden;
            display: inline-block;
            margin: 0px 0px;
            border: 0px solid #000000;
            transform: rotate(0rad) translateZ(0px);
            -webkit-transform: rotate(0rad) translateZ(0px);
            width: 624px;
            height: 6.67px;
          "
        >
          <div
            style="
              background-color: #00ab44;
              width: 624px;
              height: 6.67px;
              margin-left: 0px;
              margin-top: 0px;
              transform: rotate(0rad) translateZ(0px);
              -webkit-transform: rotate(0rad) translateZ(0px);
            "
            title="horizontal line"
          ></div>
        </span>
      </p>
    </div>
    <p class="c26 title" id="h.5x0d5h95i329">
      <div class="flex items-center">
        <img src="../assets/avatar.jpeg" @click="open" style="border-radius: 50%; width:48px; height: 48px"/>
        <span class="ml-4 c10 text-base">Mohammad Didehvar</span>
      </div>
      <button onclick="window.print()" class="print-button">
        <div class="i-mdi-printer-outline" />
      </button>
    </p>
    <p class="c19 subtitle mt-2" id="h.sbziogryzzql">
      <span>Frontend Developer</span>
    </p>
    <a class="flex items-center cursor-pointer decoration-none" href="tel:+989913378001">
      <div class="i-mdi-cellphone text-sm text-dark print:hidden" />
      <span class="c12 ml-2 print:ml-0">+98 </span>
      <span class="c12 c23 ml-1">(</span>
      <span class="c12">991</span>
      <span class="c23 c12">) </span>
      <span class="c12 ml-1">337</span>
      <span class="c23 c12 mx-1">-</span>
      <span class="c12">8001</span>
    </a>
    <a class="flex items-center cursor-pointer decoration-none text-[#ffffff] print:visible print:text-dark" href="mailto:mi.didehvar@gmail.com">
        mi.didehvar@gmail.com
    </a>

    <div class="c19 flex print:hidden my-3">
      <a target="_blank" class="c28 link-open" href="https://mi-didehvar.github.io/mi-didehvar"
        ><div class="i-mdi-web text-blue-800"
      /></a>
      <a target="_blank" class="c28 link-open" href="https://github.com/mi-didehvar/"
        ><div class="i-mdi-github"
      /></a>
      <a target="_blank" class="c28 link-open" href="mailto:mi.didehvar@gmail.com"
        ><div class="i-mdi-gmail text-red-400"
      /></a>
      <a target="_blank" class="c28 link-open" href="https://www.linkedin.com/in/mohammad-didehvar-25aa6b250/"
        ><div class="i-mdi-linkedin text-blue-500"
      /></a>
      <a target="_blank" class="c28 link-open" href="https://instagram.com/iman_didehvar_official"
        ><div class="i-mdi-instagram text-purple-500"
      /></a>
      <a target="_blank" class="c28 link-open" href="#"
        ><div class="i-mdi-telegram text-blue-600"
      /></a>
      <a target="_blank" class="c28 link-open" href="https://wa.me/+989913378001"
        ><div class="i-mdi-whatsapp text-green-600"
      /></a>
    </div>
    <p class="c19 c25"><span class="c12 c15"></span></p>
    <p class="c19">
      <span class="c15 c12"
        >I&#39;m a passionate, fast learner frontend developer with +5 years of
        experience in website and applications development using Javascript.
        I&rsquo;m not a Senior developer but good in team-working, solutions
        finding and challenge resolving</span
      >
    </p>
    <h1 class="c14" id="h.inx73jfg7qti"><span>SKILLS</span></h1>
    <p class="c27 flex flex-wrap">
      <span
        class="
          sm:px-4
          sm:py-1
          sm:mr-1
          sm:mb-1
          print:m-0
          print:p-0
          rounded-full
          text-light-500
          bg-blue-800
          font-semibold
          text-sm
          flex
          align-center
          w-fit
          cursor-pointer
          active:bg-gray-300
          transition
          duration-300
          ease
          items-center
          justify-center
        "
        v-for="(skill, index) in data.skills"
        :key="index"
      >
        <div :class="`i-mdi-${skill.icon} print:hidden`" />
        {{ skill.name }}
      </span>
    </p>
    <h1 class="c17" id="h.5sh58lh512k2"><span class="c7">EXPERIENCE</span></h1>
    <div v-for="(experience, index) in data.experinces" :key="index">
      <h2 class="c5" id="h.mu43qcboozqe">
        <a :href="experience.url" target="_blank" class="text-dark decoration-none">{{ experience.company }}</a
        ><span class="c18">,</span><span>&nbsp;{{ experience.location }}</span
        ><span class="c9">&nbsp;- </span
        ><span class="c24 c12">{{ experience.role }}</span>
      </h2>
      <p class="c11">
        <span class="c12 c13">{{ experience.from.month }}</span
        ><span class="c1">&nbsp;</span
        ><span class="c12 c13">{{ experience.from.year }}</span
        ><span class="c1 c16"
          >- {{ experience.to.month }}&nbsp;{{ experience.to.year }}</span
        >
      </p>
      <ul class="c4 lst-kix_q43nwmkvrt8-0 start">
        <li
          class="c0 li-bullet-0"
          v-for="(achivement, achivement_index) in experience.achivments"
          :key="achivement_index"
        >
          <span class="c3">{{ achivement }}</span>
        </li>
      </ul>
    </div>

    <h1 class="c17" id="h.pwnp1k6vsbh1"><span class="c2">EDUCATION</span></h1>
    <div v-for="(item, index) in data.educations" :key="index">
        <h2 class="c5" id="h.jpv9v4b642w5">
      <span>{{item.school}}</span><span class="c18">, </span
      ><span>{{item.location}}</span><span class="c18">&nbsp;</span><span class="c9">- </span
      ><span class="c24 c12">{{item.degree}}</span>
    </h2>
    <p class="c11">
      <span class="c12 c13">{{item.from.month}}</span><span class="c1">&nbsp;</span
      ><span class="c12 c13">{{item.from.year}}</span><span class="c1">&nbsp;- </span
      ><span class="c12 c13">{{item.to.month}}</span><span class="c1">&nbsp;</span
      ><span class="c12 c13">{{item.to.year}}</span>
    </p>
    <p class="c27"><span>{{item.achivements}}</span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>