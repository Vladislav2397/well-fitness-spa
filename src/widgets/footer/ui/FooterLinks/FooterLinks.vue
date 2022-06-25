<template lang="pug">

.footer-links
    ._column(
        v-for="({ title, list }, index) in links"
        :key="`column${index}`"
        :class="{ 'footer__column--bottom' : index > 1 }"
    )
        h4 {{ title }}
        link-component._link(
            v-for="({text, href}, index) in list"
            :key="`link${index}`"
            :href="href"
        ) {{ text }}

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class FooterLinks extends Vue {

}

</script>

<!--<style lang="scss" src="./FooterLinks.critical.scss" />-->
<!--<style lang="scss" src="./FooterLinks.main.scss" />-->
