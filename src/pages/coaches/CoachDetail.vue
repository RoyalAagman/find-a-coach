<template>
    <section>
        <base-card>
            <h2> {{ fullName }}</h2>
            <h3> {{ rate }}</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <h2> Intrested ? Click below to reach out !! </h2>
            <router-link :to="contactLink">Contact Now </router-link>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <h2>Description</h2>
            <base-badge :areas="areas"></base-badge>
            <p> {{ description }}</p>
        </base-card>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data (){
        return {
            selectedCoach: null
        };
    },
    computed: {
        fullName(){
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        rate(){
            return '$' + this.selectedCoach.hourlyRate + '/hour';
        },
        areas(){
            return this.selectedCoach.areas;
        },
        description(){
            return this.selectedCoach.description;
        },
        contactLink(){
            return this.$route.path + '/contact';
        }
    },
    created(){
        this.selectedCoach = this.$store.getters['coaches/coaches'].find((coach) => coach.id === this.id);
    },
}
</script>

