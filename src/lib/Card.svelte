<script lang="ts">
     import { pb, currentUser } from "$lib/pocketbase";
    import PocketBase from "pocketbase";
    import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
    let formModal = false;

    const pbConnect = new PocketBase("http://127.0.0.1:8090");


    const data = {
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

    let nyhedsId = "";

    
    async function updateNyhed() {
        const record = await pb.collection("nyheder").update(nyhedsId, data);

    }
    async function getNyhed() {
        const record = await pb
            .collection("nyheder")
            .getOne("io3f1cnzstrgw2h", {
                expand: "relField1,relField2.subRelField",
            });

        const firstFilename = record.image;
        const url = pb.files.getUrl(record, firstFilename, {
            thumb: "100x250",
        });
        data.id = record.id;
        data.image = url;
        data.hashtags = record.hashtags;
        data.title = record.title;
        data.date = record.date;
        data.text1 = record.text1;
        data.text2 = record.text2;
        data.text3 = record.text3;
        data.text4 = record.text4;
        data.text5 = record.text5;
        data.text6 = record.text6;
    }

    getNyhed();
</script>

<section class="w-[500px] border rounded m-4 p-2">
    <form>
        <p class="uppercase text-center my-5">
            ID: <span class="text-blue-800">{data.id}</span>
        </p>
        <img class="rounded" src={data.image} alt="" />
        <p class="text-center my-2">{data.hashtags}</p>
        <h2 class="text-2xl my-2">{data.title}</h2>
        <p class="text-center my-5">{data.date}</p>
        <h2 class="my-2">{data.text1}</h2>
        <p class="w-[30ch] my-2">{data.text2}</p>
        <p class="my-4">{data.text3}</p>
        <p class="my-4">{data.text4}</p>
        <p class="my-4">{data.text5}</p>
        <Button class="w-full" on:click={() => (formModal = true)}
            >Ret nyhed</Button
        >

        <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
            <form class="flex flex-col space-y-6">
                <!-- Billede -->
                <input
                    type="file"
                    name=""
                    id="fileInput"
                    bind:value={data.image}
                />
                <input type="text" name="" id="" bind:value={nyhedsId} />
                <!-- <img src={data.image} alt=""> -->

                <!-- Hashtag -->
                <input
                    type="text"
                    name=""
                    id=""
                    bind:value={data.hashtags}
                    placeholder="Hashtags"
                />
                <!-- Titel -->
                <input
                    type="text"
                    name=""
                    id=""
                    bind:value={data.title}
                    placeholder="Titel"
                />
                <input
                    type="text"
                    name=""
                    id=""
                    bind:value={data.date}
                    placeholder="Date"
                />
                <!-- Text1 -->
                <textarea rows="6" name="" id="" placeholder="1. Tekstfelt" bind:value={data.text1}></textarea>
                <textarea rows="6" name="" id="" placeholder="2. Tekstfelt" bind:value={data.text2}></textarea>
                <textarea rows="6" name="" id="" placeholder="3. Tekstfelt" bind:value={data.text3}></textarea>
                <textarea rows="6" name="" id="" placeholder="4. Tekstfelt" bind:value={data.text4}></textarea>
                <textarea rows="6" name="" id="" placeholder="5. Tekstfelt" bind:value={data.text5}></textarea>
                <textarea rows="6" name="" id="" placeholder="6. Tekstfelt" bind:value={data.text6}></textarea>
                <!-- Text2 -->
                
               
                <button class="border p-3 bg-white" on:click={updateNyhed}
                    >Ret</button
                >
            </form>
        </Modal>
    </form>
</section>
