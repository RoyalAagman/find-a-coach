<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 6px;
    background-color: white;
    padding: 1rem;
    width: 60%;
    margin: 2rem auto;
    }
</style>