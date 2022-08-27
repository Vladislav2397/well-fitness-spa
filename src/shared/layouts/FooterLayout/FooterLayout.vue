<template lang="pug" functional>

.b-footer-layout(
    :class="data.staticClass"
)
    .__top
        slot(
            name="top"
        )
    .__middle
        slot(
            name="middle"
        )
    .__bottom
        slot(
            name="bottom"
        )

</template>

<style lang="scss" src="./FooterLayout.critical.scss" />
<style lang="scss" src="./FooterLayout.main.scss" />
