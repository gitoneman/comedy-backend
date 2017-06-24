<template>
  <div class="login-form">
    <div class="login-form__inner">
      <el-form ref="form" :model="form" :rules="rules">
        <h2 class="login-form__title">欢迎来到I宅</h2>
        <div class="login-form__item">
          <el-form-item label="" prop="username">
            <el-input placeholder="请输入用户名" v-model="form.username">
              <template slot="prepend">
                用户
              </template>
            </el-input>
          </el-form-item>
        </div>
        <div class="login-form__item">
          <el-form-item label="" prop="password">
            <el-input placeholder="请输入密码" v-model="form.password">
              <template slot="prepend">
                密码
              </template>
            </el-input>
          </el-form-item>
        </div>
        <el-button class="login-form__btn" type="primary" @click="onSubmit">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'login',
  data: () => {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {

  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', this.form)
          .then((data) => {
            this.$router.push('/admin')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  components: {

  },
  mounted () {
    // this.id = this.$route.params.id
    // this.$store.dispatch('user/index')
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/mixin.scss';
.login-form {
  height: 100%;
  // background: #282828;
  &__inner {
    width: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    background: #fff;
    border-radius: 4px;
  }
  &__item {
    margin-bottom: 20px;
  }
  &__btn {
    width: 100%;
  }
  &__title {
    text-align: center;
    margin: 10px 0 20px;
  }
}
</style>
