<template>
    <div class="main-app">
        <app-header></app-header>
        <transition appear name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./assets/components/shared/Header.vue";
import Footer from "./assets/components/shared/Footer.vue";
export default {
    components: {
        "app-footer": Footer,
        "app-header": Header,
    }
}
</script>

<style>
/*RESET.CSS*/
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
blockquote, pre, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*END RESET.CSS*/
/*//////////////////////////////////////////////////////////////////////////////////*/


@import url('https://fonts.googleapis.com/css?family=Courgette|Handlee|Eagle+Lake');

html {
    background: black;
}

.main-app {
    display: flex;
    flex-direction: column;
}

.header-footer-separator {
    width: 90vw;
}


.blue {
    color: blue;
}

.red {
    color: red;
}

.green {
    color: green;
}

.yellow {
    color: yellowgreen;
}

.orange {
    color: rgb(244, 200, 66);
}

.darkorange {
    color: darkorange;
}

.limegreen {
    color: limegreen;
}

.slide-leave-active {
    transition: opacity 1s ease-in-out;
    opacity: 0;
    animation: slide-out 1s ease-in-out forwards;
}

.slide-leave {
    opacity: 1;
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
    0% {

    }
    100% {
        transform: perspective(500px) translate3d(10px,0px,0px);
    }
}

@keyframes slide-in {
    0% {
        z-index: 0;
        opacity: -1;
        transform: perspective(500px) translate3d(10px,0px,0px);
    }
    100% {

    }
}
</style>