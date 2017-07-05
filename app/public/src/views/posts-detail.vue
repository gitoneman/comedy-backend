<template>
  <div class="detail">
    <h2 class="title" v-if="id">编辑文章</h2>
    <h2 class="title" v-if="!id">新建文章</h2>
    <el-form class="post-form" ref="form" :model="form" label-width="80px">
      <!--<el-form-item label="文章名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>-->
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章描述">
        <el-input type="textarea" v-model="form.desc" :rows="6"></el-input>
      </el-form-item>
      <el-form-item label="文章配图">
        <el-upload
          class="upload-demo"
          :action="baseUrl"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容">
        <textarea name="editor" id="editor" :value="form.content"></textarea>
      </el-form-item>
      <el-form-item label="发布">
        <el-switch on-text="" off-text="" v-model="form.publish"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="goback">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Util from '../libs/util'

export default {
  name: 'postsDetail',
  data: () => {
    return {
      page: 'posts',
      msg: '',
      mditor: null,
      id: null,
      baseUrl: Util.baseURL + 'upload'
    }
  },
  computed: {
    ...mapState({
      form: function (state) {
        if (this.id) {
          return state.post.detail
        }
        return state.post.empty
      }
    }),
    fileList: function () {
      if (!this.form.img) {
        return []
      } else {
        return [
          {
            name: '编辑图片',
            url: this.form.img
          }
        ]
      }
    }
  },
  updated () {
    if (this.form.content) {
      this.mditor.value = this.form.content
    }
  },
  mounted () {
    if (window.Mditor) { //eslint-disable-line
      this.initEditor()
    } else {
      Util.appendCss('//asset.comedy.ren/static/css/mditor.min.css')
      Util.appendJs('//asset.comedy.ren/static/js/mditor.min.js')
      .then(() => {
        this.initEditor()
      })
    }
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.form.content = this.mditor.value
          delete this.form.createdAt
          delete this.form.updatedAt
          delete this.form.objectId
          if (this.id) {
            this.$store.dispatch('post/edit', {
              form: this.form,
              id: this.id
            })
            .then((data) => {
              if (data.code === 0) {
                this.goback()
              }
            })
          } else {
            this.$store.dispatch('post/add', this.form)
            .then((data) => {
              if (data.code === 0) {
                for (var key in this.$store.state.post.empty) {
                  this.$store.state.post.empty[key] = ''
                }
                this.goback()
              }
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
      console.log('submit!')
    },
    handlePreview () {
      console.log('handlePreview!')
    },
    handleRemove (response) {
      this.form.img = null
    },
    switchChange (v) {
      console.log(v)
    },
    handleSuccess (response) {
      if (response.code === 0) {
        this.form.img = response.data.url
      }
    },
    initEditor () {
      var mditor = Mditor.fromTextarea(document.getElementById('editor')) //eslint-disable-line
      mditor.on('ready', function () {
        console.log(mditor.value)
        mditor.value = '** hello **'
      })
      this.mditor = mditor
      if (this.$route.params.id) {
        this.id = this.$route.params.id
        this.$store.dispatch('post/getDetail', this.$route.params.id)
      }
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../styles/mixin.scss';
  .detail {
    width: 1000px;
    margin: 0 auto;
    @include mobile {
      width: 100%;
      padding: 10px 0;
    }
  }
  .title {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom:  40px;
    @include mobile {
      margin-bottom: 0.2rem;
      padding: 0.1rem 0;
    }
  }
</style>
<style>
  .post-form .el-form-item__label {
    float: none;
    /*margin-bottom: 0.1rem;*/
    display: block;
    text-align: left;
  }
  .post-form .el-form-item__content {
    margin-left: 0!important;
  }
</style>

