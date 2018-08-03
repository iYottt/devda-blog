<template>
  <section>
    <h1 class="title">
        {{ post.fields.title }}
    </h1>
    <hr>
    <div class="content" v-html="$md.render(post.fields.content)"></div>
  </section>
</template>

<script>
import hljs from 'highlight.js'
import client from '@/plugins/contentful'
export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client.getEntries({
      content_type: 'post',
      'fields.slug': params.slug
    }).then(entries => {
      return { post: entries.items[0] }
    })
    .catch(e => console.log(e))
  },
  head() {
      return {
          title: this.post.fields.title
      }
  },
  mounted() {
    hljs.initHighlightingOnLoad()
  }
}
</script>
