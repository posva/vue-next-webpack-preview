<template>
  <h2>User: {{ id }}</h2>
</template>

<script>
import { ref, inject } from "vue";

export default {
  setup() {
    const router = inject("router");
    const id = computed(() => router.currentRoute.value.params.id);

    return { id };
  }
};
</script>
