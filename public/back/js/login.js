$(function(){
  $("#form").bootstrapValidator({
    //配置校验字段（在input中配置name）
    fields:{
      username:{
        //进行多个规则配置
        validators:{
          //非空校验
          notEmpty:{
            message:"用户不能为空"
          },
          //长度校验
          stringLength:{
            min:2,
            max:6,
            massage:"用户名必须是2-6位"

        }
        
      },

      password:{
        validators:{
          notEmpty:{
            message:"密码不能为空"
          },
          stringLength:{
            meassage:"密码必须为12位"
          },
          //正则                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
          regexp:{
            meassage:{

            }
          }
        }
      }
    }

  })
})