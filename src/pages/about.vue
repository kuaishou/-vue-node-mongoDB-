<template>
  <div class="page" id="page" @click="clickTips">
      <div class="wrapper">
        <el-row>
            <el-col :xs="24" :sm="4" :md="18" :lg="18" :xl="18">
              <div class="main">
                <p class="title">个人中心</p>
                <!-- <list_article :items="items" type="archives"></list_article> -->
                <div class="card">
                  <p class="card-title" id="anchor-about">关于我</p>
                  <p class="txt">2014年大学毕业后，孤身南下深圳找工作，从事过销售、游泳教练、软件测试等职业，然都是生计所迫无一热爱；2015年公司急缺前端开发，自告奋勇转型前端开发</p>
                  <p class="txt">自学前端开发：刚学习前端开发边一发不可收拾；甚是喜欢，大学学的是体育教育，大学期间自学过UI设计和计算机；仅凭着这些记忆开始奋发图强；看书、教学视频、自己做练习；三个月后学成出师；正式开发公司官网前端项目；前端之路正式开启.....</p>
                  <p class="txt">一路走来做过很多项目也经历过很多坑，从一开始简单的HTML+css+js的网页到bootstrap、jquery、easyUI、Dcloud、APICloud的APP、VUE全家桶、ElementUI、等 </p>
                  <p class="txt">所做项目经历了公司官网、后台管理平台、景区售票系统、电商网站、政府网格化管理系统、政府戒毒所APP、停车扣费APP、交通管理系统数据可视化、年会抽奖、小程序：东萌电影、公众号：硅谷之光、保险商城等</p>
                  <p class="txt">人生漫漫长路，每天进步一点点；海鳖曾欺井内蛙，大鹏张翅绕天涯；技术之路唯有不断学习，每日三省吾身才能立于不败之地。</p>
                  <p class="txt">坚持不懈，不可懈怠。</p>
                  <p class="txt">十年磨一剑，霜刃未曾试。今日把示君，谁有不平事。</p>
                </div>
                <div class="card">
                  <p class="card-title" id="anchor-contact">网站开发者</p>
                  <el-container>
                       <el-aside width="100px"> <img class="pic" src="../../static/img/team-leader-xhd.jpg" alt=""></el-aside>
                       <el-main>
                         <p class="team-title">前端开发：邢浩东</p>
                         <p>网站设计，开发规划。规划网站发展方向，探索商业模式。</p>
                         </el-main>
                  </el-container>
                  <el-container>
                       <el-aside width="100px"> <img class="pic" src="../../static/img/team-ui-lwd.jpg" alt=""></el-aside>
                       <el-main>
                         <p class="team-title">UI设计：刘卫东</p>
                         <p>网站设计，网站交互设计。美术设计。设计更美的网站。</p>
                         </el-main>
                  </el-container>
                  <el-container>
                       <el-aside width="100px"> <img class="pic" src="../../static/img/team-wjs.jpg" alt=""></el-aside>
                       <el-main>
                         <p class="team-title">后端开发：王金生</p>
                         <p>java工程师，网站后台设计，研发更有意义的技术。</p>
                         </el-main>
                  </el-container>
                </div>
                <div class="card">
                  <p class="card-title" id="anchor-us">关于本站</p>
                  <p class="txt">本站主要是前端技术分享；记录平时工作中遇到的前端技术问题及解决方案；分享一下学习前端技术心得</p>
                   <p class="txt">花有重开日，人无再少年；珍惜每一天；做个有梦想的码农</p> 
                  <!-- <p class="txt">这个博客主要模仿<a href="https://www.yangyuetao.cn" target="_blank">https://www.yangyuetao.cn</a>感谢大佬！！</p>
                  <p class="txt">希望我能也坚持学习分享技术。</p> -->
                </div>
                <div class="card">
                  <p class="card-title" id="anchor-friend">学习参考</p>
                  <div class="row-link">
                    <a class="link" href="http://www.ruanyifeng.com/home.html" target="_blank">阮一峰</a>|
                    <a class="link" href="http://jspang.com" target="_blank">技术胖视频</a>|
                    <a class="link" href="https://www.zhangxinxu.com/wordpress/" target="_blank">张鑫旭博客</a>|
                    <a class="link" href="https://lmzdx.com" target="_blank">绿帽子大学</a>|
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
              <div class="aside">
                <p class="title">导航</p>
                <!-- <list_content :items="items"></list_content> -->
                  <div class="content">
                    <ul>
                      <li><a href="javascript:;" class="title" @click="anchor('about')">关于我</a></li>
                      <li><a href="javascript:;" class="title" @click="anchor('contact')">网站开发者</a></li>
                      <li><a href="javascript:;" class="title" @click="anchor('us')">关于本站</a></li>
                      <li><a href="javascript:;" class="title" @click="anchor('friend')">学习参考</a></li>
                    </ul>
                  </div>
              </div>
            </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import { anchor } from "../../static/js/public.js";

