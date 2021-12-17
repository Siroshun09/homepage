<template>
  <section class="error-occurred">
    <div v-if="error.statusCode === 404" class="error">
      <h1>
        <font-awesome-icon :icon="['fa', 'exclamation-circle']" fixed-width/>
        <span>Not found!</span>
      </h1>
      <p><NuxtLink to="/">Return to the profile page</NuxtLink></p>
    </div>
    <div v-else class="error">
      <h1>
        <font-awesome-icon :icon="['fa', 'exclamation-circle']" fixed-width/>
        <span>An error occurred!</span>
      </h1>
      <p>Message: {{ error.message }}</p>
      <p><NuxtLink to="/">Return to the profile page</NuxtLink></p>
    </div>
  </section>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: 'Not Found',
  },
  props: ['error'],
  layout: 'error',
}
</script>

<style scoped>
.error-occurred {
  @apply m-auto w-max bg-white p-5 text-center
}

h1 {
  @apply text-5xl my-5 text-red-500
}

p {
  @apply text-base text-gray-700
}

a {
  @apply text-blue-700 hover:text-blue-900
}
</style>
