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

      <p
        style="
          color: white;
          font-size: 45px;
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
        margin-left:-90%;
        cursor: pointer;
      "
    >
      Back
    </button>
<br><br><br><br>
    <table id="table">
            <thead>
                <tr>
                    <th style="text-align:left;font-size:35px">Image Name</th>
                    <th style="font-size:35px; text-align:right">Date</th>
                    <th style="text-align:center;font-size:35px">Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="history in histories" :key="history.id">
                    <td style="text-align:left;font-size:26px">{{history.file_name}}</td>
                    <td style="text-align:right;font-size:26px">{{history.Date}}</td>
                    <td style="text-align:center;font-size:26px">{{history.Result}}%</td>
                </tr>
            </tbody>
        </table>
</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  
   methods:{
    goBack() {
      return this.$router.go(-1);
    }         
  },

 data() {
        return {
            histories: []
        };
    },
  mounted(){
    axios.get('http://localhost:8080/history').then((response)=>{
      console.log(response.data);
      this.histories = response.data;
      this.histories.forEach(history =>{
        let date = new Date(history.Date);
        let dateString = date.toString();
        let ds = dateString.split('GMT');
        history.Date = ds[0];
        
      })
    }).catch((err)=>{
      console.log(err);
    })
  }


};
</script>

<style scoped>
#id1 {
  background-color: #1193fd;
  height: 143px;
}

#id2 {
  color: white;
  font-size: 25px;
  width: 50%;
}

#id3 {
  margin: 0;
}

#login {
  border: 1.5em;
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

#table{
  color: white; 
  background-color: rgba(255,255,255,0);
  width: 98%;
  margin-left: 2%;
}
</style>