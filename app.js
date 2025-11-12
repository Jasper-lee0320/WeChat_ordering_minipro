App({
  globalData: {
    cart: [],
    orders: [],
    menuData: [
      {
        id: 1,
        name: "热销推荐",
        foods: [
          { id: 101, name: "招牌炒饭", price: 18, image: "/images/food1.jpg", desc: "店内招牌，香味扑鼻", sales: 999 },
          { id: 102, name: "红烧牛肉面", price: 25, image: "/images/food2.jpg", desc: "牛肉软烂，汤汁浓郁", sales: 888 },
          { id: 103, name: "麻婆豆腐", price: 16, image: "/images/food3.jpg", desc: "麻辣鲜香，下饭神器", sales: 666 }
        ]
      },
      {
        id: 2,
        name: "主食类",
        foods: [
          { id: 201, name: "扬州炒饭", price: 20, image: "/images/food4.jpg", desc: "粒粒分明，配料丰富", sales: 456 },
          { id: 202, name: "牛肉炒面", price: 22, image: "/images/food5.jpg", desc: "面条劲道，牛肉嫩滑", sales: 321 },
          { id: 203, name: "海鲜粥", price: 28, image: "/images/food6.jpg", desc: "海鲜新鲜，粥底香滑", sales: 234 }
        ]
      },
      {
        id: 3,
        name: "热菜类",
        foods: [
          { id: 301, name: "糖醋排骨", price: 38, image: "/images/food7.jpg", desc: "酸甜适口，外酥里嫩", sales: 567 },
          { id: 302, name: "宫保鸡丁", price: 28, image: "/images/food8.jpg", desc: "川菜经典，麻辣鲜香", sales: 432 },
          { id: 303, name: "清蒸鲈鱼", price: 48, image: "/images/food9.jpg", desc: "肉质鲜嫩，原汁原味", sales: 123 }
        ]
      },
      {
        id: 4,
        name: "汤品类",
        foods: [
          { id: 401, name: "西红柿鸡蛋汤", price: 12, image: "/images/food10.jpg", desc: "酸甜开胃，营养丰富", sales: 789 },
          { id: 402, name: "冬瓜排骨汤", price: 25, image: "/images/food11.jpg", desc: "清淡养生，汤鲜味美", sales: 345 }
        ]
      },
      {
        id: 5,
        name: "饮品类",
        foods: [
          { id: 501, name: "鲜榨橙汁", price: 15, image: "/images/drink1.jpg", desc: "新鲜现榨，维C满满", sales: 999 },
          { id: 502, name: "柠檬茶", price: 12, image: "/images/drink2.jpg", desc: "酸甜解渴，清新怡人", sales: 876 },
          { id: 503, name: "可乐", price: 8, image: "/images/drink3.jpg", desc: "经典碳酸饮料", sales: 543 }
        ]
      }
    ]
  },

  // 添加到购物车
  addToCart(food) {
    let cart = this.globalData.cart;
    let existItem = cart.find(item => item.id === food.id);
    
    if (existItem) {
      existItem.count++;
    } else {
      cart.push({
        ...food,
        count: 1
      });
    }
    
    this.globalData.cart = cart;
    wx.setStorageSync('cart', cart);
    
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 1500
    });
  },

  // 从购物车减少
  removeFromCart(foodId) {
    let cart = this.globalData.cart;
    let index = cart.findIndex(item => item.id === foodId);
    
    if (index > -1) {
      if (cart[index].count > 1) {
        cart[index].count--;
      } else {
        cart.splice(index, 1);
      }
    }
    
    this.globalData.cart = cart;
    wx.setStorageSync('cart', cart);
  },

  // 清空购物车
  clearCart() {
    this.globalData.cart = [];
    wx.removeStorageSync('cart');
  },

  // 计算购物车总价
  calculateTotal() {
    return this.globalData.cart.reduce((total, item) => {
      return total + (item.price * item.count);
    }, 0);
  },

  onLaunch() {
    // 从本地存储读取购物车数据
    const cart = wx.getStorageSync('cart');
    if (cart) {
      this.globalData.cart = cart;
    }
    
    // 从本地存储读取订单数据
    const orders = wx.getStorageSync('orders');
    if (orders) {
      this.globalData.orders = orders;
    }
  }
});