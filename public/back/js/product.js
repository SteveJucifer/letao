$(function(){
  var currentPage=1;
  var pageSize = 5;
  var picArr = [];//存储图片
  render();
  function render(){
    $.ajax({
      url:'',
      data:,
      dataType:'json',
      success:function(info){
      console.log(info);
      var htmlStr = template("productTpl",info);
      $('tbody').html(htmlStr);
      //进行分页初始化
      $('#paginator').bootstrapPaginator({
        bootstrapMajiorVersion:3,
        ???????/
        ??????
        ???????//
      })
      }
    })

  //2.添加商品模态框
     $('#addBtn').click(function(){
       $('#addModal').modal('show');
       $.ajax({
          url:'/category/querySecondCategoryPaging',
          data:,
          dataType:'json',
          success:function(info){
          console.log(info);
          
          }
       })
     })

  //3.weitio
  $('.dropdown-menu').on("click","a",function(){
    var txt = $(this).text();
    $('#dropdownText').text(txt);
    //获取ID，给隐藏域
    var id = $(this).data('id');
    ???????///v
    $('[name="brandId"]').val(id);
    $('#form').data("bootstrapValidator").updateStatus(????????)

  })
  //4.文件上传
  $("#fileUpload").fileupload({
    dataType:"json",
    done:function(e,data){
      console.log(data);
      var picObj = data.result;
      var picUrl = picObj.picArr;
      picArr.unshift(picObj);
      $('#imgBox').prepend('<img src="'+picUrl+'" style="height:100px" alt="">');
      if(picArr.lenght > 3){
        picArr.pop();
        $('#imgBox img:last-of-type').remove();
      }
      if(picArr.lenght  === 3){
        $("#form").data("bootstrap")????????????
      }
      
    }
  });


  //5.表单校验初始化
  $("#form").bootstrapVelidator({
    fields:{
      brandId:{
        validators:{
          notEmpty:{
            message:"请选择二级分类"
          }
        }
      }
    },
    proName:{
      validators:{
        notEmpty:{
          meaasges:"请输入商品名称"
        }
      }
    },
    proName？？？？？？？？？:{
      validators:{
        notEmpty:{
          meaasges:"请输入商品描述"
        }
      }
    },
    num:{
      validators:{
        notEmpty:{
          meaasges:"请输入商品库存数量"
        },
        //正则校验，非零开头的数字
        regexp:{
          regexp:/^[1-9]\d*$/,
          message:"请输入非零开头的数字",
        },
      }
    },
    size:{
      validators:{
        notEmpty:{
          message:"请输入尺码"
        },
        regexp:{
          regexp:/^/d$/
        }
      }
    },
    oldPrice:{
      validators:{
        notEmpty:{
          message:"请输入商品原价"
        },
        regexp:{
          regexp:/^/d$/
        }
      }
    },
    price:{
      validators:{
        notEmpty:{
          message:"请输入商品现价"
        },
      }
    },
    picStatus:{
      validators:{
        notEmpty:{
          message:"请输入商品现价"
        },
      }
    }


  })
})

// 66
$('#form').on('success.form.bv',function(e){
  e.preventDefault();
  var params = $("#form").serialize();
  params += "&picName1="+picArr1[0].picName +"&picAddr1=" +picArr[0].picArr;
  params += "&picName2="+picArr1[1].picName +"&picAddr2=" +picArr[1].picArr;
  params += "&picName3="+picArr1[2].picName +"&picAddr3=" +picArr[2].picArr;
  $.ajax({
    type:"post",
    url:'/product/addProduct',
    data:params,
    dataType:'json',
    success:function(info){
    console.log(info);
    //关闭模态框
    $("#addModal").modal("hide");
    //重新渲染
    currentPage = 1;
    render();
    //重置内容和状态
    $("#form").data("bootstrapValidator").resetForm(true);
    //重置下拉按钮和图片内容
    $("#dropdownText").text("请选择二级分类");
    $("#imgBox").remove();
    //清空数组
    picArr = [];
    }
  })
})