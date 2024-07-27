<script lang="ts">
    import "../../app.css";
    import Header from "$lib/Header.svelte";

    import { onMount } from "svelte";

    import PocketBase from "pocketbase";

    const pb = new PocketBase("https://dansksuperrally-cms.pockethost.io");

    function logUd() {
        pb.authStore.clear();
        window.location.reload();
    }

    let nummerInput: string = "";
    let forsteInput: string = "";
    let andenInput: string = "";
    let bilInput: string = "";
    let klasseInput: string = "";
    let totalInput: string = "";

    let currentStilling = "stilling";

    let textFelt: string

    async function createData() {
        const data = {
            nummer: nummerInput,
            forstekore: forsteInput,
            andenkore: andenInput,
            bil: bilInput,
            klasse: klasseInput,
            total: totalInput,
        };
        const record = await pb.collection(currentStilling).create(data);
        nummerInput = "";
        forsteInput = "";
        andenInput = "";
        bilInput = "";
        klasseInput = "";
        totalInput = "";
    }

    let records: any[] = [];

    async function fetchData() {
        const fetchedRecords = await pb
            .collection(currentStilling)
            .getFullList({
                sort: "created,nummer",
            });

        records = fetchedRecords;
    }

    let idInput = "";

    async function updateData() {
        const data = {
            nummer: nummerInput,
            forstekore: forsteInput,
            andenkore: andenInput,
            bil: bilInput,
            klasse: klasseInput,
            total: totalInput,
        };

        const record = await pb
            .collection(currentStilling)
            .update(idInput, data);
    }

    async function deleteData() {
        await pb.collection(currentStilling).delete(idInput);
    }

    $: currentStilling, fetchData();
</script>

<Header />

<!-- <div>
    <ul>
{#each records as record, index}
<li>{record.id}</li>
{/each}
</ul>
</div> -->

<!-- TEST -->

<div
    class="flex justify-center flex-1 mx-auto my-10 border border-[#5b6068] w-max rounded"
>
    <div class="flex">
        <button
            class="btn btn-ghost rounded-none"
            on:click={() => {
                currentStilling = "stilling";
            }}>Stilling</button
        >
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                National
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-white"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national1";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national1</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national2";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national2</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national3";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national3</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national4";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national4</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national5";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national5</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national6";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national6</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national7";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national7</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national8";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national8</a
                    >
                </li>
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_national9";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_national9</a
                    >
                </li>
            </ul>
        </div>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-none">
                RC
            </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- svelte-ignore a11y-missing-attribute -->

            <ul
                tabindex="0"
                class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_rc2";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_rc2</a
                    >
                </li>

                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_rc3";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_rc3</a
                    >
                </li>

                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_rc4";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_rc4</a
                    >
                </li>

                <li>
                    <a
                        on:click={() => {
                            currentStilling = "dm_rally_klasse_rc5";
                            idInput = "";
                            nummerInput = "";
                            forsteInput = "";
                            andenInput = "";
                            bilInput = "";
                            klasseInput = "";
                            totalInput = "";
                        }}>dm_rally_klasse_rc5</a
                    >
                </li>
            </ul>
        </div>
    </div>
</div>

<section class="flex items-center gap-14 justify-center my-auto">
    <form
        on:submit={() => {
            window.location.reload();
        }}
        class="flex flex-col gap-2 my-5"
    >
        <div class="flex flex-col">
            <label for="id">ID</label>
            <input
                class="text-xl input input-bordered input-primary input-sm w-full max-w-xs pointer-events-none text-center py-1 uppercase"
                type="text"
                name="id"
                id=""
                bind:value={idInput}
            />
        </div>

        <div class="flex flex-col">
            <label for="nummer">Nummer</label>
            <input
                type="text"
                name="nummer"
                id=""
                bind:value={nummerInput}
                class="input input-bordered input-primary input-sm w-full max-w-xs"
            />
        </div>

        <div class="flex flex-col">
            <label for="forste">Første kører</label>
            <input
                class="input input-bordered input-primary input-sm w-full max-w-xs"
                type="text"
                name="forste"
                id=""
                bind:value={forsteInput}
            />
        </div>

        <div class="flex flex-col">
            <label for="anden">Anden kører</label>
            <input
                class="input input-bordered input-primary input-sm w-full max-w-xs"
                type="text"
                name="anden"
                id=""
                bind:value={andenInput}
            />
        </div>
        <div class="flex flex-col">
            <label for="bil">Bil</label>
            <input
                class="input input-bordered input-primary input-sm w-full max-w-xs"
                type="text"
                name="bil"
                id=""
                bind:value={bilInput}
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
            <label for="total">Total</label>
            <input
                class="input input-bordered input-primary input-sm w-full max-w-xs"
                type="text"
                name="total"
                id=""
                bind:value={totalInput}
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

    <form class="mb-12">
        <div class="records">
            <h3
                class="text-center text-3xl uppercase text-white select-none mb-8"
            >
                {currentStilling}
            </h3>
            {#if records.length > 0}
                <table class="table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th class="text-white">ID</th>

                            <th class="text-white">Nummer</th>
                            <th class="text-white">Første kører</th>
                            <th class="text-white">Anden kører</th>
                            <th class="text-white">Bil</th>
                            <th class="text-white">Klasse</th>
                            <th class="text-white">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each records as record, index}
                            <tr>
                                <th
                                    class="cursor-pointer text-white hover:text-[#dcdbdb] uppercase"
                                    on:click={() => {
                                        idInput = record.id;
                                        nummerInput = record.nummer;
                                        forsteInput = record.forstekore;
                                        andenInput = record.andenkore;
                                        bilInput = record.bil;
                                        klasseInput = record.klasse;
                                        totalInput = record.total;
                                    }}>{record.id}</th
                                >

                                <td>{record.nummer}</td>
                                <td>{record.forstekore}</td>
                                <td>{record.andenkore}</td>
                                <td>{record.bil}</td>
                                <td>{record.klasse}</td>
                                <td>{record.total}</td>
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
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
    }
</style>
