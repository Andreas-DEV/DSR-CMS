<script>
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline, HomeSolid, NewspaperSolid, UsersSolid } from 'flowbite-svelte-icons';
    import { pb, currentUser } from "../lib/pocketbase";
    import PocketBase from "pocketbase";
    let spanClass = 'flex-1 ms-3 whitespace-nowrap';
    $: activeUrl = $page.url.pathname;

    const pbConnect = new PocketBase("https://dansksuperrally-cms.pockethost.io");

    function logUd() {
        pb.authStore.clear();
    }

   

  </script>
  
  <Sidebar class="p-5" {activeUrl}>
    
      <SidebarGroup>
        <SidebarItem label="Log ud" on:click={logUd} href="/" {spanClass}>
          <svelte:fragment slot="icon">
            <UsersSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          
        </SidebarItem>
        <!-- <SidebarItem label="Hjem" href="/">
          <svelte:fragment slot="icon">
            <HomeSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem> -->
      <!--   <SidebarItem label="Nyheder" href="/Nyheder" {spanClass}>
          <svelte:fragment slot="icon">
            <NewspaperSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
         
        </SidebarItem> -->
       
      </SidebarGroup>
    
  </Sidebar>