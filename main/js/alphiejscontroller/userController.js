document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', () => ({
            mainUsers: [],
            users: [],
            pageusers: [],
            isloading: false,
            showaddmodal: false,
            pagecount: 1,
            itemscount: 4,
            currentpage: 1,
            searchchar:"",
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
                this.pageusers = this.users.slice(start, end)
                console.log(this.pageusers);
            },

            nextpage() {
                this.currentpage++
                if (this.currentpage > this.pagecount) {
                    this.currentpage = this.pagecount
                }
                this.pagination()
            },

            prevpage() {
                this.currentpage--
                if (this.currentpage > 1) {
                    this.currentpage = 1
                }
                this.pagination()
            },
            handlechangeitemscount(value) {
                if (value < 1) this.itemscount = 1
                if (value > this.users.length) this.itemscount = this.users.length
            },

            handlesearch(value) {
                this.users = this.mainUsers.filter(users => (users.name.includes(e.value)) || users.username.includes(e.value) || users.email.includes(e.value))
                this.currentpage = 1
                this.pagination()
            }
    }))
})