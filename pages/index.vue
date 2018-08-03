<template>
  <section>
    <p class="title is-6" v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
    </p>
  </section>
</template>

<script>
import client from '@/plugins/contentful'
export default {
  asyncData() {
    return client.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
    }).then(entries => {
      return { posts: entries.items }
    })
    .catch(e => console.log(e))
  },
  head: {
    title: 'Devda'
  }
}
</script>