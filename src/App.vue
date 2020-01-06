<template>
  <img src="./logo.png" />
  <h1>Hello Vue 3!</h1>
  <ul>
    <li>
      <router-link to="/">/</router-link>
    </li>
    <li>
      <router-link to="/users/1">/users/1</router-link>
    </li>
    <li>
      <router-link :to="nextUserLink">{{ nextUserLink }}</router-link>
    </li>
  </ul>
  <router-view></router-view>
  <hr />
  <pre>{{ currentLocation }}</pre>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  setup() {
    const router = inject('router')
    const currentLocation = computed(() => {
      const { matched, ...rest } = router.currentRoute.value
      return rest
    })
    const nextUserLink = computed(
      () =>
        '/users/' +
        String((Number(router.currentRoute.value.params.id) || 0) + 1)
    )

    return { currentLocation, nextUserLink }
  },
}
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
