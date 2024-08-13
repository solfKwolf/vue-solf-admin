<script setup lang="ts">
import { ref } from "vue"
import AuthenticationFormView from "./AuthenticationFormView.vue"

type LayoutType = "left" | "right" | "center"

const layoutType = ref<LayoutType>("right")

defineOptions({
  name: "auth"
})
</script>

<template>
  <div
    class="flex min-h-full select-none overflow-x-hidden"
    :class="{
      'flex-row-reverse': layoutType === 'right'
    }"
  >
    <authentication-form-view v-if="['left', 'right'].includes(layoutType)" class="min-h-full w-2/5" />
    <div v-if="['left', 'right'].includes(layoutType)" class=" relative hidden w-0 flex-1 lg:block">
      <div class="bg-authentication absolute inset-0 h-full w-full">
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
