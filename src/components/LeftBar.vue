<script setup lang="ts">
import { useUserStore } from '../stores/user';
import NavItem from './NavItem.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const home = () => router.push('/');

const onCompose = () => {
  console.log('게시글 작성 요청');
}

const onProfileNameClick = () => {
  console.log('프로필 이름 클릭');
}

const onProfileIdClick = () => {
  console.log('프로필 아이디 클릭');
}

const onProfilePicClick = () => {
  console.log('프로필 사진 클릭');
}

const onProfileClick = () => {
  console.log('프로필 클릭');
}
</script>

<template>
    <div class="left-bar">
      <span class="logo" @click="home">
        <img alt="r3-logo" src="../assets/icon.svg" />
      </span>

      <div class="nav-items">
        <NavItem label="홈" route="/" />
        <NavItem label="검색" route="/search" />
        <NavItem label="알림" route="/notifications" />
        <NavItem label="프로필" :route="`${userStore.user?.username}`" />
      </div>
      
      <div class="footer">
        <div class="compose">
          <div class="compose-button" @click="onCompose">
            <span>티클 작성</span>
          </div>
        </div>

        <div class="profile" @click="onProfileClick">
          <div class="profile-pic-box" @click.stop="onProfilePicClick">
            <img class="profile-pic" src="../assets/noneProfile.png" alt="Profile Picture" />
          </div>
          <div class="profile-details">
            <span class="profile-name" @click.stop="onProfileNameClick">{{ userStore.user?.nickname }}</span>
            <span class="profile-id" @click.stop="onProfileIdClick">@{{ userStore.user?.username }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.left-bar {
  height: 100%;
  width: 200px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #50B498;
  padding: 10px;
}

.logo {
  height: 50px;
  width: 50px;
  will-change: filter;
  transition: filter 300ms;
}

.logo img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  cursor: pointer;
}

.nav-items {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
}

.footer {
  width: 100%;
  margin-top: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.compose {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem
}

.compose-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DEF9C4;
  color: #50B498;
  width: 100%;
  padding: 10px 0;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 300ms, color 300ms;
  user-select: none;
}

.compose-button:hover {
  background-color: #9CDBA6;
  color: #50B498;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: auto;
  gap: 1.2rem;
  cursor: pointer;
  background-color: #B3E2A7;
  padding: 10px;
  border-radius: 30px;
}

.profile-pic-box {
  height: 48px;
  width: 48px;
  border-radius: 70%;
  overflow: hidden;
  border: 2px solid #50B498;
}

.profile-pic {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.profile-details {
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-weight: bold;
}

.profile-name:hover {
  text-decoration: underline;
}

.profile-id {
  color: grey;
  user-select: none;
}

.profile-id:hover {
  text-decoration: underline;
}
</style>