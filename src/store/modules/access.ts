import { acceptHMRUpdate, defineStore } from 'pinia';

export const useAccessStore = defineStore('core-access', {
  state: () => ({
    accessToken: null,
  })
})
