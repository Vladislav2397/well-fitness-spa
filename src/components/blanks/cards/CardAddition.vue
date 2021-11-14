<template lang="pug">
    include ../../../tools/pug/mixins

    +b.card-addition
        +e.image
            img(
                :src="imageSrc"
                :alt="imageAlt"
            )
        +e.title {{ title }}
        +e.description {{ description }}
        +e.LINK-COMPONENT.link(
            :href="linkHref"
            tag="router-link"
            theme="primary"
            icon="arrow"
            iconSize="s"
        ) {{ linkText }}
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardAddition extends Vue {
    @Prop() readonly imageSrc!: string
    @Prop() readonly imageAlt!: string
    @Prop() readonly title!: string
    @Prop() readonly description!: string
    @Prop() readonly linkText!: string
    @Prop() readonly linkHref!: string
}

</script>
