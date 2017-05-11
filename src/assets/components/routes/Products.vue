<template>
    <div class="products-page">
        <div class="product-hero-container">
            <parallax :speedFactor=".2" class="parallax-image">
                <img src="http://i.imgur.com/G5vKL1J.jpg" alt="">
            </parallax>
        </div>
        <div class="product-title">
            <h1>
                                        <i class="limegreen">K</i>
                                        <i class="limegreen">o</i>
                                        <i class="limegreen">k</i>
                                        <i class="limegreen">i</i>
                                        <i class="limegreen">r</i>
                                        <i class="limegreen">i</i>
                                        &nbsp
                                        <i class="limegreen">G</i>
                                        <i class="limegreen">o</i>
                                        <i class="limegreen">o</i>
                                        <i class="limegreen">d</i>
                                        <i class="limegreen">s</i>
                                    </h1>
        </div>
        <div class="products-wrapper">
            <div class="product-background">
                <flickity class="carousel" ref="flickity" :options="flickityOptions">
                    <div class="carousel-cell">
                        <p class="product-name">Terra</p>
                        <img class="item product-img" src="http://i.imgur.com/BCFPDWH.jpg" alt="">
                        <p class="product-description">Human? Esper? Does it really matter when you’re as gorgeous and strong as Terra!? Take this magic-user with you wherever you go with this pocket-sized pendant!</p>
                    </div>
                    <div class="carousel-cell">
                        <p class="product-name">Link</p>
                        <img class="item product-img" src="http://i.imgur.com/O1drgZ1.jpg" alt="">
                        <p class="product-description">For the last time, his name is NOT Zelda! Your favorite Hylian hero can now accompany you at all times as an adorable charm for necklaces or bracelets!</p>
                    </div>
                    <div class="carousel-cell">
                        <p class="product-name">Crono</p>
                        <img class="item product-img" src="http://i.imgur.com/5kfcSyA.jpg" alt="">
                        <p class="product-description">“…” What he lacks in conversation he makes up for with sweet time-traveling skills! This classic SNES character could be yours to own!</p>
                    </div>
                    <div class="carousel-cell">
                        <p class="product-name">Reid</p>
                        <img class="item product-img" src="http://i.imgur.com/uV49b7c.jpg" alt="">
                        <p class="product-description">Our custom-made charms are made of silver and are small enough to be worn alone 
                        or with other charms! </p>
                    </div>
                    <div class="carousel-cell">
                        <p class="product-name">More Coming Soon!</p>
                        <img class="item product-img" src="http://i.imgur.com/Zq3CN2Y.jpg" alt="">
                        <p class="product-description">These are just a few of our custom charms!  We have more charms coming soon! 
                        Check back to our site regularly for updates on the latest characters arriving in 
                        our shop!</p>
                    </div>
                    <div class="carousel-cell">
                        <p class="product-name">We Take Requests!</p>
                        <img class="item product-img" src="http://i.imgur.com/109wjPM.jpg" alt="">
                        <p class="product-description">Don’t see your favorite character?  Feel free to send requests!  We are always 
                        excited to create new charms for gaming and anime fandoms!</p>
                    </div>
                </flickity>
                <div @click="previous()" class="arrow-left left-bounce"></div>
                <div @click="next()" class="arrow-right right-bounce"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Flickity from "vue-flickity";
import Parallax from "vue-parallaxy";
export default {
    data: function () {
        return {
            mounted: "true",
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                wrapAround: true,
                pageDots: false,
                autoplay: 1500,
                pauseAutoPlayOnHover: false
            }
        };
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        }
    },
    components: {
        Parallax,
        Flickity
    }
}
</script>

<style scoped>
.products-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;
}

.product-hero-container {
    width: 100vw;
    height: 100vh;
}

.parallax-image {
    background-size: cover;
    position: relative;
    top: -2vh;
    z-index: -1;
}

.products-wrapper {
    width: 100vw;
    height: 100%;
}

.product-background {
    background: url("http://i.imgur.com/EwSdC12.png") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    z-index: -2;
    height: 105vh;
}

.product-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vw;
    height: 20vh;
    width: 60vw;
    z-index: 999;
    position: absolute;
    margin-top: 45vh;
    background: rgba(0, 0, 0, .7);
    border-radius: 15px;
}

.carousel {
    overflow-x: hidden;
    height: 110vh;
    outline: none;
    position: relative;
}

.carousel-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 3vh 0;
}

.button-previous {
    position: absolute;
    bottom: 50vh;
}

.button-next {
    position: absolute;
    bottom: 50vh;
}

.product-row {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10vh 10vw;
}

.product-name {
    font-size: 2vw;
    font-family: 'Handlee', cursive;
    border-style: solid;
    padding: 10px 10px;
    border-radius: 15px;
    background: white;
    text-align: center;
    width: 12vw;
}

