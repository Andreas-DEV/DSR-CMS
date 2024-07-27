<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

<script lang="ts">
    import logo from "$lib/assets/Logo.png";
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";
    import Header from "./Header.svelte";

    const pb = new PocketBase("https://dansksuperrally-cms.pockethost.io");

    function logUd() {
        pb.authStore.clear();
        window.location.reload();
    }

    let currentState = "2";

    let generaltInput: string = "";
    let klasseInput: string = "";
    let psInput: string = "";

    let currentStilling = "dsr1";

    async function createData() {
        try {
            const data = {
            generalt: generaltInput,
            klasse: klasseInput,
            ps: psInput,
        };
        const record = await pb.collection(currentStilling).create(data);
        generaltInput = "";
        klasseInput = "";
        psInput = "";
        } catch (error) {
            console.log('Error' + error);
            
        }

        window.location.reload();
       
    }

    let records: any[] = [];

    async function fetchData() {
        try {
            const fetchedRecords = await pb
            .collection(currentStilling)
            .getFullList({
                sort: "-created",
            });

        records = fetchedRecords;

        } catch (error) {
            console.log('Error' + error);
        }
       
    }

    let idInput = "";

    async function updateData() {
        try {
            const data = {
            generalt: generaltInput,
            klasse: klasseInput,
            ps: psInput,
        };

        const record = await pb
            .collection(currentStilling)
            .update(idInput, data); 
        } catch (error) {
            console.log('Error' + error);
        }
        window.location.reload();
    }

    async function deleteData() {
        try {
            await pb.collection(currentStilling).delete(idInput);
        } catch (error) {
            console.log('Error' + error);
        }
        window.location.reload();
    }

    $: currentStilling, fetchData();

    $: currentState;
</script>

<Header />

<div
    class="flex justify-center flex-1 mx-auto my-10 border border-[#5b6068] w-max rounded"
>
    <div class="flex items-stretch">
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                DSR 1
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-white"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national1";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national6";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national7";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national7</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national8";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national8</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_national9";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_national9</a
                    >
                </li>
                <hr class="my-3 w-[65%] mx-auto invert" />
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_rc2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_rc2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_rc3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_rc3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_rc4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_rc4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr1_rc5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr1_rc5</a
                    >
                </li>
            </ul>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                DSR 2
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national1";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national6";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national7";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national7</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national8";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national8</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_national9";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_national9</a
                    >
                </li>
                <hr class="my-3 w-[65%] mx-auto invert" />
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_rc2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_rc2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_rc3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_rc3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_rc4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_rc4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr2_rc5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr2_rc5</a
                    >
                </li>
            </ul>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                DSR 3
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national1";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national6";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national7";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national7</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national8";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national8</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_national9";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_national9</a
                    >
                </li>
                <hr class="my-3 w-[65%] mx-auto invert" />
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_rc2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_rc2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_rc3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_rc3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_rc4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_rc4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr3_rc5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr3_rc5</a
                    >
                </li>
            </ul>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                DSR 4
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national1";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national6";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national7";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national7</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national8";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national8</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_national9";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_national9</a
                    >
                </li>
                <hr class="my-3 w-[65%] mx-auto invert" />
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_rc2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_rc2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_rc3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_rc3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_rc4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_rc4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr4_rc5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr4_rc5</a
                    >
                </li>
            </ul>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                DSR 5
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national1";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national6";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national7";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national7</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national8";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national8</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_national9";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_national9</a
                    >
                </li>
                <hr class="my-3 w-[65%] mx-auto invert" />
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_rc2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_rc2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_rc3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_rc3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_rc4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_rc4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr5_rc5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr5_rc5</a
                    >
                </li>
            </ul>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                DSR 6
            </div>
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national1";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national6";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national7";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national7</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national8";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national8</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_national9";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_national9</a
                    >
                </li>
                <hr class="my-3 w-[65%] mx-auto invert" />
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_rc2";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_rc2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_rc3";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_rc3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_rc4";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_rc4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dsr6_rc5";
                            idInput = "";
                            generaltInput = "";
                            klasseInput = "";
                            psInput = "";
                        }}>dsr6_rc5</a
                    >
                </li>
            </ul>
        </div>
    </div>
</div>

<section class="flex items-center gap-14 justify-center mt-72">
    <form
        on:submit={() => {
            
        }}
        class="flex flex-col gap-2 my-5"
    >
        <div class="flex flex-col">
            <label for="id">ID</label>
            <input
                class="text-xl input input-bordered input-primary input-sm w-full max-w-xs pointer-events-none text-center py-1"
                type="text"
                name="id"
                id=""
                bind:value={idInput}
            />
        </div>

        <div class="flex flex-col">
            <label for="generalt">Generalt</label>
            <input
                type="text"
                name="generalt"
                id=""
                bind:value={generaltInput}
                class="input input-bordered input-primary input-sm w-full max-w-xs"
            />
        </div>

        <div class="flex flex-col">
            <label for="klasse">Klasse</label>
            <input
                class="input input-bordered input-primary input-sm w-full max-w-xs"
                type="text"
                name="klasse"
                id=""
                bind:value={klasseInput}
            />
        </div>

        <div class="flex flex-col">
            <label for="ps">PS</label>
            <input
                class="input input-bordered input-primary input-sm w-full max-w-xs"
                type="text"
                name="ps"
                id=""
                bind:value={psInput}
            />
        </div>
        <div class="flex flex-col gap-1">
            <div class="flex w-[124.5px] gap-1">
                <button class="btn text-white w-full" on:click={createData}
                    >Indsend</button
                >
                <button class="btn text-white w-full" on:click={updateData}
                    >Ret</button
                >
            </div>
            <button class="btn text-white" on:click={deleteData}>Slet</button>
        </div>
    </form>

    <form class="">
        <div class="records">
            <span
                class="text-center text-xl uppercase text-[#707681] select-none"
            >
                {currentStilling}
            </span>
            {#if records.length > 0}
                <table class="table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Generalt</th>
                            <th>Klasse</th>
                            <th>PS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each records as record, index}
                            <tr>
                                <th>{index}</th>
                                <th
                                    class="cursor-pointer hover:text-white"
                                    on:click={() => {
                                        idInput = record.id;
                                        generaltInput = record.generalt;
                                        klasseInput = record.klasse;
                                        psInput = record.ps;
                                    }}>{record.id}</th
                                >

                                <td>{record.generalt}</td>
                                <td>{record.klasse}</td>
                                <td>{record.ps}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {:else}{/if}
        </div>
    </form>
</section>

<style lang="postcss">
    #center {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #center2 {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
