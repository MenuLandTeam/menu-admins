
export default {
    beforeCreate() {

    },
    computed : {

    },
    mounted() {
        // if (!window.axios.defaults.headers.common['Authorization'] ){
            window.axios.defaults.headers.common['Authorization'] = "Bearer "

        // }

    }

}