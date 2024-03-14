document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', () => ({
        users: [],
        isloading: false,
        showaddmodal:false,
        getUsers() {
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                this.users = res.data

            }).finally(() => {
                this.isloading = false
            })
        }


    }))
})