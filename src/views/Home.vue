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
                        <a v-if="!(this.authUser.user===null)" href="#">
    
                            <li>
                                <router-link to="/history">History</router-link>
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
            <div v-if="this.authUser.user===null">
                <form v-on:submit="login">
                    <input v-model="username" placeholder="Username..." style="width:7%; margin-right:10px" required/>
                    <input type="password" v-model="password" placeholder="Password..." style="width:7%; margin-right:15px" required/>
                    <input type="submit" style="border-radius: 10px; font-size: 15px; width:5%; cursor: pointer;" value="Login"/>
                </form>
            </div>
            <div v-else>
                <button v-on:click="logout" style="border-radius: 10px; font-size: 15px; width:5%">Logout</button>
            </div>
            <!-- //////////////////////////////////////////////////////////////////////// -->
            <div>
                <transition name="modal">
                    <div v-if="isOpen">
                        <div class="overlay" @click.self="isOpen = false;">
                            <div class="modal">
                                <span style="margin-right:130px;font-size:25px;  ">Username</span>
                                <input v-model="regUsername" style="margin-right:1%;width:35%; height:30px;" /><br><br>

                                <span style="margin-right:130px;font-size:25px; ">Password</span>
                                <input type="password" v-model="regPassword" style="margin-right:1%;width:35%;height:30px;" /><br> <br>

                                <span style="font-size:25px;margin-right:40px;">Confirm password</span>
                                <input type="password" v-model="regPasswordConfirm" style="margin-right:1%;width:35%;height:30px;" /><br><br>

                                <span style=" font-size:25px; margin-right:180px; ">Email</span>
                                <input v-model="regEmail" style="margin-right:1%;width:35%;height:30px;" /><br><br>
                                <button @click="register" style="
                    font-size: 30px;
                    border-radius: 25px;
                    background-color: #1193fd;
                    color: white;
                    width:30%;
                    height:10%;
                    cursor: pointer;
                  ">
                  Register
                </button>
                            </div>
                        </div>
                    </div>
                </transition>
                <div v-if="this.authUser.user===null">
                    <p style="cursor: pointer;margin-left:-10%;color:white; text-decoration: underline;" @click="isOpen = !isOpen;">
                        New member? Join now
                    </p>
                </div>
            </div>
    
            <!-- //////////////////////////////////////////////////////////////////////// -->
    
            <p style="
                    color: white;
                    font-size: 40px;
                    font-style: italic;
                    text-align: right;
                    margin-right:5%;
                    margin-top:-2%;
                    margin-bottom:0%;
                ">
                Status Check
            </p>
            <br>
    
        </div>
        <div id="id11">
            <h2 id="id2">
                Buildings and other built structures are moving all the time,
                but usually these movements are so small as to be unnoticeable.
                Movement can be caused by defects, movement of the ground,
                foundation failure and so on.
                If a structure is unable to accommodate this movement, 
                cracking is likely to occur. The appearance of distortions and 
                cracks can be visually unattractive and disconcerting for occupants, 
                and if left untreated they can affect the integrity, 
                safety and stability of the structure.
                Effective treatment requires first that the causes of cracking are understood. 
                Only then can a strategy for repair be implemented and here is the solution :
                The Status Check application implemented with the powerful tools of Deep Learning!
            </h2>
            <router-link to="/analyze">
                <button style="
                    font-size: 30px;
                    border-radius: 25px;
                    background-color: #1193fd;
                    color: white;
                    width:20%;
                    height:10%;
                    cursor: pointer;
                  ">
                  Analyze picture
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {auth, authUser, clearUser} from '../scripts/userManagement.js'

export default {
    name: "Home",
    data: function() {
        return {
            isOpen: false,
            username: "",
            password: "",
            authUser: auth,
            regUsername: "",
            regPassword: "",
            regPasswordConfirm: "",
            regEmail: ""
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            let login = () => {
                var data = {
                    "username": this.username,
                    "password": this.password
                }
                try{
                    axios.post("http://localhost:8080/login", data).then((response)=>{
                        console.log(response);
                        authUser(response.data);
                    })
                }catch(e){
                    console.log(e);
                }
                
            }
            login();
        },
        logout(e){
            e.preventDefault();
            let logout = () => {
                try{
                    axios.get("http://localhost:8080/logout").then((response)=>{
                        console.log(response);
                        clearUser();
                    })
                }catch(e){
                    console.log(e);
                }    
            }
            logout();
        },
        register(e) {
            e.preventDefault();
            let register = () => {
                var data = {
                    "username": this.regUsername,
                    "password": this.regPassword,
                    "email": this.regEmail
                }
                try{
                    axios.post("http://localhost:8080/user", data).then((response)=>{
                        console.log(response);
                        this.isOpen = false;
                    })
                }catch(e){
                    console.log(e);
                }
                
            }
            register();
        },
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
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 200px;
    padding-right: 200px;
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

.modal {
    width: 500px;
    margin: 0px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px 3px;
    transition: all 0.2s ease-in;
    font-family: Helvetica, Arial, sans-serif;
}

.fadeIn-enter {
    opacity: 0;
}

.fadeIn-leave-active {
    opacity: 0;
    transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
    transform: scale(1.1);
}

#id10 {
    padding: 7px;
    margin-top: 10px;
    background-color: green;
    color: white;
    font-size: 1.1rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #00000094;
    z-index: 999;
    transition: opacity 0.2s ease;
}
</style>