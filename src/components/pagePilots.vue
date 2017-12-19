<template>
  <div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page='pnums' :page-sizes="[15, 30, 50, 100,200,400,1000]" :page-size='psize' layout="total, sizes, prev, pager, next, jumper" :total='pcount' background  size="small">
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: ['pcount', 'psize', 'pnums'],
  methods: {
    handleSizeChange(val) {
      this.$emit('size-change',val);
    },
    handleCurrentChange(val) {
      this.$emit('num-change',val);
    }
  }
}

</script>
<style>


</style>
