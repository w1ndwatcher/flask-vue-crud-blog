<template>
    <div class="container mt-4">
        <h3>Create your Article</h3>
        <div v-if="error" class="alert alert-warning alert-dismissible fade show mt-4" role="alert">
            <strong>{{ error }}</strong>
        </div>
        <form @submit.prevent="insertArticle">
            <input type="text" class="form-control mt-4" placeholder="Please enter your title." v-model="title">
            <br>
            <textarea rows="10" class="form-control" placeholder="Please enter your description." v-model="body"></textarea>
            <button class="btn btn-success mt-4">Publish Article</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: null,
            body: null,
            error: null
        }
    },
    methods: {
        insertArticle() {
            if(!this.title || !this.body) {
                this.error = "Please fill out all fields."
            } else {
                fetch('http://localhost:5000/add', {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({title:this.title, body:this.body})
                })
                .then(resp => resp.json())
                .then(() => {
                    this.$router.push({name:'home'})
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style>

</style>