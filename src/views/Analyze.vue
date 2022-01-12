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
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <router-link to="/analyze">Analyze</router-link>
                            </li>
                        </a>
                        <a href="#">

                            <li>
                                <router-link to="/history">History</router-link>
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
            <p style="
                  color: white;
                  font-size: 40px;
                  font-style: italic;
                  text-align: right;
                  margin-right:5%;
                  margin-top:1%;
                  margin-bottom:0px;
                ">
                Status Check
            </p>
    <br>
        </div>
        <div id="id11">
    <br><br>
            <button @click="goBack()" style="
                margin-left:-90%;
                font-size: 30px;
                border-radius: 10px;
                background-color: white;
                color: #1193fd;
              ">
              Back
            </button>
     <br><br>
            <!--<h2 id="id2" style="margin-left:-5%;">
                    File name:
                </h2>
            <input style="margin-right:3%; margin-left:-35%; width:20%; height:4%" v-model="message" />
            <button style="
                font-size: 30px;
                border-radius: 25px;
                background-color: white;
                color: #1193fd;
                width:12%;
                height:6%;
              ">
              Browse
            </button> --> 
                
            <input type = "file" @change="handleFileUpload( $event )"><br>
            <button style="
                font-size: 30px;
                border-radius: 25px;
                background-color: #1193fd;
                color: white;
                width:20%;
                height:10%;
                margin-left:-50%;
              " v-on:click="submitFile()">
              Analyze
            </button>
            <br><br><br>
            <!-- <router-link to="/result">
                <button style="
                font-size: 30px;
                border-radius: 25px;
                background-color: #1193fd;
                color: white;
                width:20%;
                height:10%;
                margin-left:-50%;
              ">
              Analyze
            </button>
            </router-link> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {updateResult} from '@/scripts/result.js';
import {auth} from '@/scripts/userManagement.js'

export default {
    data(){
        return{
            file:'',
            authUser: auth
        }
    },
    name: "Home",
    methods: {
        goBack() {
            return this.$router.go(-1);
        },
        handleFileUpload(){
            this.file = event.target.files[0];
        },
        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            let fileName = this.file.name;
            axios.post('http://localhost:5000/process', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
            }}).then((response)=>{
                let result = response.data.result;

                updateResult(result);

                if(this.authUser.user!=null){
                    let data={
                        'file_name': fileName,
                        'result': result.toString()
                    }

                    axios.post('http://localhost:8080/history', data).then(()=>{
                        this.$router.push('/result');
                    }).catch((err)=>{
                        console.log(err);
                    })
                }else{
                    this.$router.push('/result');
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
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

#id11 {
    background-image: url("../assets/gigi.png");
    overflow: auto;
    border-top: 0;
    height: 100%;
    width: 100%;
}

.home {
    position: absolute;
    overflow: auto;
    border-top: 0;
    height: 100%;
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
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

#menuToggle input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

#menuToggle input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked~span:nth-last-child(2) {
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

#menuToggle input:checked~ul {
    transform: none;
}
</style>