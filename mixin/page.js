export const listMixin = {
  data() {
    return {
      page: 1,
      totalPage: 0,
      loadStatus: 'loadmore',
      lists: [],
      extra: {} // 额外的列表参数，默认进行展开
    }
  },
  onReachBottom() {
    if (this.reachBottom === false) {
      console.log('user reject onReachBottom')
    } else {
      this.getList()
    }
  },
  methods: {
    resetList(extra) {
      this.page = 1
      this.totalPage = 0
      this.loadStatus = 'loadmore'
      this.lists = []
      if (extra === true) {
        this.extra = {}
      }
    },
    getList() {
      if (this.loadStatus == 'nomore') {
        return
      }
	  this.loadStatus == 'loading'
      uni.request({
		url: this.pagedUrl
        data: {
          ...this.extra,
          page: this.page,
          pageNum: this.page,
          pageSize: this.pageSize || 10
        },
        method: this.method || null,
        success: data => {
          this.loadStatus = 'loadmore'
          if (data.lists && data.lists.length > 0) {
            const pageData = data.pageData || data.meta
            this.totalPage = Math.ceil(pageData.total / pageData.size)

            if (this.selfDataHander) {
			  //使用者自定义数据处理方法，需要自己concat
              this.selfDataHander(data.lists,data.meta)
            } else {
              this.lists = this.lists.concat(data.lists)
            }

            if (this.page == this.totalPage) {
              this.loadStatus = 'nomore'
            } else {
              this.page++
            }
          } else {
            this.loadStatus = 'nomore'
          }
        }
      })
    }
  }
}
