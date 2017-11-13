var vm = new Vue({
    //元素
    el: "#app",
    // 数据
    data: {
        list: [],
        datetime: new Date(),
        total: 0,
        checkallflag: false,
        delflag: false,
        curproduct: ""
    },
    // 过滤器
    filters: {
        //时间格式化      
        formatDate: function (dt) {

            var year = dt.getFullYear();
            var month = dt.getMonth() + 1;
            var date = dt.getDate();
            var hour = dt.getHours();
            var minute = dt.getMinutes();
            var second = dt.getSeconds();
            if (month < 10) {
                month = "0" + month;
            }
            if (date < 10) {
                date = "0" + date;
            }
            return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        },
        formatValue: function (value) {
            return "¥ " + value.toFixed(2);
        }
    },
    //钩子函数
    mounted: function () {
        this.$nextTick(function () {
            this.view();
        })
    },
    // 方法
    methods: {
        view: function () {
            var _this = this;
            this.$http.get("list.json").then(function (res) {
                console.log(res);
                _this.list = res.data.list;
                // _this.total = res.data.total;
            })
        },
        changeMoney: function (product, way) {
            if (way > 0) {
                product.spsl++
            }
            else {
                if (product.spsl < 2) {
                    product.spsl = 1
                }
                else {
                    product.spsl--
                }
            }
            this.cacltotal()
        },
        check: function (item) {
            if (typeof item.checked == "undefined") {
                // Vue.set(item,'checked',true)
                this.$set(item, 'checked', true)
            } else {
                item.checked = !item.checked
            }


            var a = this.list.every(function (item, index) {
                return (item.checked)
            })
            if (a) {
                this.checkallflag = true;
            } else {
                this.checkallflag = false;
            }
            
            this.cacltotal()

        },
        checkall: function (flag) {
            this.checkallflag = flag;
            var _this = this;
            this.list.forEach(function (item, index) {
                if (typeof item.checked == "undefined") {
                    _this.$set(item, 'checked', _this.checkallflag)
                } else {
                    item.checked = _this.checkallflag;
                }
            })
            this.cacltotal()
        },
        cacltotal: function () {
            var _this = this;
            this.total = 0;
            this.list.forEach(function (item, index) {
                if (item.checked) {
                    _this.total += item.spje * item.spsl;
                }
            })
        },
        delConfirm: function (item) {
            this.delflag = true;
            this.curproduct = item;
            var index = this.list.indexOf(this.curproduct);
            this.list.splice(index, 1);
            this.delflag = false;

            this.cacltotal()
        }
    }
})



