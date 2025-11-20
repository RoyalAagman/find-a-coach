<template>
    <base-card>
        <h2> Filter your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="frontend" checked @change="setFilter"/>
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="backend" checked @change="setFilter"/>
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" checked @change="setFilter"/>
            <label for="career">Career</label>
        </span>
    </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data (){
        return {
            frontend: true,
            backend: true,
            career: true,
        };
    },
    methods: {
        setFilter(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>


<style scoped>
.filter-option{
    display: inline-block;
    margin-right: 1rem;
}
label{
    margin-left: 0.25rem;
}


</style>