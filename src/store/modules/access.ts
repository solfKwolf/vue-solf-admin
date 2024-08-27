import { acceptHMRUpdate, defineStore } from 'pinia';

type AccessToken = null | string;

interface AccessState {
  /**
   * 登录 accessToken
   */
  accessToken: AccessToken;
}


export const useAccessStore = defineStore('core-access', {
  state: (): AccessState => ({
    accessToken: null,
  }),
  actions: {
    setAccessToken(token: AccessToken) {
      this.accessToken = token;
    },
  }
})
