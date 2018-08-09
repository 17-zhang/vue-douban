<template>
  <div class="register-view">
    <!--判断是否注册成功-->
    <template v-if="isComplate">
      <h1 class="title">注册成功</h1>
      <form method="post" onsubmit="return false">
        <p class="tip">请复制一下Token进行登录</p>
        <div class="form-alias">
          <label>
            <strong>token</strong>
            <input type="text" v-model="token" name="token" placeholder="token">
          </label>
        </div>
        <div class="form-submit">
          <router-link class="submit" :to="{ name: 'LoginView' }" tag="button">去登录</router-link>
        </div>
      </form>
    </template>
    <!--尚未注册，填写下面表单-->
    <template v-else>
      <h1 class="title">欢迎加入豆瓣</h1>
      <form method="post" @submit.prevent="onSubmit()">
        <p v-if="error" class="tip error">{{error}}</p>
        <div class="form-alias">
          <label>
            <strong>邮箱</strong>
            <input type="text" v-model="email" name="email" placeholder="邮箱">
          </label>
        </div>
        <div class="form-pwd">
          <label>
            <strong>请输入密码</strong>
            <template v-if="passType === 'password'">
              <!--v-model.trim：自动过滤用户输入的首尾空白字符-->
              <input type="password" v-model.trim="pass" name="pass" placeholder="密码">
            </template>
            <span class="show-pwd" :class="{show:isShow}" @click="showPwd()"></span>
          </label>
        </div>
        <div class="form-name">
          <label>
            <strong>用户名</strong>
            <input type="text" v-model.trim="name" name="name" placeholder="用户名">
          </label>
        </div>
        <div class="form-submit">
          <button class="submit" type="submit" :disabled="isDisabled" :class="disabled: isDisabled)">{{registerState}}
          </button>
        </div>
      </form>
      <div class="footer">
        <div class="agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
        <div class="btns">
          <a href="#">下载豆瓣</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'register-view',
    data () {
      return {
        isComplete: false,  // 注册完成
        isDisabled: false,  // 禁用提交按钮
        isShow: 0,   // 是否显示密码
        registerState: '立即注册',
        passType: 'password',  // 输入框类型
        error: '',   // 返回验证结果
        email: '',
        pass: '',
        name: '',
        token: ''
      }
    }
  }
</script>

<style scoped>

</style>
