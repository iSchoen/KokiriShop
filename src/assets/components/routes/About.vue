<template>
    <div class="about-me">
        <div class="about-me-img-container">
            <img class="about-me-img" src="http://i.imgur.com/YRFUHri.jpg" alt="picture of business owner and his wife">
            <figcaption class="about-me-caption">"Lucas, owner of Kokiri Shop, and his wife, Teresa"</figcaption>
            <hr class="about-separation">
        </div>
        <div class="about-me-text">
            <p>
                Lucas Schoen is a Salt Lake City native who has always been passionate about 
                all things “geeky!”  His personal favorites are Japanese RPGs and MOBAs.  Lucas 
                has also been a long time apprentice for his father creating custom jewelry.  
                One day, Lucas had the brilliant idea to combine his love of gaming and his 
                knowledge of jewelry to create wearable pieces from his favorite games! 
            </p>
            <p>
                The thing that makes the Kokiri Shop different from other gaming accessory vendors 
                is the craftsmanship that goes into each step of the design and manufacturing 
                process.  The Kokiri Shop first decides on a specific character to create, then 
                sends design requests to a professional illustrator to create original concept 
                art!  We then use these digital images to create quality charms cast in silver.  
                Each piece is handcrafted, polished, and colored by Lucas using professional 
                jeweler techniques. 
            </p>
            <p>
                When you purchase a piece from the Kokiri Shop, you can be sure that it is one of a kind!  
                Each charm is created thoughtfully, and with the personality of the character in mind.  You 
                can contact the Kokiri Shop for more information, or to send us a request! 
            </p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

.about-me {
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    margin-bottom: 5vh;
    font-family: 'Handlee', cursive;
    color: black;
    width: 100vw;
}

.about-me-img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.about-me-img {
    max-width: 25vw;
    max-height: 100%;
    border-radius: 10px;
    margin: 20px 100px;
}

.about-me-caption {
    font-size: 1.5vw;
}

.about-separation {
    width: 90vw;
    display: none;
}

.about-me-text {
    font-size: 2vw;
    padding-right: 4vw;
}

.gradient-background {
    width: 200vw;
    overflow: hidden;
    background: blue;
    /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, white, orange);
    /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, white, orange);
    /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, white, orange);
    /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, white, orange);
    /* Standard syntax */
}

@media(max-width: 1200px) {
    .about-me-text {
        font-size: 2.5vw;
    }
    .about-me-caption {
        font-size: 1.8vw;
    }
    .about-me-img {
        max-width: 30vw;
    }
}

@media(max-width: 900px) {
    .about-me {
        flex-direction: column;
        justify-content: center;
    }
    .about-me-caption {
        font-size: 2.5vw;
    }
    .about-separation {
        display: block;
    }
    .about-me-text {
        font-size: 2.8vw;
        padding: 0;
        margin: 2vh 10vw;
    }
}

@media(max-width: 700px) {
    .about-me-img {
        max-width: 45vw;
    }
    .about-me-caption {
        font-size: 3vw;
    }
    .about-me-text {
        font-size: 3.1vw;
    }
}

@media(max-width: 550px) {
    .about-me-img {
        max-width: 55vw;
        margin-top: 5vh;
    }
    .about-me-caption {
        font-size: 3.5vw;
    }
    .about-me-text {
        font-size: 3.6vw;
    }
}

@media(max-width: 450px) {
    .about-me-img {
        max-width: 65vw;
    }
    .about-me-caption {
        font-size: 4vw;
    }
    .about-me-text {
        font-size: 4.2vw;
        margin: 2vh 5vw;
    }
}

/*font-family: 'Courgette', cursive;
font-family: 'Handlee', cursive;
font-family: 'Eagle Lake', cursive;*/
</style>