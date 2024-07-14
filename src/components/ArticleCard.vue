<script setup lang="ts">
defineProps<{
  author: {
    nickname: string;
    username: string;
  };
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}>();

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons';
</script>

<template>
  <article class="article-card">
    <div class="article-card-body">
      <div class="header-pic-box">
        <img class="header-pic" src="../assets/noneProfile.png" alt="user-profile" />
      </div>
      <div class="article-card-content-wrapper">
        <div class="article-card-header">
          <div class="user-info">
            <p class="header-nickname">{{ author.nickname }}</p>
            <span class="header-username">@{{ author.username }}</span>
          </div>
          <p class="created-at">{{ new Date(createdAt).toLocaleString() }}</p>
        </div>
        <div class="article-card-content">
          <p>{{ content }}</p>
        </div>
        <div class="article-card-footer">
          <div class="user-interaction">
            <div class="icon-box">
              <FontAwesomeIcon :icon="faHeart" class="heart-icon"/>
              <span class="heart-count">0</span>
            </div>
            <div class="icon-box">
              <FontAwesomeIcon :icon="faBookmark" class="bookmark-icon"/>
              <span class="bookmark-count">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  background-color: #e7f7e9;
  border: 1px solid #B0C9B6;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  user-select: none;
}

.article-card:hover {
  background-color: #f4fff5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.article-card-body {
  display: flex;
}

.header-pic-box {
  width: 2rem; /* Adjust the size as needed */
  height: 2rem;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 1rem; /* Space between the profile picture and the content */
}

.header-pic {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}

.article-card-content-wrapper {
  flex: 1; /* Take the remaining width */
}

.article-card-header {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  gap: 0.2rem;
}

.user-info {
  display: flex;
  gap: 0.2rem;
}

.header-nickname {
  font-weight: bold;
  color: #2F4F4F;
}

.header-nickname:hover {
  text-decoration: underline;
}

.header-username {
  font-weight: normal;
  font-size: 0.9rem;
  color: #7C7C7C;
}

.created-at {
  font-size: 0.9rem;
  color: #7C7C7C;
}

.article-card-content {
  border-radius: 8px;
  padding-top: 0.2rem;
  line-height: 1.6;
  color: #3C3C3C;
  word-wrap: break-word;
}

.article-card-content p {
  color: #3C3C3C;
  margin: 0 0 1rem 0;
  white-space: pre-wrap;
}

.article-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-interaction {
  display: flex;
  gap: 4rem;
}

.icon-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  color: black;
  transition: color 0.5s ease, filter 0.5s ease;
}

.icon-box span {
  font-size: 0.9rem;
  color: #7C7C7C;
  transition: color 0.3s ease;
}

.icon-box:hover .heart-icon {
  color: red;
  filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
}

.icon-box:hover .heart-count {
  color: red;
}

.icon-box:hover .bookmark-icon {
  color: blue;
  filter: drop-shadow(0 0 5px rgba(0, 0, 255, 0.5));
}

.icon-box:hover .bookmark-count {
  color: blue;
}
</style>
