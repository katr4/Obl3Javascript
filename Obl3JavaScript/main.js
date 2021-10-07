Vue.createApp({
    data() {
        return {
            name: null,
            nameUpper: null,
            nameLower: null,
        }
    },
    methods: {
        showIt(name) {
            this.nameUpper = name.toUpperCase();
            this.nameLower = name.toLowerCase();
        },
        clear() {
            this.name = null;
            this.nameUpper = null;
            this.nameLower = null;
        },
    }
}).mount("#app")