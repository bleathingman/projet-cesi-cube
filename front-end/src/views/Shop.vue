<template>
    <div class="header">
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <img src="../assets/logo.png" width="125px">
                </div>
                <nav class="navlink">
                    <ul class="navbar-item">
                        <li> <a href="/">Accueil</a></li>
                        <li> <a href="/produits">Produits</a></li>
                        <li> <a href="/a-propos">A propos</a></li>
                        <li> <a href="/contact">Contact</a></li>
                        <li> <a href="/login">Connexion</a></li>
                    </ul>
                </nav>
                <img src="../assets/cart.png" width="30px" height="30px">
            </div>
            <div class="row">
                <div class="col-2">
                    <h1 class="bg-purple-500">Bientôt<br>Un Nouveau Style!</h1>
                    <p>SneakMe est un magasin de chaussures spécialisé dans les paires exclusives / éditions limitées
                    </p>
                    <a href="" class="btn">Voir plus &#8594; </a>
                </div>
                <div class="col-2">
                    <img src="../assets/paire.png" alt="paire.png">
                </div>
            </div>
        </div>
    </div>

    <!-- Catégories  -->
    <div class="categories">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <img src="../assets/dunk-low-black-white.avif">
                </div>
                <div class="col-3">
                    <img src="../assets/dunk-low-black-white.avif">
                </div>
                <div class="col-3">
                    <img src="../assets/dunk-low-black-white.avif">
                </div>
            </div>
        </div>
    </div>
    <!-- Produits -->
    <div class="small-container">
        <h2 class="title">Produits</h2>
        <div class="row">
            <div class="col-4">
                <img src="../assets/dunk-low-black-white.avif" alt="">
                <h4>Dunk Low Black White</h4>
                <p>150$</p>
            </div>
            <div class="col-4">
                <img src="../assets/dunk-low-black-white.avif" alt="">
                <h4>Dunk Low Black White</h4>
                <p>150$</p>
            </div>
            <div class="col-4">
                <img src="../assets/dunk-low-black-white.avif" alt="">
                <h4>Dunk Low Black White</h4>
                <p>150$</p>
            </div>
            <div class="col-4">
                <img src="../assets/dunk-low-black-white.avif" alt="">
                <h4>Dunk Low Black White</h4>
                <p>150$</p>
            </div>
        </div>
    </div>

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

export default {
    name: 'Shop'
}
</script>
<style scoped></style>
