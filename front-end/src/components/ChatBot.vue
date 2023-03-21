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
                this.conversation.push("Oui, nous avons de nouveaux modèles de sneakers en stock. Vous pouvez les consulter sur notre site web ou visiter notre magasin pour les voir en personne.")
            } else {
                this.conversation.push()
            }
            if (this.msg === "Avez-vous des réductions en cours ?") {
                this.conversation.push("Oui, nous avons actuellement des offres spéciales sur certains modèles de sneakers. Consultez notre site web pour plus d'informations.")
            }
            if (this.msg === "Pouvez-vous me dire où se trouve votre magasin ?") {
                this.conversation.push("Notre magasin est situé à Nantes. Nous sommes ouverts tous les jours de la semaine de 8h à 19h.")
            }
            if (this.msg === "Comment puis-je retourner une paire de chaussures ?") {
                { this.conversation.push("Vous pouvez retourner une paire de chaussures en contactant notre service clientèle par email ou téléphone et en suivant les instructions pour l'échange ou le remboursement.") }
            } else {
                this.conversation.push()
            }
            if (this.msg === "Comment puis-je suivre ma commande ?") {
                { this.conversation.push("Vous pouvez suivre votre commande en vous connectant à votre compte sur notre site web et en vérifiant l'état de votre commande dans la section suivi de commande. Vous recevrez également des mises à jour par email lorsque votre commande sera expédiée et livrée.") }
            } else {
                this.conversation.push()
            }
            if (this.msg === "Quels sont vos modèles les plus vendus ?") {
                { this.conversation.push("Nos modèles les plus vendus sont la Nike Air Jordan, la Adidas Yeezy Boost et la Converse Chuck Taylor All Star.") }
            } else {
                this.conversation.push()
            }
            if (this.msg === "Comment puis-je savoir si une paire de chaussures est en stock ?") {
                { this.conversation.push("Vous pouvez vérifier la disponibilité des chaussures sur notre site Web. Si la paire de chaussures que vous recherchez n'est pas en stock, vous pouvez nous contacter pour savoir quand elle sera disponible.") }
            } else {
                this.conversation.push()
            }
            if (this.msg === "Quelle est votre politique de retour ?") {
                { this.conversation.push("Notre politique de retour est que vous pouvez retourner les articles non portés et non lavés dans les 30 jours suivant la date d'achat. Veuillez consulter notre site Web pour plus d'informations.") }
            } else {
                this.conversation.push()
            }
            if (this.msg === "Pouvez-vous m'aider à trouver ma taille ?") {
                { this.conversation.push("Bien sûr, nous avons un guide des tailles disponible sur notre site Web. Vous pouvez également nous donner les détails de votre taille et nous pourrons vous aider à trouver la bonne paire de chaussures.") }
            } else {
                this.conversation.push()
            }
            if (this.msg === "Quels sont les différents types de chaussures que vous vendez ?") {
                { this.conversation.push("Nous vendons des baskets de sport, des chaussures de course et bien d'autres encore. Quel type de chaussures recherchez-vous ?") }
            } else {
                this.conversation.push()
            }

            if (this.msg.startsWith("recherche ")) {
                let recherche = this.msg.substr(10);
                let produitsTrouves = this.rechercheProduits(recherche);
                }
            if (produitsTrouves.length > 0) {
                this.conversation.push(`Voici les produits que nous avons trouvés pour "${recherche}" :`);
                produitsTrouves.forEach(produit => {
                this.conversation.push(`- ${produit}`);
                });
            } else {
            this.conversation.push(`Nous n'avons trouvé aucun produit pour "${recherche}"`);
            }
        function chercherChaussures(motCle) {
        // créer un tableau contenant les chaussures Nike disponibles
        var chaussures = [
            "Nike Air Max 95",
            "Nike Vapormax",
            "Nike Air Force 1",
            "Nike Dunk Low",
            "Nike Air Jordan 1",
            "Nike Blazer Mid '77 Vintage",
            "Nike React Presto",
            "Nike SB Dunk Low"
        ];

  // créer un tableau pour stocker les chaussures correspondant au mot-clé
  var chaussuresTrouvees = [];

  // parcourir le tableau de chaussures et ajouter les chaussures correspondant au mot-clé dans le tableau chaussuresTrouvees
  for (var i = 0; i < chaussures.length; i++) {
    if (chaussures[i].toLowerCase().indexOf(motCle.toLowerCase()) !== -1) {
      chaussuresTrouvees.push(chaussures[i]);
    }
  }

  // retourner un message indiquant les chaussures correspondant au mot-clé
  if (chaussuresTrouvees.length > 0) {
    return "Nous avons les chaussures suivantes pour '" + motCle + "': " + chaussuresTrouvees.join(", ");
  } else {
    return "Désolé, nous n'avons pas de chaussures pour '" + motCle + "'.";
  }
}

var resultat = chercherChaussures("Nike");
console.log(resultat);
        }
    }
}).mount('#app')

</script>
