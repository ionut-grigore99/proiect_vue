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
              <!-- <li>Home</li> -->
              <li><router-link to="/">Home</router-link></li>
            </a>
            <a href="#">
              <!-- <li>Analyze</li> -->
              <li><router-link to="/analyze">Analyze</router-link></li>
            </a>
            <a href="#">
              <!-- <li>History</li> -->
              <li><router-link to="/history">History</router-link></li>
            </a>
          </ul>
        </div>
      </nav>
      <!-- <input v-model="message" />
      <input v-model="message" /> -->

      <p
        style="
          color: white;
          font-size: 40px;
          font-style: italic;
          text-align: left;
        "
      >
        Status Check
      </p>
    </div>
    <!-- <div id="id3"> -->
    <!-- <img alt="Vue logo" src="../assets/gigi.png" /> -->
    <h2 id="id2">
      File name:    asfffffffffffffffffff   
      dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccc   
    </h2>
    <input v-model="message" />
        <button
      style="
        font-size: 30px;
        border-radius: 10px;
        background-color: white;
        color: #1193fd;
      "
    >
      Browse
    </button>

<br>
   <router-link to="/result">
    <button
      style="
        font-size: 30px;
        border-radius: 10px;
        background-color: #1193fd;
        color: white;
      "
    >
      Analyze
    </button>
    </router-link>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#id1 {
  background-color: #1193fd;
  /* margin:0;
    padding: 0; */
  /* position: absolute; */
}

#id2 {
  color: black;
  font-size: 25px;
  width: 50%;
}

#id3 {
  /* background-image: url("../assets/gigi.png"); */
  /* overflow: visible; */
  margin: 0;
  /* position: absolute; */
}

#login {
  border: 1.5em;
}

.home {
  background-image: url("../assets/gigi.png");
  position: absolute;
  overflow: auto;
  border-top: 0;
  height: 100%;
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