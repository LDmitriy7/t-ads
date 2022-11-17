<template>
  <div class="container">
    <img src="/chat-avatars/1.png" alt="avatar">
    <div class="text">
      <p class="title">Andrew Rudenko</p>
      <p>Ок, напишу позже</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 4.6rem;
  padding: 0.5rem;
  display: flex;
  color: #aaaaaa;
}

.text {
  padding: 0 3px;
  width: 100%;
  border-bottom: 0.01rem solid #aaaaaa;
}

.title {
  color: black;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 2px;
}

img {
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
</style>