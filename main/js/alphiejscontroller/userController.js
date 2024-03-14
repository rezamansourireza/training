document.addEventListener('alpine:init', () => {
    Alpine.data('userData', () => ({
        users: [],
        isloading: false,
        getUsers() {
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                this.user = res.data
                this.isloading = false
                console.log(res);
            })
        }


    }))
})