.product-img {
    max-width: 40vw;
    max-height: 100%;
    border-radius: 15px;
}

.product-description {
    font-size: 1.8vw;
    font-family: 'Handlee', cursive;
    border-style: solid;
    padding: 10px 10px;
    border-radius: 15px;
    background: white;
    text-align: center;
    width: 50vw;
}

.item {
    margin: 1vh 3vw;
}

.center-text {
    text-align: center;
}




/* NAVIGATION ARROWS */

@-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    40% {
        -webkit-transform: translateX(-30px);
        transform: translateX(-30px);
    }
    60% {
        -webkit-transform: translateX(-15px);
        transform: translateX(-15px);
    }
}

@-moz-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(-30px);
    }
    60% {
        transform: translateX(-15px);
    }
}

@keyframes rightBounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        -ms-transform: translateX(0);
        transform: translateX(0);
    }
    40% {
        -ms-transform: translateX(-15px);
        transform: translateX(-15px);
    }
    60% {
        -ms-transform: translateX(-15px);
        transform: translateX(-15px);
    }
}

@keyframes leftBounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        -ms-transform: translateX(0);
        transform: translateX(0);
    }
    40% {
        -ms-transform: translateX(15px);
        transform: translateX(15px);
    }
    60% {
        -ms-transform: translateX(15px);
        transform: translateX(15px);
    }
}

.arrow-right {
    position: absolute;
    top: 160%;
    right: 2vw;
    margin-top: -20px;
    width: 60px;
    height: 60px;
    background-image: url(http://i.imgur.com/GgvycZm.png);
    background-size: contain;
}

.arrow-left {
    position: absolute;
    top: 160%;
    left: 2vw;
    margin-top: -20px;
    width: 60px;
    height: 60px;
    background-image: url(http://i.imgur.com/MJLds4b.png);
    background-size: contain;
}

.right-bounce {
    -webkit-animation: rightBounce 2s infinite;
    animation: rightBounce 2s infinite;
}



.left-bounce {
    -webkit-animation: leftBounce 2s infinite;
    animation: leftBounce 2s infinite;
}




/* ANIMATIONS */

.backgroundfade-leave-active {
    transition: opacity 1s ease-in-out;
    opacity: 0;
    animation: backgroundfade-out 1s ease-in-out forwards;
}

.backgroundfade-leave {
    opacity: 1;
}

.backgroundfade-enter-active {
    animation: backgroundfade-in 2s ease-in forwards;
}

@keyframes backgroundfade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes backgroundfade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}




/* MEDIA QUERIES */

@media(max-width: 1600px) {
    .product-name {
        font-size: 2.5vw;
        width: 20vw;
    }
    .product-img {
        max-width: 45vw;
    }
    .product-description {
        font-size: 2vw;
    }
}

@media(max-width: 1300px) {
    .product-name {
        font-size: 3vw;
    }
    .product-img {
        max-width: 50vw;
    }
    .product-description {
        font-size: 2.5vw;
    }
}

@media(max-width: 1100px) {
    .product-name {
        font-size: 3.5vw;
    }
    .product-img {
        max-width: 55vw;
    }
    .product-description {
        font-size: 3vw;
        width: 60vw;
    }
}

@media(max-width: 950px) {
    .carousel {
        padding-top: 8vh;
    }
    .product-name {
        font-size: 4vw;
        width: 35vw;
    }
    .product-img {
        max-width: 60vw;
    }
    .product-description {
        font-size: 3.75vw;
        width: 70vw;
    }
}

@media(max-width: 767px) {
    .product-hero-container {
        height: 65vh;
    }
    .product-title {
        margin-top: 30vh;
    }
    .product-name {
        font-size: 4.5vw;
    }
    .product-img {
        max-width: 70vw;
    }
    .product-description {
        font-size: 4vw;
    }
    .arrow-left {
        top: 120%;
    }
    .arrow-right {
        top: 120%
    }
}

@media(max-width: 640px) {
    .product-name {
        font-size: 5vw;
        width: 45vw;
    }
    .product-img {
        max-width: 60vw;
    }
    .product-description {
        font-size: 5vw;
        width: 70vw;
        padding-right: 5vw;
        padding-left: 5vw;
    }
}

@media(max-width: 550px) {
    .carousel {
        padding-top: 12vh;
    }
    .product-name {
        font-size: 5.5vw;
        width: 35vw;
    }
    .product-img {
        max-width: 60vw;
    }
    .product-description {
        font-size: 5.4vw;
        width: 50vw;
    }
}

@media(max-width: 400px) {
    .product-name {
        font-size: 6.5vw;
        width: 60vw;
    }
    .product-description {
        font-size: 8.5vw;
        width: 70vw;
    }
}
</style>