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

    let nummerInput: string;
    let forsteInput: string;
    let andenInput: string;
    let bilInput: string;
    let klasseInput: string;
    let totalInput: string;

    let geInput: string;
    let klInput: string;
    let psInput: string;

    let ge2Input: string;
    let kl2Input: string;
    let ps2Input: string;

    let ge3Input: string;
    let kl3Input: string;
    let ps3Input: string;

    let ge4Input: string;
    let kl4Input: string;
    let ps4Input: string;

    let ge5Input: string;
    let kl5Input: string;
    let ps5Input: string;

    let ge6Input: string;
    let kl6Input: string;
    let ps6Input: string;

    let currentStilling = "stilling";

    let textFelt: string;

    async function createData() {
        const data = {
            nummer: nummerInput,
            forstekore: forsteInput,
            andenkore: andenInput,
            bil: bilInput,
            klasse: klasseInput,

            ge: geInput,
            ge2: ge2Input,
            ge3: ge3Input,
            ge4: ge4Input,
            ge5: ge5Input,
            ge6: ge6Input,

            kl: klInput,
            kl2: kl2Input,
            kl3: kl3Input,
            kl4: kl4Input,
            kl5: kl5Input,
            kl6: kl6Input,
            
            ps: psInput,
            ps2: ps2Input,
            ps3: ps3Input,
            ps4: ps4Input,
            ps5: ps5Input,
            ps6: ps6Input,

            total: totalInput,
        };
        try {
            const record = await pb.collection(currentStilling).create(data);
            nummerInput = "";
            forsteInput = "";
            andenInput = "";
            bilInput = "";
            klasseInput = "";

            geInput = "";
            klInput = "";
            psInput = "";

            ge2Input = "";
            kl2Input = "";
            ps2Input = "";

            ge3Input = "";
            kl3Input = "";
            ps3Input = "";

            ge4Input = "";
            kl4Input = "";
            ps4Input = "";

            ge5Input = "";
            kl5Input = "";
            ps5Input = "";

            ge6Input = "";
            kl6Input = "";
            ps6Input = "";

            totalInput = "";
        } catch (error) {
            console.log("Error: " + error);
        }
        window.location.reload();
    }

    let records: any[] = [];

    async function fetchData() {
        try {
            const fetchedRecords = await pb
                .collection(currentStilling)
                .getFullList({
                    sort: "created,nummer",
                });

            records = fetchedRecords;
        } catch (error) {
            console.log("Error: " + error);
        }

        console.log(records);
        
    }

    let idInput = "";

    async function updateData() {
        const data = {
            nummer: nummerInput,
            forstekore: forsteInput,
            andenkore: andenInput,
            bil: bilInput,
            klasse: klasseInput,

            ge: geInput,
            ge2: ge2Input,
            ge3: ge3Input,
            ge4: ge4Input,
            ge5: ge5Input,
            ge6: ge6Input,

            kl: klInput,
            kl2: kl2Input,
            kl3: kl3Input,
            kl4: kl4Input,
            kl5: kl5Input,
            kl6: kl6Input,
            
            ps: psInput,
            ps2: ps2Input,
            ps3: ps3Input,
            ps4: ps4Input,
            ps5: ps5Input,
            ps6: ps6Input,

            total: totalInput,

        };

        try {
            const record = await pb
                .collection(currentStilling)
                .update(idInput, data);
            window.location.reload();
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    async function deleteData() {
        try {
            await pb.collection(currentStilling).delete(idInput);
        } catch (error) {
            console.log("Error: " + error);
        }
        window.location.reload();
    }

    $: currentStilling, fetchData();
</script>

<Header />

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
    <dialog id="my_modal_2" class="modal">
        <div class="modal-box flex gap-4">
            <form on:submit={() => {}} class="flex flex-col gap-2 mx-auto">
                <h3 class="text-2xl">Generelt</h3>
                <div>
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
                </div>

                <div class="flex flex-col gap-1">
                    <div class="flex flex-col gap-1">
                        <button class="btn text-white w-[200px]" on:click={createData}
                            >Indsend</button
                        >
                        <button class="btn text-white w-[200px]" on:click={updateData}
                            >Ret</button
                        >
                        <button class="btn text-white w-[200px]" on:click={deleteData}
                            >Slet</button
                        >
                    </div>
                </div>
            </form>

            <div>
                <div class="flex flex-col mt-2">
                    <h3 class="text-center">DSR 1</h3>
    
                    <div class="flex flex-col">
                        <label for="total">GE</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={geInput}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">KL</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={klInput}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">PS</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={psInput}
                        />
                    </div>
                </div>
                <div class="flex flex-col mt-2">
                    <h3 class="text-center">DSR 2</h3>
    
                    <div class="flex flex-col">
                        <label for="total">GE</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ge2Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">KL</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={kl2Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">PS</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ps2Input}
                        />
                    </div>
    
    
    
                    
                </div>
                <div class="flex flex-col mt-2">
                    <h3 class="text-center">DSR 3</h3>

                    <div class="flex flex-col">
                        <label for="total">GE</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ge3Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">KL</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={kl3Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">PS</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ps3Input}
                        />
                    </div>
                </div>
            </div>

            <div>
                <div class="flex flex-col mt-2">
                    <h3 class="text-center">DSR 4</h3>

                    <div class="flex flex-col">
                        <label for="total">GE</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ge4Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">KL</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={kl4Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">PS</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ps4Input}
                        />
                    </div>
                </div>

                <div class="flex flex-col mt-2">
                    <h3 class="text-center">DSR 5</h3>

                    <div class="flex flex-col">
                        <label for="total">GE</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ge5Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">KL</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={kl5Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">PS</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ps5Input}
                        />
                    </div>
                </div>

                <div class="flex flex-col mt-2">
                    <h3 class="text-center">DSR 6</h3>

                    <div class="flex flex-col">
                        <label for="total">GE</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ge6Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">KL</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={kl6Input}
                        />
                    </div>
                    <div class="flex flex-col">
                        <label for="total">PS</label>
                        <input
                            class="input input-bordered input-primary input-sm w-full max-w-xs text-center"
                            type="text"
                            name="total"
                            id=""
                            bind:value={ps6Input}
                        />
                    </div>
                </div>
            </div>

        </div>
    </dialog>

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
                                        geInput = record.ge;
                                        klInput = record.kl;
                                        psInput = record.ps;
                                        totalInput = record.total;
                                        my_modal_2.showModal();
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

