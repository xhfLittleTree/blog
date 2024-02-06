<template>
  <div>
    <img :src="src"/>
    <div class="btn_group">
      <button @click="downLoad" class="btn">下载原图</button>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    src:String
  },
  methods:{
    downLoad(){
      let link = document.createElement('a');
      let target = this.src.replace('compress','photo').replace('compress-','');
      link.href = target
      let ext = this.src.split('.')[1]
      link.download = `${Date.now()}.${ext}`;
      link.click();
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.btn_group{
  display: flex;
  flex-direction: row-reverse;
}
.btn{
  background: #11a8cd;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  width: 80px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
}
.btn:hover {
  background-color:#5A78EC
}
</style>