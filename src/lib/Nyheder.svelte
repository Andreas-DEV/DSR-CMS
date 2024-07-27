<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    import { pb, currentUser } from "../lib/pocketbase";

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

<main>
        <Sidebar />
        <form on:submit|preventDefault={createNyhed}>
            <!-- Billede -->
            <input type="file" name="" id="fileInput" bind:value={data.image} />
            <!-- Hashtag -->
            <input type="text" name="" id="" bind:value={data.hashtags} />
            <!-- Titel -->
            <input type="text" name="" id="" bind:value={data.title} />
            <!-- Text1 -->
            <input type="text" name="" id="" bind:value={data.text1} />
            <!-- Text2 -->
            <input type="text" name="" id="" bind:value={data.text2} />
            <!-- Text3 -->
            <input type="text" name="" id="" bind:value={data.text3} />
            <!-- Text4 -->
            <input type="text" name="" id="" bind:value={data.text4} />
        
            <button>Submit</button>
        </form>
</main>
