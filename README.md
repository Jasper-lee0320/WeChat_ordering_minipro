# 🍽️ 微信小程序 - 餐厅点餐系统

一个简单易用的微信小程序点餐系统，适合餐厅、咖啡店等场景使用。无需支付接口，专注于点餐流程。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![WeChat](https://img.shields.io/badge/WeChat-MiniProgram-green.svg)
![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)

## ✨ 功能特性

- 🏠 **首页展示** - 店铺信息、轮播图、热销推荐
- 📋 **菜单浏览** - 分类导航、菜品列表、详细信息
- 🛒 **购物车管理** - 添加/删除商品、数量调整、实时计算
- 📝 **订单确认** - 用餐方式选择、桌号输入、备注信息
- 📦 **订单查看** - 订单历史、订单详情、再来一单
- 💾 **数据持久化** - 本地存储购物车和订单数据

## 📸 界面预览

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   首  页    │  │   点餐页    │  │   订单页    │
│             │  │             │  │             │
│  店铺信息   │  │  分类 │菜品  │  │  订单列表   │
│  轮播图     │  │  ────┼────  │  │  订单详情   │
│  热销推荐   │  │  菜品 │详情  │  │  再来一单   │
│             │  │      │      │  │             │
│  开始点餐   │  │   购物车    │  │             │
└─────────────┘  └─────────────┘  └─────────────┘
```

## 🚀 快速开始

### 前置要求

- 微信开发者工具
- 微信小程序账号（或使用测试号）
- 基础的 JavaScript 知识（可选）

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/Jasper-lee0320/wechat-restaurant-ordering.git
   ```

2. **打开项目**
   - 启动微信开发者工具
   - 导入项目文件夹
   - 填写 AppID 或选择测试号

3. **运行项目**
   - 点击编译按钮
   - 在模拟器中查看效果

4. **详细教程**
   - 查看 [完整操作指南](./GUIDE.md)

## 📁 项目结构

```
wechat-restaurant-ordering/
├── pages/                  # 页面文件
│   ├── index/             # 首页
│   │   ├── index.js       # 页面逻辑
│   │   ├── index.json     # 页面配置
│   │   ├── index.wxml     # 页面结构
│   │   └── index.wxss     # 页面样式
│   ├── menu/              # 点餐页
│   ├── order/             # 订单页
│   └── orderDetail/       # 订单确认页
├── images/                 # 图片资源
├── app.js                  # 全局逻辑
├── app.json                # 全局配置
├── app.wxss                # 全局样式
├── project.config.json     # 项目配置
├── sitemap.json            # 索引配置
├── README.md               # 项目说明
└── GUIDE.md                # 操作指南
```

## 🔧 配置说明

### 修改店铺信息

编辑 `pages/index/index.wxml` 文件：

```xml
<view class="shop-name">美味餐厅</view>
<view class="shop-desc">用心做好每一道菜</view>
<view class="shop-time">营业时间：10:00 - 22:00</view>
<view class="shop-address">📍 北京市朝阳区美食街88号</view>
<view class="shop-phone">📞 400-888-8888</view>
```

### 修改菜品数据

编辑 `app.js` 中的 `globalData.menuData`：

```javascript
menuData: [
  {
    id: 1,
    name: "热销推荐",
    foods: [
      { 
        id: 101, 
        name: "招牌炒饭", 
        price: 18, 
        image: "/images/food1.jpg", 
        desc: "店内招牌，香味扑鼻", 
        sales: 999 
      }
    ]
  }
]
```

### 修改主题颜色

在 `app.json` 中修改导航栏颜色：

```json
{
  "window": {
    "navigationBarBackgroundColor": "#ff6b6b"
  }
}
```

全局搜索替换 `#ff6b6b` 为您想要的颜色。

## 📱 功能说明

### 首页
- 店铺基本信息展示
- 轮播图广告位
- 热销商品推荐
- 快捷入口导航

### 点餐页
- 左右联动的分类导航
- 商品列表展示
- 购物车实时更新
- 商品数量控制

### 订单确认页
- 用餐方式选择（堂食/打包）
- 桌号输入（堂食时）
- 订单详情确认
- 备注信息输入

### 订单页
- 历史订单查看
- 订单详情展示
- 再来一单功能

## 🎨 自定义开发

### 添加新页面

1. 在 `pages/` 目录创建新文件夹
2. 创建 `.js`, `.json`, `.wxml`, `.wxss` 四个文件
3. 在 `app.json` 的 `pages` 数组中添加页面路径

### 添加新功能

- **添加用户登录**：使用 `wx.login()` 和 `wx.getUserInfo()`
- **连接后端**：使用 `wx.request()` 调用 API
- **添加支付**：集成微信支付 SDK

### 使用组件库

推荐使用：
- [Vant Weapp](https://vant-contrib.gitee.io/vant-weapp/)
- [ColorUI](https://github.com/weilanwl/ColorUI)

## 🐛 常见问题

### 图片不显示？
- 检查图片路径是否正确
- 确保图片文件存在
- 可以先使用占位图测试

### 购物车数据丢失？
- 数据存储在本地，卸载小程序会丢失
- 需要永久保存请连接后端数据库

### 无法真机预览？
- 检查是否使用正式 AppID
- 测试号功能有限制
- 确保手机微信已登录

更多问题请查看 [详细指南](./GUIDE.md)

## 📈 未来计划

- [ ] 添加用户登录系统
- [ ] 集成微信支付
- [ ] 添加优惠券功能
- [ ] 添加会员系统
- [ ] 添加菜品评价
- [ ] 后台管理系统
- [ ] 数据统计分析

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 License

本项目采用 MIT 协议 - 查看 [LICENSE](LICENSE) 了解详情

## 👨‍💻 作者

**Jasper Lee**
- GitHub: [@Jasper-lee0320](https://github.com/Jasper-lee0320)

## 🙏 致谢

- 感谢微信小程序官方文档
- 感谢开源社区的支持

## 📞 联系方式

如有问题或建议，欢迎：
- 提交 [Issue](https://github.com/Jasper-lee0320/wechat-restaurant-ordering/issues)
- 发送邮件（如有公开邮箱）

---

⭐ 如果这个项目对您有帮助，请给一个 Star！