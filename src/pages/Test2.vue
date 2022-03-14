<template lang="pug">
.b-test2
    h1 {{ msg }}
</template>

<script lang="ts" setup>
import {ref} from '@vue/composition-api'

const msg = ref('Hello world')
</script>
