<template>
  <header class="flex font-sawarabi my-3 justify-between">
    <div class="flex">
      <a href="." class="flex mx-8">
        <img src="@/assets/icons/icon.png" alt="Siroshun's Icon"
             class="w-10 h-10 rounded-full border border-gray-700 my-auto"/>
        <p class="text-3xl ml-3 my-auto text-gray-800"> Siroshun </p>
      </a>

      <nav class="my-auto text-2xl text-gray-400">
        <NuxtLink to="contact">
          <button class="px-1.5 hover:text-gray-700">
            Contact
          </button>
        </NuxtLink>
        <a href="#">
          <button class="px-1.5 hover:text-gray-700">
            Button 2
          </button>
        </a>
        <a href="#">
          <button class="px-1.5 hover:text-gray-700">
            Button 3
          </button>
        </a>
      </nav>
    </div>

    <div class="flex my-auto text-2xl">
      <a href="https://twitter.com/siroshun09" target="_blank" rel="noopener">
        <button class="px-1.5 text-blue-400 hover:text-blue-600">
          <font-awesome-icon :icon="['fab', 'twitter']" fixed-width/>
        </button>
      </a>
      <a href="https://github.com/Siroshun09" target="_blank" rel="noopener">
        <button class="px-1.5 text-gray-400 hover:text-gray-600">
          <font-awesome-icon :icon="['fab', 'github']" fixed-width/>
        </button>
      </a>
    </div>
  </header>
</template>

<style scoped>
.font-sawarabi {
  font-family: 'Sawarabi Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
