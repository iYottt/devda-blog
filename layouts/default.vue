<template>
  <div class="container is-desktop">
    <div class="columns">
      <div id="sidebar" class="column is-one-quarter has-text-centered">
        <h1 class="title">
          <nuxt-link to="/">Devda</nuxt-link>
        </h1>
        <h2 class="subtitle is-6">-- blog --</h2>
      </div>
      <div class="column is-7">
        <Breadcrumb />
        <div id="content">
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  components: {
    Breadcrumb
  }
}
</script>


<style>
html {
  padding-top: 2rem;
  background-color: #EEEEEE;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
a:visited, a:hover {
  color: #888;
}
#sidebar {
  margin-top: 3rem;
}
#content {
  padding: 1.5rem;
  background: #fff;
}
</style>
