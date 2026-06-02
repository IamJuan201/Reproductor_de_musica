import { router } from '../router.js';

const API_URL = import.meta.env.VITE_API_URL;

const menuPrincipal = {
    render() {
        return `
            <!-- SIDEBAR -->
    <aside class="w-56 bg-zinc-950 flex flex-col p-4 gap-6 flex-shrink-0">
      <div class="flex flex-col gap-1">
        <a href="#" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-zinc-800 text-white font-semibold">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          Home
        </a>
        <a href="#" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-zinc-800 text-zinc-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          Search
        </a>
        <a href="#" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-zinc-800 text-zinc-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          Your Library
        </a>
      </div>

      <div class="flex flex-col gap-1">
        <p class="text-xs text-zinc-500 uppercase tracking-widest px-2 mb-1">Playlists</p>
        <a href="#" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-zinc-800 text-zinc-400 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
          Create Playlist
        </a>
        <a href="#" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-zinc-800 text-zinc-400 text-sm">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          Liked Songs
        </a>
      </div>

      <div class="flex flex-col gap-1 overflow-y-auto">
        <p class="text-xs text-zinc-500 uppercase tracking-widest px-2 mb-1">My Playlists</p>
        <a href="#" class="px-2 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 text-sm truncate">2021 Greatest Songs</a>
        <a href="#" class="px-2 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 text-sm truncate">At Work</a>
        <a href="#" class="px-2 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 text-sm truncate">Playlist #2</a>
        <a href="#" class="px-2 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 text-sm truncate">Playlist #4</a>
        <a href="#" class="px-2 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 text-sm truncate">RapCaviar</a>
        <a href="#" class="px-2 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 text-sm truncate">Late Night Vibes</a>
        <a href="#" class="px-2 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 text-sm truncate">Gym Hits</a>
      </div>
    </aside>

    <!-- CONTENT -->
    <main class="flex-1 flex flex-col overflow-hidden bg-zinc-900">

      <!-- TOP BAR: buscador + cuenta -->
      <div class="flex items-center justify-between px-6 py-4 flex-shrink-0">
        <!-- Buscador -->
        <div class="relative w-80">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Buscar canciones, artistas..."
            class="w-full bg-zinc-800 rounded-full pl-9 pr-4 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-green-500"/>
        </div>
        <!-- Cuenta -->
        <div class="flex items-center gap-2 bg-zinc-800 rounded-full px-3 py-1.5 cursor-pointer hover:bg-zinc-700">
          <img src="img/avatar.jpg" onerror="this.src='https://ui-avatars.com/api/?name=Emily+Adams&background=555&color=fff&size=28'" class="w-7 h-7 rounded-full object-cover"/>
          <span class="text-sm font-medium">Emily Adams</span>
          <svg class="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
        </div>
      </div>

      <!-- GRID DE CARÁTULAS -->
      <div class="flex-1 overflow-y-auto px-6 pb-4">
        <h2 class="text-2xl font-bold mb-4">Your heavy rotation</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">

          <!-- CARD — repite este bloque para cada álbum -->
          <div class="flex flex-col gap-2 cursor-pointer group">
            <div class="relative">
              <!-- Vinilo detrás -->
              <img src="img/vinilo.png" class="absolute top-0 left-0 w-full h-full object-contain translate-x-6 group-hover:translate-x-10 transition-transform duration-300 vinyl-disc" id="vinyl-1"/>
              <!-- Carátula -->
              <img src="img/caratula1.jpg" class="relative z-10 w-full aspect-square object-cover rounded shadow-lg"/>
            </div>
            <p class="text-sm font-semibold truncate">Be Happy</p>
            <p class="text-xs text-zinc-400 truncate -mt-1">Gene Evaro Jr.</p>
          </div>

          <div class="flex flex-col gap-2 cursor-pointer group">
            <div class="relative">
              <img src="img/vinilo.png" class="absolute top-0 left-0 w-full h-full object-contain translate-x-6 group-hover:translate-x-10 transition-transform duration-300"/>
              <img src="img/caratula2.jpg" class="relative z-10 w-full aspect-square object-cover rounded shadow-lg"/>
            </div>
            <p class="text-sm font-semibold truncate">Some Days</p>
            <p class="text-xs text-zinc-400 truncate -mt-1">Ira Wolf</p>
          </div>

          <div class="flex flex-col gap-2 cursor-pointer group">
            <div class="relative">
              <img src="img/vinilo.png" class="absolute top-0 left-0 w-full h-full object-contain translate-x-6 group-hover:translate-x-10 transition-transform duration-300"/>
              <img src="img/caratula3.jpg" class="relative z-10 w-full aspect-square object-cover rounded shadow-lg"/>
            </div>
            <p class="text-sm font-semibold truncate">Chime</p>
            <p class="text-xs text-zinc-400 truncate -mt-1">Alan Gogoll</p>
          </div>

          <div class="flex flex-col gap-2 cursor-pointer group">
            <div class="relative">
              <img src="img/vinilo.png" class="absolute top-0 left-0 w-full h-full object-contain translate-x-6 group-hover:translate-x-10 transition-transform duration-300"/>
              <img src="img/caratula4.jpg" class="relative z-10 w-full aspect-square object-cover rounded shadow-lg"/>
            </div>
            <p class="text-sm font-semibold truncate">Runaway</p>
            <p class="text-xs text-zinc-400 truncate -mt-1">Beast Coast</p>
          </div>

          <div class="flex flex-col gap-2 cursor-pointer group">
            <div class="relative">
              <img src="img/vinilo.png" class="absolute top-0 left-0 w-full h-full object-contain translate-x-6 group-hover:translate-x-10 transition-transform duration-300"/>
              <img src="img/caratula5.jpg" class="relative z-10 w-full aspect-square object-cover rounded shadow-lg"/>
            </div>
            <p class="text-sm font-semibold truncate">In Your Car</p>
            <p class="text-xs text-zinc-400 truncate -mt-1">No Aloha</p>
          </div>

          <div class="flex flex-col gap-2 cursor-pointer group">
            <div class="relative">
              <img src="img/vinilo.png" class="absolute top-0 left-0 w-full h-full object-contain translate-x-6 group-hover:translate-x-10 transition-transform duration-300"/>
              <img src="img/caratula6.jpg" class="relative z-10 w-full aspect-square object-cover rounded shadow-lg"/>
            </div>
            <p class="text-sm font-semibold truncate">Release Radar</p>
            <p class="text-xs text-zinc-400 truncate -mt-1">Spotify</p>
          </div>

        </div>
      </div>

    </main>
  </div>

  <!-- REPRODUCTOR ABAJO -->
  <div class="h-20 bg-zinc-950 border-t border-zinc-800 flex items-center px-6 gap-6 flex-shrink-0">

    <!-- Canción actual -->
    <div class="flex items-center gap-3 w-56 flex-shrink-0">
      <img src="img/caratula1.jpg" onerror="this.style.background='#333'" class="w-12 h-12 rounded object-cover"/>
      <div class="min-w-0">
        <p class="text-sm font-semibold truncate">Domestic Sweater</p>
        <p class="text-xs text-zinc-400 truncate">Wardell</p>
      </div>
      <svg class="w-4 h-4 text-zinc-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>

    <!-- Controles centrales -->
    <div class="flex-1 flex flex-col items-center gap-1">
      <div class="flex items-center gap-5">
        <button class="text-zinc-400 hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
        </button>
        <button class="text-zinc-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
        </button>
        <button class="bg-white rounded-full w-9 h-9 flex items-center justify-center hover:scale-105 transition-transform">
          <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <button class="text-zinc-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 3.9V8.1L8.5 12zM16 6h2v12h-2z"/></svg>
        </button>
        <button class="text-zinc-400 hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
        </button>
      </div>
      <!-- Barra de progreso -->
      <div class="flex items-center gap-2 w-full max-w-md">
        <span class="text-xs text-zinc-400">0:00</span>
        <div class="flex-1 h-1 bg-zinc-700 rounded-full"><div class="w-1/3 h-full bg-white rounded-full"></div></div>
        <span class="text-xs text-zinc-400">4:25</span>
      </div>
    </div>

    <!-- Volumen -->
    <div class="flex items-center gap-2 w-32 flex-shrink-0">
      <svg class="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      <div class="flex-1 h-1 bg-zinc-700 rounded-full"><div class="w-2/3 h-full bg-white rounded-full"></div></div>
        `
    }
}