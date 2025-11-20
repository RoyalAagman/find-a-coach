<template>
    <li>
        <div>
            <a :href="emailLink"> {{ email }}</a>
        </div>
        <div>
            <p>{{ message }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: ['email', 'message'],
    computed : {
        emailLink(){
            return 'mailto:' + this.email;
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
    margin-bottom: 1.25rem;
    padding: 1rem 1.25rem;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

a {
    color: #42b983;
    text-decoration: none;
    font-weight: 600;
    word-break: break-all;
    transition: color 0.15s;
}
a:hover {
    color: #36a872;
    text-decoration: underline;
}

p {
    margin: 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.5;
}

@media (max-width: 480px) {
    li {
        padding: 0.75rem 0.5rem;
    }
    p {
        font-size: 0.95rem;
    }
}
</style>