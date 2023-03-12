<template>
    <h1>Login Form</h1>
    <div class="login-box">
        <h1>Connectez-vous</h1>
        <p class="reminder">Connectez-vous à votre compte pour continuer.</p>
        <form action="">
            <div class="user-box">
                <input type="username" placeholder="Username" />
                <label for="">Identifiant</label>
                <a href="#" class="forgot-pass-link">Mot de passe oublié ?</a>
            </div>
            <div class="user-box">
                <input type="password" placeholder="Password" />
                <label for="pass">Mot de passe</label>
            </div>
            <a href="/home" class="login-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Connection
            </a>
            <p class="register-reminder">
                Pas Inscrivez-vous ?
                <a href="/register" class="signup-link">Créer un compte</a>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>
<style scoped></style>
