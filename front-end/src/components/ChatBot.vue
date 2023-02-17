<template>
    <div id="app" class="chat-bar-collapsible">
        <button id="chat-bubble" type="button" class="collapsible" @click="toggleChatbox">
            <i id="chat-icon" class="fa fa-fw fa-comments-o"></i></button>

        <div class="content" :class="{ active: isActive }">
            <div class="full-chat-block">
                <!-- Message Container -->
                <div class="outer-container">
                    <div class="chat-container">
                        <!-- Messages -->
                        <div id="chatbox">
                            <h5 id="chat-timestamp"></h5>
                            <!--<p id="botStarterMessage" class="botText"><span>Chargement...</span></p>-->
                            <div v-for="(message, index) in conversation">
                                <p v-if="index % 2 === 0" class="userText"><span> {{ message }} </span></p>

                                <p v-else class="botText"><span> {{ message }} </span></p>
                            </div>

                            <!-- User input box -->
                            <div class="chat-bar-input-block" :class="{ active: isActive }">
                                <div id="userInput">
                                    <input id="textInput" class="input-box" type="text" name="msg" v-model="msg"
                                        v-on:keyup.enter="traitementMessage" placeholder="Votre message ...">
                                </div>
                                <i id="chat-icon-envoie" style="color: #333;" class="fa fa-fw fa-send"
                                    @click="traitementMessage"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    return time;
}
Vue.createApp({
    data() {
        return {
            isActive: false,
            msg: "",
            conversation: [],
        }
    },
    methods: {
        toggleChatbox: function () {
            // console.log(getTime())
            this.isActive = !this.isActive
        },
        traitementMessage: function () {
            // console.log(this.msg)
            if (!this.msg) {
                this.conversation.push("Bonjour")
            } else {
                this.conversation.push(this.msg)
            }

            if (this.msg === "bonjour") {
                { this.conversation.push("Bonjour, souhaitez-vous un renseignement sur l'un de nos produits ?") }
            } else if (this.msg === "au revoir") {
                this.conversation.push("A bientôt, bonne journée!")
            } else {
                this.conversation.push("Essayez de demander autre chose!")
            }
            if (this.msg === "Avez-vous des nouveautés en stock ?") {
                { this.conversation.push("Oui, nous avons de nouveaux modèles de sneakers en stock. Vous pouvez les consulter sur notre site web ou visiter notre magasin pour les voir en personne.") }
            } else {
                this.conversation.push()
            }
        }
    }
}).mount('#app')

</script>