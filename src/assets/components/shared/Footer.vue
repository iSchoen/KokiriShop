<template>
        <!--<hr class="header-footer-separator footer-hr">-->
        <div class="footer">
            <div>
                <img class="footer-img" src="http://i.imgur.com/j04q3Mu.png" alt="">
            </div>
            <ul class="footer-links">
                <li><a href="http://eadgear.deviantart.com">Illustrator</a></li>
                <li><a href="https://www.facebook.com/paulschoenjewelers/">Paul Schoen Jewelers</a></li>
                <li><a href="#">Facebook</a></li>
            </ul>
            <div>
                <img class="footer-img" src="http://i.imgur.com/2IY0kuP.png" alt="">
            </div>
            <ul class="footer-links">
                <li><a href="#">Etsy</a></li>
                <li><a href="#">Prints</a></li>
                <li><router-link to="/subscribe">Subscribe</router-link></li>
            </ul>
            <div>
                <img class="footer-img" src="http://i.imgur.com/PidGJwk.png" alt="">
            </div>
        </div>
</template>

<script>
    export default {

    }
</script>


<style scoped>
.footer {
    display: flex;
    justify-content: space-around;
    background: black;
    width: 100vw;
    height: 100%;
    position: relative;
}

.footer-hr {
    margin-top: 10vh;
}

.footer-img {
    max-width: 20vw;
    max-height: auto;
}

.footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
}

.footer-links li {
    margin: 10px 0;
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

@media(max-width: 770px) {
    .footer {
        flex-direction: column;
        align-items: center;
    }
    .footer-img {
        max-width: 75vw;
    }
    .footer-links {
        font-size: 3vw;
    }
}
</style>