const app = getApp();

Page({
  data: {
    hotFoods: []
  },

  onLoad() {
    // 获取热销商品（销量前3）
    let allFoods = [];
    app.globalData.menuData.forEach(category => {
      allFoods = allFoods.concat(category.foods);
    });
    
    const hotFoods = allFoods.sort((a, b) => b.sales - a.sales).slice(0, 3);
    this.setData({ hotFoods });
  },

  goToMenu() {
    wx.switchTab({
      url: '/pages/menu/menu'
    });
  },

  goToOrder() {
    wx.switchTab({
      url: '/pages/order/order'
    });
  }
});