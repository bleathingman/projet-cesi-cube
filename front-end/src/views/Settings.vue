<template>
    <h1>Test</h1>
    <ul>
        <li>
            <a href="/">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">Boutique</span>
            </a>
        </li>
        <li>
            <a href="/dashboard/settin">
                <i class="fa fa-cog fa-2x"></i>
                <span class="nav-text">Paramètres</span>
            </a>
        </li>
        <li class="has-subnav">
            <a href="/dashboard/product">
                <i class="fa fa-money fa-2x"></i>
                <span class="nav-text">Liste Produits</span>
            </a>
        </li>
        <li class="has-subnav">
            <a href="/dashboard/users">
                <i class="fa fa-user fa-2x"></i>
                <span class="nav-text">Liste Utilisateurs</span>
            </a>
        </li>
    </ul>
    <ul class="logout">
        <li>
            <a href="#">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text"> Déconnection </span>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Settings",
};
</script>
