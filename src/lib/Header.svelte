<script lang="ts">
    import "../app.css";

    import PocketBase from "pocketbase";
    import logo from "$lib/assets/Logo.png";
    import logout from "$lib/assets/Logout.svg"

    const pb = new PocketBase("https://dansksuperrally-cms.pockethost.io");

    function logUd() {
        pb.authStore.clear();
        window.location.reload();
    }
</script>

<div class="navbar bg-base-300 justify-between">
    <div class="flex-1 px-2 lg:flex-none">
        <a href="/">
            <img src={logo} class="w-[125px] invert" alt="" />
        </a>
        <h1 class="border-l-2 pl-4 h-6 rounded-sm mt-3 text-white uppercase">
            Admin Panel
        </h1>
    </div>

    <!-- <ul class="flex gap-4 text-white">
        <li>
            <a class="hover:underline" href="/">DIF</a>
        </li>
        <li>
            <a class="hover:underline" href="/Afdelinger">DM Klasser</a>
        </li>
    </ul> -->
    <li on:click={logUd} class="cursor-pointer hover:underline text-white">
        <img class="w-12 invert" src={logout} alt="">
    </li>
</div>
