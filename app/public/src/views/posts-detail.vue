<template>
  <div class="detail">
    <h2 class="title" v-if="id">编辑文章</h2>
    <h2 class="title" v-if="!id">新建文章</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章描述">
        <el-input type="textarea" v-model="form.desc" :rows="6"></el-input>
      </el-form-item>
      <el-form-item label="文章配图">
        <el-upload
          class="upload-demo"
          action="http://localhost:7001/upload"
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
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="goback">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'postsDetail',
  data: () => {
    return {
      page: 'posts',
      msg: '',
      mditor: null,
      id: null
    }
  },
  computed: {
    ...mapState({
      form: state => state.post.detail
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
    this.mditor.value = this.form.content
  },
  mounted () {
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
          } else {
            this.$store.dispatch('post/add', this.form)
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
    handleRemove () {
      console.log('handleRemove!')
    },
    handleSuccess (response) {
      if (response.code === 0) {
        this.form.img = response.data.url
      }
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
  .detail {
    width: 1000px;
    margin: 0 auto;
  }
  .title {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom:  40px;
  }
</style>
