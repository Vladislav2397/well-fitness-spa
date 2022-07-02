<template lang="pug" functional>

.b-catalog-layout
    .__main
        slot
    slot(
        name="aside"
        :classContainer="'catalog-layout__aside'"
    )

</template>

<style lang="scss" src="./CatalogLayout.critical.scss" />
<style lang="scss" src="./CatalogLayout.main.scss" />
