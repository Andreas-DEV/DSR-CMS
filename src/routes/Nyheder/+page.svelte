<script lang="ts">
    import { pb, currentUser } from "$lib/pocketbase";
    import PocketBase from "pocketbase";
    import Card from "$lib/Card.svelte";
    import Sidebar from "$lib/Sidebar.svelte";
    import "../../app.css";
    const pbConnect = new PocketBase("http://127.0.0.1:8090");

    function logUd() {
        pb.authStore.clear();
    }

    const data = {
        image: "", 
        hashtags: "",
        title: "",
        date: "",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        text5: "",
        text6: "",
    };
    async function createNyhed() {
        const record = await pb.collection("nyheder").create(data);
        data.image = "";
        data.hashtags = "";
        data.title = "";
        data.text1 = "";
        data.text2 = "";
        data.text3 = "";
        data.text4 = "";
    }

    export let nyhedsId = "";

    async function getNyhed() {
        const record = await pb.collection("nyheder").getOne(nyhedsId, {
            expand: "relField1,relField2.subRelField",
        });

        data.image = "";
        data.hashtags = record.hashtags;
        data.title = record.title;
        data.text1 = record.text1;
        data.text2 = record.text2;
        data.text3 = record.text3;
        data.text4 = record.text4;
    }

    async function updateNyhed() {
        const record = await pb.collection("nyheder").update(nyhedsId, data);
        data.image = "";
        data.hashtags = "";
        data.title = "";
        data.text1 = "";
        data.text2 = "";
        data.text3 = "";
        data.text4 = "";
    }
</script>

<main class="flex">
    <Sidebar />
    
    <Card />
</main>
