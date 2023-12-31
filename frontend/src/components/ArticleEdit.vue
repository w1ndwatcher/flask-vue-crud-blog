<template>
    <div class="container mt-4">
        <h3>Edit your Article</h3>
        <div v-if="error" class="alert alert-warning alert-dismissible fade show mt-4" role="alert">
            <strong>{{ error }}</strong>
        </div>
        <form @submit.prevent="updateArticle">
            <input type="text" class="form-control mt-4" placeholder="Please enter your title." v-model="title">
            <br>
            <textarea rows="10" class="form-control" placeholder="Please enter your description." v-model="body"></textarea>
            <button class="btn btn-success mt-4">Save Changes</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: [Number, String],
            required: true
        }
    },
    data() {
        return {
            title: null,
            body: null,
            error: null
        }
    },
    methods: {
        updateArticle() {
            if(!this.title || !this.body) {
                this.error = "Please fill out all fields."
            } else {
                fetch(`http://localhost:5000/update/${this.id}`, {
                    method:"PUT",
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
    },
    beforeRouteEnter(to, from, next) {
        if(to.params.id !== undefined) {
            fetch(`http://localhost:5000/get/${to.params.id}`, {
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(resp => resp.json())
            .then(data => {
                return next(vm => (vm.title=data.title, vm.body=data.body))
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            return next()
        }
    }
}
</script>

<style>

</style>