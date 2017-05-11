<template>
        <main role="main" class="main">
            <section class="homepage-header">
                <div class="header-img-container">
                    <img class="header-img" src="http://i.imgur.com/P3o63wc.png" alt="header image">
                </div>
                <div class="header-title-container">
                    <h1 class="header-title">
                                    <i class="blue">K</i>
                                    <i class="red">o</i>
                                    <i class="orange">k</i>
                                    <i class="blue">i</i>
                                    <i class="green">r</i>
                                    <i class="red">i</i>
                                    &nbsp
                                    <i class="orange">S</i>
                                    <i class="blue">h</i>
                                    <i class="green">o</i>
                                    <i class="red">p</i>
                                    </h1>
                    <h2 class="header-subtitle">Your <a href="https://www.youtube.com/watch?v=VLAekpsclQY" class="link-emphasis">Link</a> to the best accessories</h2>
                </div>
            </section>
        </main>
</template>


<script>

</script>


<style scoped>
/*@import url('https://fonts.googleapis.com/css?family=Eagle+Lake');*/

.main {
    background: white;
    /*width: 101.5vw;*/
    margin-bottom: 5vh;
    position: relative;
    /*left: -.75vw;*/
    overflow: hidden;
    z-index: -1;
}

.homepage-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.header-img {
    max-width: 50vw;
    max-height: 100%;
}

.header-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2vw;
    font-family: 'Eagle Lake', cursive;
}

.header-title {
    margin: 15px 0;
}

.header-subtitle {
    font-size: 1.5vw;
    margin-bottom: 10vh;
}

.link-emphasis {
    text-decoration: underline;
}


a:link {
    color: black;
}

a:visited {
    color: black;
}

a:hover {
    color: lightgray;
    text-decoration: underline;
}


@media(max-width: 1400px) {
    .header-title-container {
        font-size: 3vw;
    }
    .header-subtitle {
        font-size: 2vw;
    }
    .header-img {
        max-width: 60vw;
    }
}

@media(max-width: 1150px) {
    .header-title-container {
        font-size: 3.5vw;
    }
    .header-subtitle {
        font-size: 2.5vw;
    }
    .header-img {
        max-width: 65vw;
    }
}

@media(max-width: 950px) {
    .header-title-container {
        font-size: 4.5vw;
    }
    .header-subtitle {
        font-size: 3.5vw;
    }
    .header-img {
        max-width: 75vw;
    }
}

@media(max-width: 775px) {
    .header-title-container {
        font-size: 5vw;
    }
    .header-subtitle {
        font-size: 4vw;
    }
    .header-img {
        max-width: 90vw;
    }
}
</style>