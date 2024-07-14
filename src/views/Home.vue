<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { ArticleApi } from '../api/articleapi';
import ArticleCard from '../components/ArticleCard.vue';
import { Article } from '../model/article';

const articles = ref<Article[]>([]);
const loading = ref(false);
const observer = ref<IntersectionObserver | null>(null);
let currentPage = 1;
const perPage = 5;
let observerDisconnected = false;

const loadMoreArticles = async () => {
  loading.value = true;
  const RecentArticles = await ArticleApi.getRecentArticles(currentPage, perPage);
  
  if (RecentArticles.length === 0) {
      console.log("옵저버 해제");
      observer.value?.disconnect();
      observerDisconnected = true;
      loading.value = false;
      return;
  }
  articles.value.push(...RecentArticles);
  currentPage++;
  loading.value = false;
  if (!observerDisconnected) {
    await nextTick();
    if (observer.value) {
      observer.value.observe(document.querySelector('.load-more')!);
    }
  }
};

const observeLoadMore = (entries: IntersectionObserverEntry[]) => {
  if (entries[0].isIntersecting && !loading.value) {
    loadMoreArticles();
  }
};

onMounted(() => {
  observer.value = new IntersectionObserver(observeLoadMore);
  observer.value.observe(document.querySelector('.load-more')!);
  loadMoreArticles();
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
});
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
      <div class="load-more" v-if="loading">Loading...</div>
      <div class="load-more" v-else>마지막 글 입니다.</div>
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

.load-more {
  height: 20px;
}
</style>
