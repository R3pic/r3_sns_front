<script setup lang="ts">
</script>

<template>
    <div class="login">
        <div class="login-container">
            <div class="login-form">
                <h1>로그인</h1>
                <form>
                    <div class="input-group">
                        <label for="username">이메일</label>
                        <input type="username" id="username" name="username" />
                    </div>
                    <div class="input-group">
                        <label for="password">비밀번호</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div class="input-group">
                        <button type="submit">로그인</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1rem;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    box-sizing: border-box;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

label {
    font-size: 1.2rem;
}

input {
    padding: 0.5rem;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
}

button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #50B498;
    color: white;
    cursor: pointer;
}
</style>