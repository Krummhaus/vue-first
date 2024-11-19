<script setup lang="ts">
// every variable defined here will be automaticaly avilible in <template>
import { ref, computed } from "vue";
import { Post, today, thisWeek, thisMonth } from "../posts"
import { DateTime } from "luxon";

// Own type the long way
// type Period = "Today" | "This week" | "This month"
// const periods: Period[] = ["Today", "This week", "This month"];

// Own type short way
const periods = ["Today", "This week", "This month"] as const;
type Period = typeof periods[number];

const selectedPeriod = ref<Period>("Today");

// We can use '.reduce' instead of '.map' + '.filter'
const posts = computed(() => {
  return [today, thisWeek, thisMonth]
  .map(post => {
    return {
      ...post,
      created: DateTime.fromISO(post.created)
    };
  })
  .filter(post => {
    if (selectedPeriod.value === "Today") {
      return post.created >= DateTime.now().minus({ day: 1 })
    }
    if (selectedPeriod.value === "This week") {
      return post.created >= DateTime.now().minus({ week: 1 })
    }
    return post 
  })
})

function selectPeriod (period: Period) {
  console.log(period);
  selectedPeriod.value = period;
}
</script>

<template>
  <nav class="is-primary panel">
    <!-- {{ selectedPeriod }} -->
    <span class="panel-tabs">
      <a
        v-for="period of periods"
        :key="period"
        :class="{'is-active': period === selectedPeriod }"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <a v-for="post of posts" :key="post.id" class="panel-block">
      <a>{{  post.title }}</a>
      <div>{{  post.created.toFormat("d. M. y") }}</div>
    </a>
  </nav>
</template>
