const app = getApp();

Page({
  data: {
    categories: [],
    currentCategory: 0,
    toView: 'category-0',
    cart: [],
    cartCount: 0,
    cartTotal: 0,
    showCart: false
  },

  onLoad() {
    this.setData({
      categories: app.globalData.menuData
    });
  },

  onShow() {
    this.updateCart();
  },

  selectCategory(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentCategory: index,
      toView: `category-${index}`
    });
  },

  addToCart(e) {
    const food = e.currentTarget.dataset.food;
    app.addToCart(food);
    this.updateCart();
  },

  increaseCount(e) {
    const foodId = e.currentTarget.dataset.id;
    const food = this.findFoodById(foodId);
    if (food) {
      app.addToCart(food);
      this.updateCart();
    }
  },

  decreaseCount(e) {
    const foodId = e.currentTarget.dataset.id;
    app.removeFromCart(foodId);
    this.updateCart();
  },

  findFoodById(id) {
    for (let category of this.data.categories) {
      for (let food of category.foods) {
        if (food.id === id) {
          return food;
        }
      }
    }
    return null;
  },

  getItemCount(foodId) {
    const item = this.data.cart.find(item => item.id === foodId);
    return item ? item.count : 0;
  },

  updateCart() {
    const cart = app.globalData.cart;
    const cartCount = cart.reduce((sum, item) => sum + item.count, 0);
    const cartTotal = app.calculateTotal();
    
    this.setData({
      cart,
      cartCount,
      cartTotal
    });
  },

  showCartDetail() {
    this.setData({ showCart: true });
  },

  hideCartDetail() {
    this.setData({ showCart: false });
  },

  stopPropagation() {
    // 阻止事件冒泡
  },

  clearCart() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空购物车吗？',
      success: (res) => {
        if (res.confirm) {
          app.clearCart();
          this.updateCart();
          this.setData({ showCart: false });
        }
      }
    });
  },

  goToConfirm() {
    if (this.data.cart.length === 0) {
      wx.showToast({
        title: '购物车为空',
        icon: 'none'
      });
      return;
    }
    
    wx.navigateTo({
      url: '/pages/orderDetail/orderDetail'
    });
  }
});