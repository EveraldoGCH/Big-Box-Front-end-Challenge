<template>
  <div class="container">
     <Header/>
    <div class="content">
     <Categories />
    </div>
    <Footer />
  </div>
</template>

<script>
import Categories from './Categories.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  components: { Categories, Header, Footer },
  name: "Books"
};
</script>

<style scoped lang="scss">
.container {
  z-index: 1;
  margin: 17px auto;
  max-width: 826px;
  background-color: white;
}

.cardFlex {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 14px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logoHeader{
  margin:10px 0px;
  width: 3em;
}

.list {
  > li {
    &:not(:last-child) {
      margin-bottom: 18px;
    }
    > a {
      color: #0a5b8c;
      display: block;
      margin-bottom: 6px;
    }

    > span {
      color: rgba(#3b4242, 0.7);
      font-size: 12px;
    }
  }
}

.btn {
  color: #fff;
  cursor: pointer;
  background-color: #117a8b;
  border: 1px solid transparent;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: #138496;
    border-color: #117a8b;
  }
}

.heading {
  margin-bottom: 12px;

  .title {
    font-size: 18px;
    font-family: 'Libre Baskerville', serif;
    font-weight: 500;
    margin-top: 5px;
    color: black;
  }
}
.search {
  margin-bottom: 24px;
  display: inline-flex;
  .form-control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    outline: 0;
    box-shadow: none;
    padding: 6px 0;
    width: 30vw;
    min-width: 115px;
    font-family: 'Libre Baskerville', serif;
    text-align: center;
  }
}
.fa-search{
  color: #333;
  font-size: 17px;
  position: relative;
  top: 1px;
}
.btnSearch{
  color: white;
  position: relative;
  background-color: white;
  top: 7px;
  border: none;
}
</style>
