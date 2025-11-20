<template>
    <form @submit.prevent="sendMessage">
        <div class="email">
            <label for="email">Your Email : </label>
            <input type="email" id="email" v-model="email"/>
        </div>
        <div class="message">
            <label for="message">Input your message</label>
            <textarea id="message" rows="5" v-model="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
    </form>
</template>
<script>
export default {
    data(){
        return {
            email: '',
            message: '',
        };
    },
    methods:{
        sendMessage(){
            this.$store.dispatch('requests/contactCoach',{
                email : this.email,
                message: this.message,
                coachId : this.$route.params.id
            });
            this.$router.replace('/coaches');
        }
    }
}
</script>

<style scoped>
form {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1.25rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.email,
.message {
    display: flex;
    flex-direction: column;
}

label {
    font-weight: 600;
    margin-bottom: 0.35rem;
    color: #333;
}

input[type="email"],
textarea {
    font: inherit;
    padding: 0.5rem 0.65rem;
    border: 1px solid #d0d6db;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

input[type="email"]:focus,
textarea:focus {
    border-color: #42b983;
    box-shadow: 0 0 0 4px rgba(66, 185, 131, 0.08);
}

button[type="submit"] {
    align-self: flex-end;
    background: #42b983;
    color: #fff;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.15s ease, transform 0.08s ease;
}

button[type="submit"]:hover {
    background: #36a872;
}

button[type="submit"]:active {
    transform: translateY(1px);
}

/* Responsive tweaks */
@media (max-width: 480px) {
    form {
        margin: 1rem;
        padding: 1rem;
    }
    button[type="submit"] {
        width: 100%;
        align-self: stretch;
    }
}
</style>