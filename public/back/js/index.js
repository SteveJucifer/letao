//柱状图
// 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.querySelector(".echarts_left"));

 // 指定图表的配置项和数据
 var option = {
    //标题
     title: {
         text: '2018年注册人数'
     },
     //图例
     tooltip: {},
     legend: {
         data:['人数','销量']
         
     },
     //x轴
     xAxis: {
         data: ["1月","2月","3月","4月","5月","6月"]
     },
     //y轴
     yAxis: {},
     //柱状
     series: [{
         name: '人数',
         type: 'bar',
         data: [5, 20, 36, 10, 10, 20]
     },{
         name: '销量',
         type: 'bar',
         data: [5, 20, 36, 10, 10, 20]
     }]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);

//饼状图
var myChart = echarts.init(document.querySelector('.echarts_right'));

        // 指定图表的配置项和数据
        var option2 =  {
          title : {
              text: '热门品牌销售',
              subtext: '2018年11月',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              //{a}（系列名称）  {b}（数据项名称）  {c}（数值）  {d}（百分比）
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['耐克','阿迪','新百伦','范斯','李宁']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'耐克'},
                      {value:310, name:'阿迪'},
                      {value:234, name:'新百伦'},
                      {value:135, name:'范斯'},
                      {value:1548, name:'李宁'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
          

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option2);