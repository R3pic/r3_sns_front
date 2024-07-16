<script setup lang="ts">
import { computed, ref} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons/faImage';
import { ArticleApi } from '../api/articleapi';
const emit = defineEmits(['close']);

const postContent = ref('');
const uploadedimage = ref<HTMLInputElement>();
const on_mage_upload_btn_click = () => uploadedimage.value?.click();

// 게시하기 버튼을 눌렀을 때
const post = async () => {
  if (postContent.value.length < 5) {
    alert('게시글 내용을 입력해주세요.');
    return;
  }
  
  const PostedArticle = await ArticleApi.postArticle(postContent.value);
  
  if (!PostedArticle) {
    alert('게시글 작성에 실패했습니다.');
    return;
  }
  
  emit('close');
};

const handleImageUpload = (event: Event) => {
  console.log('유저가 이미지를 업로드함');
}
// 디자인 관련
const maxContentLength = 180;
// 텍스트 박스 높이 자동 조절
const adjustTextareaHeight = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};
// 게시글 글자수 인디케이터
const contentLengthStyle = computed(() => {
  const maxLength = 180;
  const contentLength = postContent.value.length;
  if (contentLength < maxLength * 0.5) {
    return { color: 'black' };
  } else if (contentLength < maxLength * 0.8) {
    return { color: 'orange' };
  } else {
    return { color: 'red' };
  }
});
</script>

<template>
  <div class="modal-wrapper" @click="emit('close')">
    <div class="modal-window" @click.stop>
      <div class="modal-header">
        <button class="close-button" @click="emit('close')">
          <FontAwesomeIcon :icon="faTimes" />
        </button>
      </div>

      <div class="modal-content">
        <img class="user-thumbnail" src="../assets/noneProfile.png" alt="Profile Picture" />
        <textarea 
          spellcheck="false"
          class="post-textarea" 
          placeholder="오늘은 어떤 일이 있었나요?" 
          rows="1" 
          v-model="postContent"
          @input="adjustTextareaHeight"
        >
          <div class="upload-image-preview">
            <img v-for="(image, index) in imageList" :src="image" :key="index" class="image-preview"/>
          </div>
        </textarea>
      </div>

      <div class="modal-footer">
        <div class="footer-left">
          <div class="image-upload-button" @click="on_mage_upload_btn_click">
            <FontAwesomeIcon :icon="faImage"/>
          </div>
          <input ref="uploadedimage" type="file" style="display: none" multiple @change="handleImageUpload"/>
        </div>
        <div class="footer-right">
          <div class="content-length-progress">
            <span :style="contentLengthStyle">{{ maxContentLength - postContent.length }}</span>
          </div>
          <button class="post-button" @click="post">게시하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;
    z-index: 1000;
  }

  .modal-window {
    width: 30vw;
    min-width: 500px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .modal-header {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #DEF9C4;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    padding: 20px;
  }

  .user-thumbnail {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 10px;
  }

  .post-textarea {
    flex: 1;
    border: none;
    resize: none;
    font-size: 19px;
    outline: none;
    overflow: hidden;
  }

  .post-textarea::placeholder {
    color: #888;
  }

  .modal-footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-top: 1px solid #ccc;
    background-color: #f5f5f5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .footer-left {
    display: flex;
    gap: 1rem;
  }

  .image-upload-button {
    border-radius: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
  }

  .image-upload-button:hover {
    background-color: #d0d0d0;
  }

  .footer-right {
    display: flex;
    gap: 1rem;
  }

  .content-length-progress {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .content-length-progress span {
    transition: color 0.5s;
  }

  .post-button {
    background-color: #DEF9C4;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
    font-size: 15px;
    color: #333;
  }

  .post-button:hover {
    background-color: #cbe9a0;
  }
</style>