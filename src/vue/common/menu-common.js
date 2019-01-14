import MenuData from '../../data/menu-data.js';
export default {
    created() {
        this.datas = MenuData[this.position].groups;
    },
    methods: {
        
    }
}