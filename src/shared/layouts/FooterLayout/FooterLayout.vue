<template lang="pug" functional>

.b-footer-layout
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
