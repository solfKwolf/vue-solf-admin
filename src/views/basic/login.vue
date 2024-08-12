<script setup lang="ts">
import { ref } from "vue"
import loginForm from "./loginForm.vue"

type LayoutType = "left" | "right" | "center"

const layoutType = ref<LayoutType>("right")
</script>

<template>
  <div
    class="flex min-h-full select-none overflow-x-hidden"
    :class="{
      'flex-row-reverse': layoutType === 'right'
    }"
  >
    <login-form v-if="['left', 'right'].includes(layoutType)" class="min-h-full w-2/5" />
    <div v-if="['left', 'right'].includes(layoutType)" class=" relative hidden w-0 flex-1 lg:block">
      <div class="bg-authentication absolute inset-0 h-full w-full">
        Background
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
