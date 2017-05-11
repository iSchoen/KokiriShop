<template>
    <div class="header">
        <nav class="desktop-nav-bar">
            <router-link to="/">Home</router-link>
            <router-link to="/products">Showcase</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
        <nav class="mobile-dropdown">
            <a class="fa-icon-container" @click="isHidden = !isHidden"><icon name="bars"></icon></a>
                <ul v-show="!isHidden" class="mobile-dropdown-list">
                    <li @click="isHidden = !isHidden"><router-link to="/">Home</router-link></li>
                    <hr>
                    <li @click="isHidden = !isHidden"><router-link to="/products">Showcase</router-link></li>
                    <hr>
                    <li @click="isHidden = !isHidden"><router-link to="/about">About Us</router-link></li>
                    <hr>
                    <li @click="isHidden = !isHidden"><router-link to="/contact">Contact</router-link></li>
                </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                isHidden: true
            }
        }
    }
</script>

<style scoped>
/*.header {
    margin-bottom: 1.8vh;
}*/
.fa-icon {
    display: none;
    color: white;
    width: auto;
    height: 3em;
    position: relative;
}
.fa-icon-container {
    position: relative;
    top: .5vh;
    right: 1vw;
}

.desktop-nav-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 4vh;
    font-size: 20px;
    background: black;
    position: relative;
    z-index: 999;
}

.mobile-dropdown {
    display: none;
    width: 100vw;
    height: 6vh;
    background: black;
    z-index: 999;
}

.mobile-dropdown-list {
    position: absolute;
    top: 3.5vh;
    right: 0;
    background: rgba(0, 0, 0, .8);
    border-radius: 0 0 15px 15px;
    font-size: 1.5em;
}
.mobile-dropdown-list a {
    text-decoration: none;
}
.mobile-dropdown-list li {
    text-align: center;
    margin: 2vw 5vw;
}

a:link {
    color: white;
}

a:visited {
    color: white;
}

a:hover {
    color: lightgray;
    text-decoration: underline;
}

.slidenav-leave-active {
    transition: opacity 1s ease-in-out;
    opacity: 0;
    animation: slide-out 1s ease-in-out forwards;
}

@media(max-width: 1000px) {
    .desktop-nav-bar {
        display: none;
    }
    .mobile-dropdown {
        display: flex;
        justify-content: flex-end;
    }
    .fa-icon {
        display: block;
    }
}
</style>