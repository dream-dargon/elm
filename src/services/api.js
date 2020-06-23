export default {
  guess: '/v1/cities',//获取当前城市
  hot: '/v1/cities',//获取热门城市
  group: '/v1/cities',//获取全部城市
  citySearch: '/v1/pois',//获取当前城市的店铺
  //分类导航
  navList: '/v2/index_entry?geohash=31.22299,121.36025&group_type=1&flags[]=F',
  //附近商家
  shop: '/shopping/restaurants?latitude=31.22299&longitude=121.36025&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=',

}
