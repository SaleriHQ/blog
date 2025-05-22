<script setup lang="ts">
interface Props {
  href: string
  class?: string
}

const props = defineProps<Props>();

</script>

<template>
  <a :href="href"
     :class="['inline-block no-underline relative z-[1] transition-[top] duration-[200ms] ease-[cubic-bezier(0,0.8,0.13,1)', props.class]">
    <slot/>
  </a>
</template>

<style scoped>
a::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 77%;
  left: 0.2em;
  right: 0.2em;
  bottom: 0;
  background-color: rgba(84, 145, 231, 0.3);
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
}

a:hover::after {
  top: 0.3em;
}
</style>