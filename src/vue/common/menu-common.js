import MenuData from '../../data/menu-data.js';
export default {
    created() {
        this.notice = MenuData[this.position].notice;
        this.datas = MenuData[this.position].groups;
    },
    methods: {
        
    }
}