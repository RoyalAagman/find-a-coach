<template>
    <base-dialogue :show="!!error" @close="handleError" title="Error !">
    <p>{{ error }}</p>
    </base-dialogue>
    <section>
        <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <button class="refresh" @click="loadCoaches(true)">Refresh</button>
            <router-link to="/register" v-if="!isCoach && !isLoading">Register as Coach</router-link>
        </div>
        <div v-if="isLoading">
            <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
            <coach-item
                v-for="coach in filterCoaches"
                :key="coach.id"
                :id="coach.id"
                :firstName="coach.firstName"
                :lastName="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"
            >
        </coach-item>
        </ul>
        <h3 v-else>No Coaches Found</h3>
        </base-card>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseDialogue from '../../components/ui/BaseDialogue.vue';

export default {
    components:{
        CoachItem,
        CoachFilter,
        BaseDialogue
    },
    data (){
        return {
            isLoading: false,
            error: null,
            activeFilter : {
                frontend: true,
                backend: true,
                career: true,
            }
        };
    },
    computed: {
        filterCoaches(){
            const coaches =  this.$store.getters['coaches/coaches'];
            return coaches.filter((coach)=> {
                if (this.activeFilter.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if (this.activeFilter.backend && coach.areas.includes('backend')){
                    return true;
                }
                if (this.activeFilter.career && coach.areas.includes('career')){
                    return true;
                }
                return false;
            })
        },
        hasCoaches(){
            return !this.isLoading && this.$store.getters['coaches/hasCoaches']
        },
        isCoach(){
            return this.$store.getters['coaches/isCoach'];
        }
    },
    created(){
        this.loadCoaches();
    },
    methods : {
        setFilter(updatedFilters){
            this.activeFilter = updatedFilters;
        },
        async loadCoaches(refresh = false){
            this.isLoading = true;
            try{
                await this.$store.dispatch('coaches/loadCoaches',{forceRefresh : refresh});
            } catch(error){
                this.error = error.message || 'Something went wrong !!'
            }
            // await new Promise(resolve => setTimeout(resolve, 1500));
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    }
}
</script>

<style scoped>
.controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.refresh{
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #3d008d;
    background-color: #f391e3;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.refresh:hover,
.refresh:active {
    background-color: #3d008d;
    border-color: #f391e3;
}
</style>