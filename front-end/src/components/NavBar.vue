<script setup>
import { computed } from 'vue'
import store from '../store';
</script>
<template>
<div class="header">
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="../assets/logo.png" width="125px">
            </div>
            <nav>
                <ul>
                    <li> <a href="">Accueil</a></li>
                    <li> <a href="">Produits</a></li>
                    <li> <a href="">A propos</a></li>
                    <li> <a href="">Contact</a></li>
                    <li> <a href="">Compte</a></li>
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
<h1 class="text-3xl">{{test}}</h1>
</template>