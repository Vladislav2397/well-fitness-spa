<template lang="pug" functional>

.b-tiling-layout(
    :style="{ '--item-count': props.countInRow || 3 }"
)
    slot(
        :classItem="'tiling-layout__item'"
    )

</template>

<style lang="scss" src="./tiling-layout--critical.scss"></style>
<style lang="scss" src="./tiling-layout--main.scss"></style>
