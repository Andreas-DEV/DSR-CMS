<script async lang="ts">
    import { pb, currentUser } from "../lib/pocketbase";
    import PocketBase from "pocketbase";
    import Sidebar from "./Sidebar.svelte";
    import "../app.css";
    const pbConnect = new PocketBase("https://dansksuperrally-cms.pockethost.io");

    function logUd() {
        pb.authStore.clear();
    }

    const data = {
        image: "",
        hashtags: "test",
        title: "test",
        text1: "test",
        text2: "test",
        text3: "test",
        text4: "test",
    };
    async function createNyhed() {
        const record = await pb.collection("nyheder").create(data);
    }


</script>

<!-- HTML KODE -->

<Sidebar/>

<!-- <button on:click={logUd}>Log ud</button> -->

<!--  -->
