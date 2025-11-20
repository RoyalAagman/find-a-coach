<template>
    <base-card>
    <h1>Register as Coach</h1>
    <coach-form @save-data="saveData"></coach-form>
    </base-card>
</template>


<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
// import BaseCard from '../../components/ui/BaseCard.vue';

export default {
    components:{
        CoachForm,
    },
    
    methods:{
        saveData(data){
            this.$store.dispatch('coaches/registerCoach', data )
            this.$router.replace('/coaches')
        }
    }
}
</script>