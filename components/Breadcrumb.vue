<template>
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li class="is-active"><a href="#" aria-current="page">{{ this.$route.params.slug }}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
}
</script>

