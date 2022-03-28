<template lang="pug">

section.b-become-partner
    .__container.container
        .__caption
            .__content
                | Станьте нашим партнером и&nbsp;
                span получите возможность
                | &nbsp;представлять нашу продукцию в&nbsp;вашем регионе.
            button-component.__button(
                theme="ghost-light"
            ) Стать партнером
        .__image
            img(
                src=""
                alt=""
            )
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BecomePartner extends Vue {

}

</script>
