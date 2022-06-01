<template>
  <div class="header">
    <div class="toggle">
        <a @click="openNav"><i class="fas fa-bars fa-lg"></i></a>
    </div>
    <h2 id="title">Work Order Application</h2>
    <div class="user">
      <ul>
        <li @click="isDropdownOpen = !isDropdownOpen">
          <a><i class="fas fa-user"></i>Jim</a>
          <ul class="nav" :class="{open: isDropdownOpen}">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Sign Out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isDropdownOpen: false,
    }
  },
  methods: {
    openNav() {
      document.getElementById("mynav").style.width = "260px";
      document.getElementById("main").style.marginLeft = "260px";
    }
  }
}
</script>

<style lang="scss">

.header {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 75px;
  background-color: #EDEDED;
  border-bottom: 1px solid #D9DEE4;
  width: 100%;
}

#title{
  display: none;
}

.toggle{
  float: left;
  margin: 0;
  padding: 10px 0 10px 0;
  width: 70px;
}

.user {
  float: right;
  margin: 0 25px 0 0;
  width: 100px;
  background-color: #EDEDED;
//  padding: 10px 0 10px 0;
}

.nav {
  overflow-y: hidden;
	max-height: 0;
  transition: all;
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.open {
  max-height: 400px;
}

svg {
  color: #5A738E;
  cursor: pointer;
}

@media (min-width: 1150px) {
  .toggle {

  }

  #title{
    display: inline;
    float: left;
    padding: 5px 0 5px 0;
  }

}
</style>
