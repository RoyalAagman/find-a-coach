<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="form-control">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <input type="textarea" id="description" v-model="description" />
        </div>
        <div class="form-control">
            <label for="hourlyRate">Hourly Rate</label>
            <input type="number" id="hourlyRate" v-model="hourlyRate" />
        </div>
        <div class="form-control">
            <h3>Areas of Expertise:</h3>
            <div class="checkbox">
                <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
                <label for="frontend">Frontend Development</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="backend" value="backend" v-model="areas" />
                <label for="backend">Backend Development</label>
            </div>
            <div class="checkbox">
                <input type="checkbox" id="career" value="career" v-model="areas" />
                <label for="career">Career Advisory</label>
            </div>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    emits: ['save-data'],
    data(){
        return {
            firstName: '',
            lastName: '',
            description: '',
            hourlyRate: null,
            areas: []
        };
    },
    methods: {
        submitForm(){
            const formData = {
                firstName: this.firstName,
                lastName: this.lastName,
                description: this.description,
                hourlyRate: this.hourlyRate,
                areas: this.areas
            };

            this.$emit('save-data', formData)
        }
    }
}
</script>

<style scoped>
.form-control{
    margin-bottom: 1rem;
}
label{
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}
input[type="text"],
input[type="number"],
input[type="textarea"]{
    font: inherit;
    padding: 0.25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
}
.checkbox{
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 8px; 
}
button{
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #3d008d;
    background-color: #f391e3;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}
button:hover,
button:active {
    background-color: #3d008d;
    border-color: #f391e3;
}

</style>