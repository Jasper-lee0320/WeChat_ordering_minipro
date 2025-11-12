const app = getApp();

Page({
  data: {
    cart: [],
    totalPrice: 0,
    diningType: 'dine-in',
    tableNumber: '',
    remark: ''
  },

  onLoad() {
    const cart = app.globalData.cart;
    const totalPrice = app.calculateTotal();
    
    this.setData({
      cart,
      totalPrice
    });
  },

  selectDiningType(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({ diningType: type });
  },

  inputTableNumber(e) {
    this.setData({ tableNumber: e.detail.value });
  },

  inputRemark(e) {
    this.setData({ remark: e.detail.value });
  },

  submitOrder() {
    // 验证
    if (this.data.diningType === 'dine-in' && !this.data.tableNumber) {
      wx.showToast({
        title: '请输入桌号',
        icon: 'none'
      });
      return;
    }

    // 生成订单
    const order = {
      id: Date.now(),
      orderNo: 'ORD' + Date.now(),
      items: this.data.cart,
      totalPrice: this.data.totalPrice,
      diningType: this.data.diningType,
      tableNumber: this.data.tableNumber,
      remark: this.data.remark,
      status: '已下单',
      createTime: new Date().toLocaleString()
    };

    // 保存订单
    let orders = app.globalData.orders;
    orders.unshift(order);
    app.globalData.orders = orders;
    wx.setStorageSync('orders', orders);

    // 清空购物车
    app.clearCart();

    // 显示成功提示
    wx.showToast({
      title: '下单成功',
      icon: 'success',
      duration: 2000
    });

    // 跳转到订单页
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/order/order'
      });
    }, 1500);
  }
});