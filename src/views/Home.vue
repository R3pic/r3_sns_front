<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ArticleApi } from '../api/articleapi';
import { Article } from '../model/article';

// Import components
import ArticleCard from '../components/ArticleCard.vue';
import InfiniteObserver from '../components/InfiniteObserver.vue';

// Variables
const articles = ref<Article[]>([]);
const isLoading = ref(false);
const isLastPage = ref<boolean>(false);
let currentPage = 1;
const perPage = 5;

const loadMoreArticles = async () => { // 새로운 글을 백엔드에서 가져오는 함수
  // 로딩 시작
  isLoading.value = true;

  // 백엔드에서 글 가져오기
  const RecentArticles = await ArticleApi.getRecentArticles(currentPage, perPage);
  
  // 글이 없을 때
  if (RecentArticles.length === 0) { // 더 이상 글이 없을 때
    isLoading.value = false;
    isLastPage.value = true;
    return;
  }

  // 글이 있을 때
  articles.value.push(...RecentArticles); // 기존 글에 새로운 글 추가
  currentPage++; // 다음 페이지로 이동
  // 로딩 끝
  isLoading.value = false;
};
</script>

<template>
  <div class="home">
    <div class="article-container">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :author="article.author"
        :id="article.id"
        :content="article.content"
        :createdAt="article.createdAt"
        :updatedAt="article.updatedAt"
      />
      <InfiniteObserver @show="loadMoreArticles" v-if="!isLastPage" />
      <FontAwesomeIcon v-if="isLoading" class="loading-icon" :icon="faSpinner" spin />
      <div v-if="isLastPage" class="no-more" >더 이상 티클이 없습니다.</div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

.article-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 1rem;
}

.loading-icon {
  font-size: 2rem;
  margin: 1rem auto;
}

.no-more {
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem auto;
}
</style>
