<template>
  <section class="error-occurred">
    <div v-if="error.statusCode === '404'" class="error">
      <Head>
        <Title>Page Not Found</Title>
      </Head>
      <h1>
        <font-awesome-icon :icon="['fa', 'exclamation-circle']" fixed-width/>
        <span>Page Not found</span>
      </h1>
      <p>The page {{ error.url }} is not found.</p>
      <p><NuxtLink to="/">Return to the profile page</NuxtLink></p>
    </div>
    <div v-else class="error">
      <Head>
        <Title>An Error Occurred</Title>
      </Head>
      <h1>
        <font-awesome-icon :icon="['fa', 'exclamation-circle']" fixed-width/>
        <span>An error occurred!</span>
      </h1>
      <p>Message: {{ error.message }}</p>
      <p>
        <NuxtPage to="/">Return to the profile page</NuxtPage>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const error = useError()
</script>

<style scoped>
.error-occurred {
  @apply m-auto w-max bg-white p-5 text-center
}

h1 {
  @apply text-5xl my-5 text-red-500
}

p {
  @apply text-xl text-gray-700
}

a {
  @apply text-blue-700 hover:text-blue-900
}
</style>
