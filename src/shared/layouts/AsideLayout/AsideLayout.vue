<template lang="pug" functional>

.b-aside-layout
    .__main
        slot
    slot(
        name="aside"
        :classContainer="'aside-layout__aside'"
    )

</template>

<style lang="scss" src="./aside-layout--critical.scss"></style>
<style lang="scss" src="./aside-layout--main.scss"></style>
