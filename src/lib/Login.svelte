<script lang="ts">
    import { currentUser, pb } from "./pocketbase";

    let username: string;
    let password: string;

    async function login() {
        try {
            await pb.collection("users").authWithPassword(username, password);

        } catch (err) {
            console.log('Bad login');
            
        }
    }
</script>

{#if $currentUser}
    <p>Logged in som {$currentUser.username}</p>
{:else}
    <div class="mainContainer">
        <h1>DSR CMS Login</h1>
        <form>
            <input type="text" placeholder="Username" bind:value={username} />
            <input
                type="password"
                placeholder="Password"
                bind:value={password}
            />
            <button class="bg-gray-600 text-white rounded hover:bg-gray-700" on:click={login}>Login</button>
        </form>
    </div>
{/if}

<style>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Khojki&family=Quicksand:wght@300;600;700&display=swap");

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Noto Sans Khojki", sans-serif;
    }
    .mainContainer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 3px solid whitesmoke;
        border-radius: 5px;
        border-block: 3px solid #333;
        border-inline: 3px solid #333;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }
    form {
        width: 500px;
        height: 300px;
        background-color: whitesmoke;
        border-radius: 1px;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 3px solid black;
    }

    input[type="text"], input[type="password"] {
        width: 50%;
        border: 1px solid black;
        padding: .35rem .3rem;
        text-align: center;
    }

    button {
        width: 50%;
        padding: .5rem;
        padding-top: .3rem;
        text-transform: uppercase;
        font-size: 1rem;
    }
</style>
