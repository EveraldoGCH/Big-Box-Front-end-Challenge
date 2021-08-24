<template>
    <div class="footer">
      <p class="footerText">2021 Big Box Front-end Challenge</p>
    </div>
</template>

<script>
export default {
    name:"Footer",
    components: { },
    data() {
        

        return {
        }
    }
    }
</script>

<style lang="scss" scoped>

.footer{
  background-color: #333;
  width: 100%;
  height: 88px;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column-reverse;
  z-index: 0;
  position: relative;
  left: 0px;
}

.footerText{
    color: rgb(223, 222, 222);
    font-size: 10px;
    font-weight: 300;
    font-family:  'Libre Baskerville', serif;
    margin: 5px 5px;
    text-decoration: underline;
    white-space: nowrap;
}
@media (min-width:600px){
    .footer{
        height: 70px;
    }
}
</style>