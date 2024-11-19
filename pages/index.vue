<template>
  <div class="profile-container">
    <div class="card fadeUp">
      <div class="profile" v-if="profile">
        <img src="@/assets/icons/icon.jpg" alt="Siroshun's Icon" class="icon"/>
        <h1>Siroshun</h1>
        <p>Hello, I am a Japanese university student.</p>
        <p>I love Ayataka, programming, and Minecraft!</p>
        <div class="links">
          <a href="https://twitter.com/siroshun09" target="_blank" rel="noopener">
            <button class="link-button">
              <font-awesome-icon :icon="['fab', 'twitter']" fixed-width/>
            </button>
          </a>
          <a href="https://github.com/Siroshun09" target="_blank" rel="noopener">
            <button class="link-button">
              <font-awesome-icon :icon="['fab', 'github']" fixed-width/>
            </button>
          </a>
        </div>
        <small>
          If you want to contact me, please
          <span class="profile-change" @click="profile = !profile">click here</span>
          for more information.
        </small>
      </div>
      <div class="contact-me" v-else>
        <h1>How to contact me?</h1>

        <p>X (Twitter) or Discord DM is the quickest way to get a response.</p>

        <ul>
          <li>X (Twitter): <a href="https://twitter.com/siroshun09">Siroshun09</a></li>
          <li>Discord: <code>siroshun</code></li>
        </ul>

        <p>If you are using Discord, please send me a friend request first.</p>
        <hr class="my-2">
        <div class="text-center">
          <small>
            <span class="profile-change" @click="profile = !profile">Click here</span> to back to profile card
          </small>
        </div>
      </div>
      <div class="text-center">
        <small>© 2021-2024 Siroshun</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const profile = ref(true);
</script>

<style scoped>
.profile-container {
  @apply h-full bg-gradient-to-br from-indigo-300 to-blue-400 flex justify-center
}

.card {
  @apply m-auto w-max bg-white rounded-3xl p-5
}

.profile {
  @apply text-center
}

.profile h1 {
  @apply text-5xl my-5 mx-auto px-10 py-1 text-gray-500 border-b border-gray-300 tracking-wider
}

.contact-me {
}

.contact-me h1 {
  @apply text-4xl mt-3 mb-5 mx-auto px-1 py-2 text-gray-500 border-b border-gray-300 tracking-wider
}

.contact-me p {
  @apply text-lg
}

.contact-me ul {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  @apply text-lg my-3
}

.contact-me hr {
  @apply my-3
}

.icon {
  @apply w-48 h-48 mx-auto rounded-full my-5
}

p {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  @apply text-xl text-gray-900 my-1
}

.links {
  @apply flex my-10 text-5xl justify-center
}

.link-button {
  @apply px-5 text-blue-300 hover:text-blue-400
}

.profile-change {
  @apply text-blue-500 hover:text-blue-700 cursor-pointer
}

a {
  @apply text-blue-500 hover:text-blue-700
}

small {
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  @apply text-base
}

code {
  @apply bg-gray-200 px-1 rounded text-black
}

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: rotateX(25deg);
  }

  to {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
</style>
