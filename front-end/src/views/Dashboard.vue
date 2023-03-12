<template>
    <div class="area"></div>
    <nav class="main-menu">
        <ul>
            <li>
                <a href="/">
                    <i class="fa fa-home fa-2x"></i>
                    <span class="nav-text">Boutique</span>
                </a>
            </li>
            <li class="has-subnav">
                <a href="#">
                    <i class="fa fa-money fa-2x"></i>
                    <span class="nav-text">Liste produits</span>
                </a>
            </li>
        </ul>
        <ul class="logout">
            <li>
                <a href="#">
                    <i class="fa fa-power-off fa-2x"></i>
                    <span class="nav-text">
                        Déconnection
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'Dashboard'
}
</script>
<style scoped></style>
