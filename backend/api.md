# 食谱
[根据食材得到菜肴](#根据食材得到菜肴)
[添加菜谱](#添加菜谱)
[搜索菜(模糊搜索)](#搜索菜(模糊搜索))
[根据菜查询菜谱](#根据菜查询菜谱)
[根据食材查询图片](#根据食材查询图片)
### 根据食材得到菜肴

`post /api/v1/dish/predict`

request
```json
[
  "海拉鲁蘑菇",
  "岩盐",
  "冰冷鳟鱼"
]
```
response
```js
{
  "success": true,
  "data": {
    "dish": "冰冷岩烤鱼",
    "detail": "具有能承受酷暑的耐热效果Lv1。撒上天然的岩盐烤成的简单鱼肉菜肴，只是烤了一下就非常美味。",
    "img": "https://imgurl"
  }
}
```

### 添加菜谱

request
```js
{
  "foods": [
    "海拉鲁蘑菇",
    "苹果"
  ],
  "dish": {
    "name": "炖水果",
    "detail": "" //可为空
  }
}
```
response
```js
{
  "success": true,
}
```

### 搜索菜(模糊搜索)
request
```js
{
  "dish": "烤"
}
```
response
```js
{
  "success": true,
  "data": [
    {
      "name": "烤肉串",
      "detail": "只是烤了一下，可以恢复心心"
    },
    {
      "name": "岩盐烤鱼",
      "detail": "撒上天然的岩盐烤成的简单鱼肉菜肴，只是烤了一下就非常美味。"
    }
  ],
  "skip": 10
}
```

### 根据菜查询菜谱
request
```js
{
  "dish": "烤肉串"
}
```
response
```json
{
  "success": true,
  "data": [
    {
      "name": "岩盐烤鱼",
      "foods": ["鲈鱼", "三色鲤鱼"],
      "detail": "撒上天然的岩盐烤成的简单鱼肉菜肴，只是烤了一下就非常美味。",
      "img": "https://xzvxcv",
      "sort": 1 // 置顶
    },
    {
      "name": "岩盐烤鱼",
      "foods": ["三色鲤鱼"],
      "detail": "撒上天然的岩盐烤成的简单鱼肉菜肴，只是烤了一下就非常美味。",
      "img": "https://xzvxcv",
      "sort": 0
    }
  ],
  "loadMoreKey": "5xioddfjlsajjkl" // 分页
}
```

### 根据食材查询图片
request
```js
[
  "鲈鱼",
  "三色鲤鱼"
]
```
response
```js
{
  "success": true,
  data: [
    {
      "food": "鲈鱼"
      "img": "http://sdfasdfasd"
    },
    {
      "food": "三色鲤鱼"
      "img": "http://sdfasdfasd"
    }
  ]
}
```