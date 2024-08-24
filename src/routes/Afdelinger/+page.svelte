<script lang="ts">
    import "../../app.css";
    import Header from "$lib/Header.svelte";

    import { onMount } from "svelte";

    import arrowLeft from "$lib/assets/ArrowLeft.svg"
    import arrowRight from "$lib/assets/ArrowRight.svg"

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

    let totalInput: Number;

    $: {
        const totalGe = isNaN(parseInt(geInput)) ? 0 : parseInt(geInput);
        const totalKl = isNaN(parseInt(klInput)) ? 0 : parseInt(klInput);
        const totalPs = isNaN(parseInt(psInput)) ? 0 : parseInt(psInput);

        const totalGe2 = isNaN(parseInt(ge2Input)) ? 0 : parseInt(ge2Input);
        const totalKl2 = isNaN(parseInt(kl2Input)) ? 0 : parseInt(kl2Input);
        const totalPs2 = isNaN(parseInt(ps2Input)) ? 0 : parseInt(ps2Input);

        const totalGe3 = isNaN(parseInt(ge3Input)) ? 0 : parseInt(ge3Input);
        const totalKl3 = isNaN(parseInt(kl3Input)) ? 0 : parseInt(kl3Input);
        const totalPs3 = isNaN(parseInt(ps3Input)) ? 0 : parseInt(ps3Input);

        const totalGe4 = isNaN(parseInt(ge4Input)) ? 0 : parseInt(ge4Input);
        const totalKl4 = isNaN(parseInt(kl4Input)) ? 0 : parseInt(kl4Input);
        const totalPs4 = isNaN(parseInt(ps4Input)) ? 0 : parseInt(ps4Input);

        const totalGe5 = isNaN(parseInt(ge5Input)) ? 0 : parseInt(ge5Input);
        const totalKl5 = isNaN(parseInt(kl5Input)) ? 0 : parseInt(kl5Input);
        const totalPs5 = isNaN(parseInt(ps5Input)) ? 0 : parseInt(ps5Input);

        const totalGe6 = isNaN(parseInt(ge6Input)) ? 0 : parseInt(ge6Input);
        const totalKl6 = isNaN(parseInt(kl6Input)) ? 0 : parseInt(kl6Input);
        const totalPs6 = isNaN(parseInt(ps6Input)) ? 0 : parseInt(ps6Input);

        totalInput =
            totalGe +
            totalKl +
            totalPs +
            totalGe2 +
            totalKl2 +
            totalPs2 +
            totalGe3 +
            totalKl3 +
            totalPs3 +
            totalGe4 +
            totalKl4 +
            totalPs4 +
            totalGe5 +
            totalKl5 +
            totalPs5 +
            totalGe6 +
            totalKl6 +
            totalPs6;
    }

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

            totalInput = 0;
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

    let testScore: string;

    let currentPage = 1;
    let itemsPerPage = 12;

    $: paginatedRecords = records.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

    function changeItemsPerPage(newItemsPerPage:any) {
        itemsPerPage = newItemsPerPage;
        currentPage = 1;
    }
</script>

<Header />

<section class="flex items-center gap-14 justify-center my-auto">
    <dialog id="my_modal_2" class="modal">
        <div class="modal-box flex gap-4">
            <form on:submit={() => {}} class="flex flex-col gap-2 mx-auto">
                <h3 class="text-2xl">Generelt</h3>
                <div>
                    <div class="flex flex-col">
                        <label for="id">ID</label>
                        <input
                            class="text-sm input input-bordered input-primary input-sm w-full max-w-xs pointer-events-none text-center py-1 uppercase"
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
                        <button
                            class="btn text-white w-[200px]"
                            on:click={createData}>Indsend</button
                        >
                        <button
                            class="btn text-white w-[200px]"
                            on:click={updateData}>Ret</button
                        >
                        <button
                            class="btn text-white w-[200px]"
                            on:click={deleteData}>Slet</button
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
                class="text-center text-3xl uppercase text-white select-none mb-8
                my-10"
            >
                {currentStilling}
            </h3>

            {#if records.length > 0}
                <table class="table">
                    <!-- head -->
                    <tbody>
                        <table>
                            <!-- Table header -->
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
                                {#each paginatedRecords as record, index}
                                    
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
            
                                                    ge2Input = record.ge2;
                                                    kl2Input = record.kl2;
                                                    ps2Input = record.ps2;
            
                                                    ge3Input = record.ge3;
                                                    kl3Input = record.kl3;
                                                    ps3Input = record.ps3;
            
                                                    ge4Input = record.ge4;
                                                    kl4Input = record.kl4;
                                                    ps4Input = record.ps4;
            
                                                    ge5Input = record.ge5;
                                                    kl5Input = record.kl5;
                                                    ps5Input = record.ps5;
            
                                                    ge6Input = record.ge6;
                                                    kl6Input = record.kl6;
                                                    ps6Input = record.ps6;
            
                                                    
            
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

                        <div class="pagination mx-auto flex items-center gap-4 justify-center my-4">
                            <button
                                on:click={() => currentPage--}
                                disabled={currentPage === 1}>
                                <img src={arrowLeft} class="w-5 invert" alt="">
                                </button
                            >
                            <span
                                >Side <span class="text-white font-bold">{currentPage}</span> ud af <span class="text-white font-bold">{Math.ceil(
                                    records.length / itemsPerPage,
                                )}</span></span
                            >
                            <button
                                on:click={() => currentPage++}
                                disabled={currentPage ===
                                    Math.ceil(records.length / itemsPerPage)}
                                >
                                <img src={arrowRight} class="w-5 invert" alt="">
                                </button
                            >
                        </div>
                       
                    </tbody>
                </table>
            {/if}
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