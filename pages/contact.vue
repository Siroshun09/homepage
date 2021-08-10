<template>
  <div class="mx-auto container">
    <Header/>
    <div class="text-base m-5 text-gray-800">
      <h1 class="text-3xl my-2">How to contact me?</h1>
      <h2 class="text-2xl my-1.5">Twitter or Discord</h2>
      <p>Twitter or Discord DM is the fastest way to get a response.</p>
      <ul class="m-3">
        <li>Twitter: <a class="text-blue-500 hover:text-blue-700" href="https://twitter.com/siroshun09">Siroshun09</a>
        </li>
        <li>Discord: <code class="bg-gray-200 px-1 rounded">Siroshun09#7501</code>
          (id: <code class="bg-gray-200 px-1 rounded">340865494406004737</code>)
        </li>
      </ul>
      <p>However, I may temporarily stop receiving messages due to spam or other reasons.</p>
      <h2 class="text-2xl my-1.5">E-mail</h2>
      <p>If you would like to communicate via email, please contact me at
        <code class="bg-gray-200 px-1 rounded">siroshun@pm.me</code> or
        <code class="bg-gray-200 px-1 rounded">siroshun@protonmail.com</code>.</p>
      <p>I will sign the email. Use
        <!--suppress HtmlUnknownTarget -->
        <a class="text-blue-500 hover:text-blue-700" href="mail_pgp.asc">
          this PGP key
        </a>
        to verify my signature.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  name: "contact",
  components: {Header}
}
</script>
