<template>
  <aside id="mynav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
    <ul id="menu">
      <a class="options"><router-link to="/" tag="li"> Overview </router-link></a>
      <a class="options"><router-link to="/assign" tag="li"> Assign </router-link></a>
      <a class="options" @click="showDept = !showDept"><router-link to="" tag="li"> Department Stats <i class="fas fa-angle-down"></i></router-link></a>
        <ul class="departments" :class="{show: showDept}">
          <a class="departments"><router-link to="/departmentstats" tag="li"> Warehouse </router-link></a>
          <a class="departments"><router-link to="" tag="li"> Brewhouse </router-link></a>
          <a class="departments"><router-link to="" tag="li"> Cellar </router-link></a>
          <a class="departments"><router-link to="" tag="li"> Packaging </router-link></a>
        </ul>
      <a class="options"><router-link to="/submit" tag="li">Submit Work Order</router-link></a>
      </li>
    </ul>
  </aside>
</template>

<script>

export default {
  data() {
    return {
      showDept: false,
    }
  },
  methods: {
    closeNav() {
      document.getElementById("mynav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    },
    showDept() {

    }
  }
}

</script>

<style lang="scss">

#mynav {
  display: none;
}

#mynav h3 {
  color: #FFF;
  padding-left: 15px;
  text-align: left;
}

#menu {
  margin-top: 40px;
}

.closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #fff;
}

.options li {
  color: #5A738E;
  text-align: left;
  padding: 8px 0 8px 15px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.3s, background-color 0.3s;
}

.options li:hover {
  color: #FFF;
  background-color: #36495C;
}

.options li:active {
  color: #FFF;
  background-color: #36495C;
}

.options li > svg {
  float: right;
  margin-right: 12px;
}

.departments {
  overflow: hidden;
  max-height: 0;
  transition: all;
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.show {
  max-height: 800px;
}

.departments li {
  color: #5A738E;
  text-align: left;
  padding: 8px 0 8px 30px;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
}

.departments li:hover {
  color: #FFF;
  background-color: #36495C;
}

@media (min-width: 1150px) {
  #mynav {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    overflow-x: hidden;
    padding-top: 3px;
    background-color: #2A3F54;
    transition: 0.5s;
  }

  #mynav a {
    transition: 0.3s;
  }
}
</style>
