<template>
    <base-dialogue :show="!!error" @close="handleError" title="Error !">
    <p>{{ error }}</p>
    </base-dialogue>
    <section>
        <base-card>
        <div>
            <header><h2>Message Inbox</h2></header>
        </div>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
            <requests-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
            ></requests-item>
        </ul>
        <h3 v-else>No Message yet !!</h3> 
        </base-card>
    </section>
</template>



<script>
import BaseCard from '../../components/ui/BaseCard.vue';
import RequestsItem from '../../components/requests/RequestsItem.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
export default {
    components : {
        BaseCard,
        RequestsItem,
        BaseSpinner,
    },
    data(){
        return {
            isLoading : false,
            error: null,
        };
    },
    computed:{
        receivedRequests(){
            return this.$store.getters['requests/requests'];
        },
        hasRequests(){
            return this.$store.getters['requests/hasRequests'];
        }
    },
    created(){
        this.loadRequests();
    },
    methods:{
        async loadRequests(){
            this.isLoading = true;
            try{

                await this.$store.dispatch('requests/fetchRequests');
            }catch(error){
                this.error = error.message || "Could not load requests"
            }
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
    }
}
</script>