<template>
  <div class="page">
      <div class="wrapper">
        <el-row>
            <el-col :xs="24" :sm="4" :md="18" :lg="18" :xl="18">
              <div class="main">
                <list_home :items="items"></list_home>
              </div>
            </el-col>
            <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
              <div class="aside">
                <div class="card">
                
                  <img class="pic" src="../../static/img/leader.png" alt="">
                  <div class="row">
                    <p class="name">邢浩东</p>
                    <p class="saying">专注前端开发，坚持每周更新分享博客，做一个梦想的码农；花有重开日，人无再少年。</p>
                    <div class="icons">
                      <a href="https://github.com/kuaishou" target="_blank"><i class="iconfont icon-github"></i></a>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <p class="title">FRIENDS</p>
                  <div class="row">
                    <a class="link" href="https://www.yangyuetao.cn" target="_blank">哈维</a>
                    <a class="link" href="https://www.yangyuetao.cn" target="_blank">的光和热</a>
                    <a class="link" href="https://www.yangyuetao.cn" target="_blank">Secret Blog</a>
                    <a class="link" href="https://www.yangyuetao.cn" target="_blank">Secret Blog</a>
                    <a class="link" href="https://www.yangyuetao.cn" target="_blank">Secret Blog</a>
                    <a class="link" href="https://www.yangyuetao.cn" target="_blank">Secret Blog</a>
                  </div>
                </div>
              </div>
            </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import List_home from "../components/list_home"
import {webUrl} from "../../static/js/public.js"
export default {
  data(){
    return{
      items:[]
    }
  },
  components:{
    List_home,
  },
  created(){
    this.$axios.post(webUrl+'articleList')
      .then((res)=>{
        this.items=res.data.reverse();
      })
  }
}
</script>

<style lang="scss" scoped>
.main{
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  margin:0 10px;
  padding: 10px;
}
.aside{
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  .card{
    border-top: 1px solid #eee;
    text-align: center;
    .title{
      padding: 10px;
      font-weight: 600;
      color:#808080;
      margin-bottom: 10px;
    }
    .pic{
      width: 70%;
      border-radius: 50%;
      margin-top: 20px;
    }
    .row{
      padding: 0 10px;
      .saying{
        color:#bfbfbf;
        padding: 1rem;
      }
      .name{
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        color: #2c3e50;
      }
      .icons{
        padding:10px 0;
        .iconfont{
          transition: all .3s;
          margin: 5px;
          color: #000;
          font-size: 20px;
          background-color: rgba(200, 200, 200, 0.3);
          padding: 8px;
          border-radius: 50%;
          &:hover{            
            color:#fff;
            background-color: rgba(0, 133, 166, 0.8);
            border-radius: 5px;          
          }
        }
      }

      &>.link{
        color:#bfbfbf;
        display: inline-block;
        padding: 5px;
        transition: all .3s;        
        &:hover{
          color: #0085a1;
        }
      }
    }
  }
}

@media (min-width: 768px) {//pc
  .main{
    margin:0 20px;
    padding: 20px;
  }
}
</style>
