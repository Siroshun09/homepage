<template>
  <div class="mx-auto container">
    <Header/>
    <div class="text-base m-5 text-gray-800">
      <h1 class="text-3xl my-2">Hello, I'm Siroshun.</h1>
      <p>I'm a Java programmer, mainly developing software for Minecraft.</p>
      <p>I also enjoy creating libraries for Java and learning new programming languages and technologies.</p>
      <br/>
      <p>I usually use <code class="bg-gray-200 px-1 rounded">Siroshun09</code> for my online id.</p>
      <p>If you want to contact me, please see
        <NuxtLink class="text-blue-500 hover:text-blue-700" to="contact">this page</NuxtLink>.</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {Header}
}
</script>
