# 图片资源说明

## 需要的图片文件

### TabBar 图标（必需）
- `home.png` - 首页图标（未选中）80x80px
- `home-active.png` - 首页图标（选中）80x80px
- `menu.png` - 菜单图标（未选中）80x80px
- `menu-active.png` - 菜单图标（选中）80x80px
- `order.png` - 订单图标（未选中）80x80px
- `order-active.png` - 订单图标（选中）80x80px

### 功能图标
- `cart.png` - 购物车图标 60x60px
- `empty.png` - 空状态图标 200x200px
- `icon-menu.png` - 菜单入口图标 80x80px
- `icon-order.png` - 订单入口图标 80x80px

### 轮播图
- `banner1.jpg` - 轮播图1 750x400px
- `banner2.jpg` - 轮播图2 750x400px

### 菜品图片
- `food1.jpg` ~ `food11.jpg` - 菜品图片 400x300px
- `drink1.jpg` ~ `drink3.jpg` - 饮品图片 400x300px

## 图片来源建议

### 免费图库
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://pexels.com/
- **Pixabay**: https://pixabay.com/

### 占位图生成
- **Placeholder.com**: https://placeholder.com/
- 示例：`https://via.placeholder.com/400x300?text=Food`

### 图标资源
- **IconFont**: https://www.iconfont.cn/
- **Flaticon**: https://www.flaticon.com/

## 临时方案

如果暂时没有图片，可以：
1. 使用纯色背景代替
2. 注释掉 `app.json` 中的 `iconPath` 配置
3. 使用网络图片 URL（需配置域名白名单）