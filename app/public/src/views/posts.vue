<template>
  <div class="">
    <div class="mb20 mt20">
      <el-button type="primary" @click="add">新增文章</el-button>
    </div>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="title"
        label="title">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="desc">
      </el-table-column>
      <el-table-column
        label="img">
        <template scope="scope">
          <div class="img-wrap">
            <img class="img" :src="scope.row.img" v-if="scope.row.img"></img>
            <!--{{scope.row.img}}-->
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="createdAt">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.createdAt | formatTime }}</span>
        </template>
      </el-table-column>
       <el-table-column
        label="publish">
        <template scope="scope">
          <span>{{ scope.row.publish}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="operate"
        width="100">
        <template scope="scope">
          <span class="edit" @click="() => {edit(scope.row.objectId)}"><i class="el-icon-edit"></i></span>
          <span class="delete" @click="() => {del(scope.row.objectId)}"><i class="el-icon-delete"></i></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'posts',
  data: () => {
    return {
      page: 'posts'
    }
  },
  computed: {
    ...mapState({
      list: state => state.post.data
    })
  },
  methods: {
    handleStart () {

    },
    add () {
      this.$router.push(`/admin/posts/add`)
    },
    edit (id) {
      this.$router.push(`/admin/posts/${id}`)
    },
    del (id) {
      // this.$store.dispatch('post/delete', id)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('post/delete', id)
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // })
      })
    }
  },
  filters: {
    formatTime: function (value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  components: {

  },
  mounted () {
    this.$store.dispatch('post/getList', {type: 'all'})
  }
}
</script>
<style lang="scss" scoped>
  .edit,.delete {
    cursor: pointer;
    margin-right: 10px;
  }
  .img-wrap {
    padding: 8px 0;
    overflow: hidden;
  }
  .img {
    float: left;
    width: 110px;
    margin-right: 6px;
  }
</style>
