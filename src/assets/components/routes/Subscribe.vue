<template>
    <div class="subscribe-page">
        <!--<p class="subscribe-paragraph">
                {{ message }}
            </p>-->
        <div class="container">
            <div class="head">
                <h2>Subscribe</h2>
            </div>
            <p class="subscribe-paragraph">{{ message }}</p>
            <input v-model="subscribeFirstName" type="text" name="name" placeholder="First Name" required/>
            <input v-model="subscribeLastName" type="text" name="name" placeholder="Last Name" required/>
            <br />
            <input v-model="subscribeEmail" type="email" name="email" placeholder="Email" required/>
            <br />
            <br />
            <select class="type-select" v-model="subscribeType" name="" required>
                <option disabled selected>Choose a type</option>
                <option>Anime</option>
                <option>Comics</option>
                <option>Video Game</option>
            </select>
            <br />
            <button @click="ranSubscribe(subscribeEmail, subscribeFirstName, subscribeLastName, subscribeType)" id="submit" type="submit">
                Send!
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            message: "If you want to receive emails when a product of a certain type is added to our showcase simply subscribe to our mailing list below. We will notify you as soon as changes are made.",
            subscribeEmail: "",
            subscribeType: "",
            subscribeFirstName: "",
            subscribeLastName: ""
        }
    },
    methods: {
        addToMailingList: function (email, first_name, last_name, type) {
            console.log(email, type);
            let postPromise = this.$http.post("http://localhost:3434/mailing_list", { email: email, first_name: first_name, last_name: last_name, type: type })
                .then((response) => {
                    this.thankYou();
                }, (error) => {
                    this.didNotWork();
                });
        },
        thankYou: function () {
            this.message = "Thank you for subscribing!  Subscribe to more?";
        },
        didNotWork: function () {
            this.message = "Could not add to mailing list!";
        },
        ranSubscribe: function (subscribeEmail, subscribeFirstName, subscribeLastName, subscribeType) {
            if (this.subscribeEmail && this.subscribeType && this.subscribeFirstName, this.subscribeLastName) {
                this.addToMailingList(subscribeEmail, subscribeFirstName, subscribeLastName, subscribeType);
            }
        }
    }
}
</script>

<style scoped>
.subscribe-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: white;
}

.subscribe-paragraph {
    margin: 2vh 2vw;
    text-align: center;
    padding: 10px;
    border-radius: 15px;
    font-size: 2vw;
}

.container {
    width: 60vw;
    margin: 0 auto;
    margin-bottom: 10vh;
    text-align: center;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    background-color: lightgray;
}

.head {
    -webkit-border-radius: 6px 6px 0px 0px;
    -moz-border-radius: 6px 6px 0px 0px;
    border-radius: 6px 6px 0px 0px;
    background-color: black;
    color: white;
    font-size: 2vw;
}

h2 {
    text-align: center;
    padding: 18px 0 18px 0;
    font-size: 1.4em;
}

input {
    margin-bottom: 10px;
}

textarea {
    height: 100px;
    margin-bottom: 10px;
}

input:first-of-type {
    margin-top: 35px;
}

input,
textarea,
select {
    font-size: 1em;
    padding: 15px 10px 10px;
    font-family: 'Source Sans Pro', arial, sans-serif;
    border: 1px solid #cecece;
    background: white;
    color: black;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 80%;
    max-width: 600px;
}

::-webkit-input-placeholder {
    color: black;
}

:-moz-placeholder {
    color: black;
}

::-moz-placeholder {
    color: black;
}

:-ms-input-placeholder {
    color: black;
}

button {
    margin-top: 15px;
    margin-bottom: 25px;
    background-color: black;
    padding: 12px 45px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    -webkit-transition: .5s;
    transition: .5s;
    display: inline-block;
    cursor: pointer;
    width: 30%;
    color: white;
    font-size: 1.5vw;
}

button:hover,
.button:hover {
    background: gray;
}

label.error {
    font-family: 'Source Sans Pro', arial, sans-serif;
    font-size: 1em;
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #d89c9c;
    width: 80%;
    margin: auto;
    color: #FAFAFA;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
}


/* media queries */

@media(max-width: 1100px) {
    .subscribe-paragraph {
        font-size: 3vw;
    }
}

@media (max-width: 700px) {
    .head {
        font-size: 4vw;
    }
    .subscribe-paragraph {
        font-size: 4vw;
    }
    label.error {
        width: 90%;
    }
    input,
    textarea {
        width: 90%;
    }
    button {
        font-size: 2.5vw;
        width: 60%;
    }
    body {
        padding-top: 10px;
    }
}

@media(max-width: 600px) {
    .container {
        width: 80vw;
    }
}
</style>