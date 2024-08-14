<template>
  <div>
    <el-form :model="form" label-width="auto">
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" />
      </el-form-item>
      <el-button class="w-full" type="primary" :loading="loading" @click="submit">登录</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router"

const router = useRouter()
const loading = ref(false)
const form = reactive({
  username: "",
  password: "",
});

const submit = () => {
  console.log("submit");
  router.push("/test");
}
</script>
