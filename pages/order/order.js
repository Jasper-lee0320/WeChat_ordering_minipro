const app = getApp();

Page({
  data: {
    orders: []
  },

  onShow() {
    this.setData({
      orders: app.globalData.orders
    });
  },

  goToMenu() {
    wx.switchTab({
      url: '/pages/menu/menu'
    });
  },

  reorder(e) {
    const order = e.currentTarget.dataset.order;
    
    // 清空购物车
    app.clearCart();
    
    // 将订单商品重新加入购物车
    order.items.forEach(item => {
      for (let i = 0; i < item.count; i++) {
        app.addToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          desc: item.desc
        });
      }
    });
    
    // 跳转到菜单页
    wx.switchTab({
      url: '/pages/menu/menu'
    });
  }
});