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
        prop="img"
        label="img">
      </el-table-column>
      <el-table-column
        label="createdAt">
        <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.createdAt | formatTime }}</span>
      </template>
      </el-table-column>
      <el-table-column
        label="operate"
        width="100">
        <template scope="scope">
        <span class="edit" @click="() => {edit(scope.row.objectId)}"><i class="el-icon-edit"></i></span>
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
    this.$store.dispatch('post/getList')
  }
}
</script>
<style lang="scss" scoped>
  .edit {
    cursor: pointer;
  }
</style>
