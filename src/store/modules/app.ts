import { defineStore } from 'pinia'
import { store } from '../index'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      userInfo: 'userInfo', // 登录信息存储字段-建议每个项目换一个字段，避免与其他项目冲突
    }
  },
  getters: {

  },
  actions: {

  },
})
