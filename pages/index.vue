<template>
  <div>
    <div class="m-5">
      <h1>Hello, I'm Siroshun.</h1>
      <p>I'm a Java programmer, mainly developing software for Minecraft.</p>
      <p>I also enjoy creating libraries for Java and learning new programming languages and technologies.</p>
      <br/>
      <p>I usually use <code>Siroshun09</code> for my online id.</p>
      <p>If you want to contact me, please see
        <NuxtLink to="contact">this page</NuxtLink>.</p>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    @apply text-3xl my-2 text-black
  }
  p {
    @apply text-base text-gray-800
  }
  a {
    @apply text-blue-600 hover:text-blue-800
  }
  code {
    @apply bg-gray-200 px-1.5 rounded text-black
  }
</style>
