<template>
  <div>
    <h1>カウンター: {{ counter.count }}</h1>
    <button @click="counter.increment()">+</button>
    <button @click="counter.decrement()">-</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counterSample'

const counter = useCounterStore()
</script>
