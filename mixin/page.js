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
    getList(type) {
      if (this.loadStatus == 'nomore') {
        return
      }
	  this.loadStatus == 'loading'
      uni.request({
		url: this.pageUrl,
        data: {
          ...this.extra,
          page: this.page,
          pageNum: this.page,
		  type:type,
          pageSize: this.pageSize || 10
        },
        method: this.method || null,
        success: res => {
          this.loadStatus = 'loadmore'
          if (res.data.rows && res.data.rows.length > 0) {
            const pageData = res.data || res.meta
            this.totalPage = Math.ceil(pageData.total / pageData.pageSize)
            if (this.selfDataHander) {
			  //使用者自定义数据处理方法，需要自己concat
              this.selfDataHander(pageData.rows,res.meta)
            } else {
              this.lists = this.lists.concat(pageData.rows)
            }

            if (this.page == this.totalPage) {
              this.loadStatus = 'nomore'
            } else {
              this.page++
            }
          } else {
            this.loadStatus = 'nomore'
          }
        },
		fail(e) {
			console.log("SDCF",e);
		}
      })
    }
  }
}
