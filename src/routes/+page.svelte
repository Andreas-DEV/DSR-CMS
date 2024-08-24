<script lang="ts">
    import "../app.css";
    import Login from "$lib/Login.svelte";
    import { pb, currentUser } from "$lib/pocketbase";
    import Admin from "$lib/Admin.svelte";
    import Sidebar from "$lib/Sidebar.svelte"
    import Nyheder from "../routes/Nyheder/+page.svelte";
    import Stilling from "$lib/Stilling.svelte";
    import Afdelinger from "./Afdelinger/+page.svelte"
</script>

  
  {#if $currentUser}
  
    <Afdelinger/>
  {:else}
    <Login />
  {/if}
  