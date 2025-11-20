<template>
    <span v-for="area in areas" :key="area" class="badge">
        {{ area }}
    </span>
</template>

<script>
export default{
    props: ['areas']
}
</script>

<style scoped>
span{
    display: inline-block;
    font-size: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
}
</style>