const arr = [
  "萌萌哒",
  "加油",
  "努力",
  "奋斗",
  "坚持",
  "美好的一天",
  "积极向上的心",
  "每天进步一点点"
];
const setStyle = (obj, json) => {
  for (var i in json) {
    obj.style[i] = json[i];
  }
};

let index = 0;

export default {
  mixins: [anchor],
  data() {
    return {
      // items:[]
    };
  },
  components: {},
  created() {
    // this.$http.get('/api/goods').then((data)=>{
    //   this.items=data.body.data;
    // })
  },
  methods: {
    clickTips: function(e) {
      if (index >= arr.length) {
        index = 0;
      }
      let newA = document.createElement("a");
      newA.className = "click_tips";
      let styles = {
        left: `${e.pageX}px`,
        top: `${e.pageY - 20}px`
      };
      newA.innerHTML = arr[index];
      setStyle(newA, styles);
      document.getElementById("page").appendChild(newA);
      index++;
      newA.addEventListener("animationend", () => {
        document.getElementById("page").removeChild(newA);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  margin: 0 10px;
  padding: 10px;
  > .title {
    font-size: 18px;
    padding: 5px 0;
  }
  .card {
    border-top: 1px solid #eee;
    .card-title {
      margin: 20px 0 10px;
      font-size: 26px;
    }
    .txt {
      font-size: 16px;
      margin: 0 20px 10px;
    }
    > ul {
      padding: 20px 30px;
      > li {
        padding: 10px 0;
      }
    }
    a {
      color: #4d6dad;
      &:hover {
        color: #223253;
        background-color: #f4efeb;
      }
    }
    .update {
      padding: 20px;
      h3 {
        margin: 0;
      }
      > p {
        margin: 10px;
      }
      > ul {
        padding: 0 30px;
      }
    }
    .row-link {
      padding: 20px;
      .link {
        margin: 5px;
        &:hover {
          color: #0085a1;
        }
      }
    }
  }
}
.aside {
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  > .title {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    padding: 10px 15px;
  }
  .content {
    padding: 15px 30px;
    li {
      list-style-type: none;
      padding: 5px 16px;
      position: relative;
      &::before {
        content: "";
        width: 6px;
        height: 6px;
        background: #333;
        position: absolute;
        left: 0;
        top: 13px;
        border-radius: 50%;
      }
      > a {
        color: #4d6dad;
        &:hover {
          color: #223253;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  //pc
  .main {
    margin: 0 20px;
    padding: 20px;
    > .title {
      font-size: 30px;
    }
  }
}
</style>
<style>
/* click_tips */
.click_tips {
  color: red;
  position: absolute;
  transition: all 0.3s;
  animation: click_translateTop 1s;
}

@keyframes click_translateTop {
  0%,
  100% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
  }
}
.pic{
  width: 100px;
}
.team-title{
  font-weight: bold;
    font-size: 20px;
    color: red;
}
</style>

