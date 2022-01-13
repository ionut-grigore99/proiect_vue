<template>
  <div class="home">
    <div id="id1">
      <nav role="navigation" style="margin: auto">
        <div id="menuToggle" style="margin: auto">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li><router-link to="/">Home</router-link></li>
            </a>
            <a href="#">
              <li><router-link to="/analyze">Analyze</router-link></li>
            </a>
            <a v-if="!(this.authUser.user===null)" href="#">
              <li><router-link to="/history">History</router-link></li>
            </a>
          </ul>
        </div>
      </nav>
      <p
        style="
          color: white;
          font-size: 40px;
          font-style: italic;
          text-align: right;
          margin-right:5%;
          margin-top:1%;
          margin-bottom:0%;
        "
      >
        Status Check
      </p>
      <br>
    </div>

    <div id="id11">

      <br><br>
     <button @click="goBack()"
      style="
        font-size: 30px;
        border-radius: 10px;
        background-color: white;
        color: #1193fd;
        margin-left: 2%;
        cursor: pointer;
      "
    >
      Back
    </button>
    <br>
    <div id="id2">
      <div id="id20"> 
        <p>Result</p>
        <p v-if="this.result>50">
          Unsafe  
        </p>
        <p v-if="this.result<=50">
          Safe  
        </p>
      </div>
      <div id="id20">
        <span v-if="this.result<=50" id="id17">&#10003;</span> 
        <span v-if="this.result>50" id="id18">&#10005;</span> 
      </div>
      <div id="id20">
        <p>Score</p>
        <p>{{this.result}}%</p>
      </div>
    </div>

    <div id="id3">
      <router-link to="/">
    <button
      style="
        font-size: 30px;
        border-radius: 25px;
        background-color: #1193fd;
        color: white;
        width: 20%;
        height: 50%;
        cursor: pointer;
      "
    >
      Home
    </button>
    </router-link>
    </div>

    </div>
  </div>
</template>

<script>
import {result} from '@/scripts/result.js';
import {auth} from '@/scripts/userManagement.js';

export default {
  name: "Home",
   methods:{
    goBack() {
      return this.$router.go(-1);
    }         
  },
  data(){
    return{
      result: result,
      authUser: auth
    }
  }
};
</script>

<style scoped>
#id1 {
  background-color: #1193fd;
  height: 143px;
}

#id2 {
  height: 400px;
  width: 100%;
}

#id20{
  float: left;
  width: 33.33%;
  height: 100%;
  text-align: center;
  padding: 50px;
  font-size: 50px;
  color: white;
}

#id11 {
    background: url("../assets/gigi.png");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);

    overflow: auto;
    border-top: 0;
    max-width: 100%;
    height:790px;
    padding: 2%;
    text-align: left;
}

#id3 {
  margin-top: 5%;
  text-align: center;
  height: 100px;
}

#id17 {
  font-size:200px;
  color:green;
}

#id18 {
  font-size:200px;
  color:red;
}

#login {
  border: 1.5em;
}

.home {
  border-top: 0;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  background: #232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

#menuToggle {
  display: block;
  position: relative;
  top: 50px;
  left: 30px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  /* hide this */
  z-index: 2;
  /* and place it over the hamburger */
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}
</style>