<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <base-badge :areas="areas"></base-badge>
        </div>
        <div class="actions">
            <router-link :to="coachContactLink">Contact</router-link>
            <router-link :to="coachDeatilsLink">Details</router-link>
        </div>
    </li>
</template>

<script>
export default{
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed:{
        fullName(){
            return this.firstName + ' ' + this.lastName;
        },
        coachContactLink(){
            return this.$route.path + '/' + this.id + '/contact';
        },
        coachDeatilsLink(){
            return this.$route.path + '/' + this.id;
        }

    }
};
</script>

<style scoped>
li {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 1rem;
    margin: 1rem 0;
    list-style: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.actions{
    margin-top: 1rem;
    text-align: right;
}
a{
    text-decoration: none;
    color: #3d008d;
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
}
a:hover,
a:active,
a.router-link-active {
    border-color: #3d008d;
}
span{
    display: inline-block;
    font-size: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
}
</style>