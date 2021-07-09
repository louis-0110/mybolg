<template>
  <img
    :src="src"
    :style="{ width: size + 'px', height: size + 'px' }"
    class="avatar-container"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '150',
    },
  },
};
</script>

<style>
.avatar {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>