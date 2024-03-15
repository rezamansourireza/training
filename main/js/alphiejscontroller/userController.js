document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', () => ({
        users: [],
        pageusers: [],
        isloading: false,
        showaddmodal: false,
        pagecount: 1,
        itemscount: 4,
        currentpage: 1,
        getUsers() {
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                this.users = res.data

            }).finally(() => {
                this.isloading = false
            })
        },

        pagination() {
            this.pagecount = Math.ceil(this.users.lenth / this.itemscount) // 10 / 4 = 3
            let start = (this.currentpage * this.itemscount) - this.itemscount
            let end = this.currentpage * this.itemscount
            this.pageusers = this.users.slice(start,end)
            console.log(this.pageusers);
        }


    }))
})