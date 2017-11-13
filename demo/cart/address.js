var vm = new Vue({
	//元素
	el: "#wrap",
	// 数据
	data: {
		limit: 3,
		currentIndex: 0,
		addressList: []
	},
	// 过滤器
	filters: {

	},
	computed: {
		filterAddress: function() {
			return this.addressList.slice(0, this.limit);
		}
	},
	//钩子函数
	mounted: function() {
		this.$nextTick(function() {
			this.view();
		})
	},

	// 方法
	methods: {
		view: function() {
			var _this = this;
			this.$http.get("address.json").then(function(res) {
				console.log(res);
				_this.addressList = res.data.list;
			})
		},
		loadMore: function() {
			this.limit = this.addressList.length;
		},
		setDefault: function(addressID) {
			this.addressList.forEach(function(address, index) {
				if(address.addressID == addressID) {
					address.isDefault = true;
				} else {
					address.isDefault = false;
				}
			})

		}

	}
})