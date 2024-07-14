import { defineStore } from "pinia";
import { api } from "../api";
import { User } from "../model/user";

export const useUserStore = defineStore('user', {
  state: () => ({
      user: null as User | null,
      isLoggedIn: false,
  }),

  actions: {
    login(user: User) {
      console.log('메모리에 로그인 정보 저장');
      this.user = user;
      this.isLoggedIn = true;
      localStorage.setItem('CURRENT_USER', JSON.stringify(user));
    },
    async logout() {
        console.log('메모리에서 로그인 정보 삭제');
        const res = await api.post('api/auth/logout/');
        if (res.status !== 200) {
            console.error('로그아웃 실패');
            return;
        }

        if (res.status === 200) {
          console.log('로그아웃 성공');
          this.user = null;
          this.isLoggedIn = false;
          localStorage.removeItem('CURRENT_USER');
        }
    },

    checkAuth() {
      console.log('로그인 정보 확인');
      const currentuser = localStorage.getItem('CURRENT_USER');
      if (currentuser) { // 만약 로컬 스토리지에 사용자 정보가 있다면
        this.user = JSON.parse(currentuser);
        this.isLoggedIn = true;
        console.log('로컬 스토리지에 로그인 정보 있음');
        return;
      }
      this.user = null;
      this.isLoggedIn = false;
      console.log('로컬 스토리지에 로그인 정보 없음');
      return;
    },
  },
});