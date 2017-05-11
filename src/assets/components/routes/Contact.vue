<template>
    <div class="contact-page">
        <div class="contact-content-container">
            <img class="contact-image" src="http://i.imgur.com/I5w6XLa.jpg" alt="">
            <p class="contact-paragraph">
                At Kokiri Shop, we are happy to discuss anything you have in mind.  To contact us, 
                simply email us at <a href="mailto:KokiriShopSLC@gmail.com?Subject=Contact%20Request">KokiriShopSLC@gmail.com</a>.  We will do our best to contact you as soon 
                as possible either by email or phone call.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.contact-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    background: white;
}

.contact-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    margin-top: 5vh;
}

.contact-image {
    max-width: 50vw;
    max-height: 100%;
}

.contact-paragraph {
    margin: 0 22vw;
    text-align: center;
    border: solid;
    padding: 10px;
    border-radius: 15px;
    font-weight: bold;
    font-size: 2vw;
}


a:link {
    color: gray;
}

a:visited {
    color: gray;
}

a:hover {
    color: lightgray;
    text-decoration: underline;
}

@media(max-width: 1400px) {
    .contact-image {
        max-width: 70vw;
    }
}

@media(max-width: 1250px) {
    .contact-paragraph {
        margin: 0 15vw;
        font-size: 3vw;
    }
}

@media(max-width: 1000px) {
    .contact-image {
        max-width: 80vw;
    }
}

@media(max-width: 700px) {
    .contact-image {
        max-width: 90vw;
    }
    .contact-paragraph {
        font-size: 4vw;
        margin: 0 5vw;
    }
}
</style>