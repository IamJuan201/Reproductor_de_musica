import { router } from '../../router.js';

const API_URL = import.meta.env.VITE_API_URL;

const menuPrincipal = {
    render() {
        return `
        <div style="display:flex;height:100vh;background:#0a0a0f;color:white;font-family:'Circular Std','Montserrat',sans-serif;overflow:hidden;">

          <!-- ══ SIDEBAR ══ -->
          <aside style="width:240px;background:#0a0a0f;display:flex;flex-direction:column;padding:1.5rem 0.75rem;gap:0.25rem;flex-shrink:0;border-right:1px solid rgba(255,255,255,0.05);">

            <!-- Logo -->
            <div style="display:flex;align-items:center;gap:10px;padding:0.5rem 0.75rem 1.5rem;">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#7c3aed"/>
                <ellipse cx="18" cy="22" rx="10" ry="2.5" stroke="white" stroke-width="2" fill="none"/>
                <ellipse cx="18" cy="17" rx="7" ry="2" stroke="white" stroke-width="2" fill="none"/>
                <ellipse cx="18" cy="12.5" rx="4" ry="1.5" stroke="white" stroke-width="2" fill="none"/>
              </svg>
              <span style="font-size:1.25rem;font-weight:800;letter-spacing:-0.03em;">Riwiflow</span>
            </div>

            <!-- Nav principal -->
            <nav style="display:flex;flex-direction:column;gap:2px;">
              <a href="#" style="display:flex;align-items:center;gap:12px;padding:0.65rem 0.75rem;border-radius:6px;background:rgba(124,58,237,0.2);color:white;font-size:0.875rem;font-weight:600;text-decoration:none;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                Inicio
              </a>
              <a href="#" style="display:flex;align-items:center;gap:12px;padding:0.65rem 0.75rem;border-radius:6px;color:#a0a0b0;font-size:0.875rem;font-weight:500;text-decoration:none;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(255,255,255,0.07)';this.style.color='white'"
                onmouseout="this.style.background='transparent';this.style.color='#a0a0b0'">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                Buscar
              </a>
              <a href="#" style="display:flex;align-items:center;gap:12px;padding:0.65rem 0.75rem;border-radius:6px;color:#a0a0b0;font-size:0.875rem;font-weight:500;text-decoration:none;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(255,255,255,0.07)';this.style.color='white'"
                onmouseout="this.style.background='transparent';this.style.color='#a0a0b0'">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                Tu biblioteca
              </a>
            </nav>

            <!-- Playlists -->
            <div style="margin-top:1.5rem;">
              <p style="font-size:0.65rem;color:#6b6b80;text-transform:uppercase;letter-spacing:0.12em;font-weight:700;padding:0 0.75rem;margin-bottom:0.5rem;">Playlists</p>
              <a href="#" style="display:flex;align-items:center;gap:10px;padding:0.55rem 0.75rem;border-radius:6px;color:#a0a0b0;font-size:0.8rem;text-decoration:none;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(255,255,255,0.07)';this.style.color='white'"
                onmouseout="this.style.background='transparent';this.style.color='#a0a0b0'">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
                Crear playlist
              </a>
              <a href="#" style="display:flex;align-items:center;gap:10px;padding:0.55rem 0.75rem;border-radius:6px;color:#a0a0b0;font-size:0.8rem;text-decoration:none;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(255,255,255,0.07)';this.style.color='white'"
                onmouseout="this.style.background='transparent';this.style.color='#a0a0b0'">
                <svg width="16" height="16" fill="#b07fff" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                Canciones que te gustan
              </a>
            </div>

            <div style="height:1px;background:rgba(255,255,255,0.06);margin:0.75rem 0.75rem;"></div>

            <div style="display:flex;flex-direction:column;gap:1px;overflow-y:auto;flex:1;">
              ${['2021 Greatest Songs','At Work','Playlist #2','RapCaviar','Late Night Vibes','Gym Hits','Chill Mix'].map(name => `
              <a href="#" style="padding:0.5rem 0.75rem;border-radius:6px;color:#a0a0b0;font-size:0.8rem;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all 0.15s;"
                onmouseover="this.style.background='rgba(255,255,255,0.07)';this.style.color='white'"
                onmouseout="this.style.background='transparent';this.style.color='#a0a0b0'">${name}</a>`).join('')}
            </div>

          </aside>

          <!-- ══ CONTENIDO PRINCIPAL ══ -->
          <main style="flex:1;display:flex;flex-direction:column;overflow:hidden;background:#111118;">

            <!-- TOP BAR -->
            <div style="display:flex;align-items:center;justify-content:space-between;padding:1rem 2rem;background:#111118;flex-shrink:0;border-bottom:1px solid rgba(255,255,255,0.05);">
              
              <!-- Navegación y buscador -->
              <div style="display:flex;align-items:center;gap:1rem;">
                <div style="display:flex;gap:4px;">
                  <button style="width:32px;height:32px;border-radius:50%;background:rgba(0,0,0,0.4);border:none;color:white;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;">‹</button>
                  <button style="width:32px;height:32px;border-radius:50%;background:rgba(0,0,0,0.4);border:none;color:white;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;">›</button>
                </div>
                <div style="position:relative;">
                  <svg style="position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none;" width="16" height="16" fill="none" stroke="#a0a0b0" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  <input type="text" placeholder="Buscar canciones, artistas..."
                    style="background:rgba(255,255,255,0.08);border:1px solid transparent;border-radius:500px;padding:0.55rem 1rem 0.55rem 2.5rem;font-size:0.85rem;color:white;width:280px;outline:none;transition:all 0.2s;"
                    onfocus="this.style.background='rgba(255,255,255,0.12)';this.style.borderColor='rgba(124,58,237,0.6)'"
                    onblur="this.style.background='rgba(255,255,255,0.08)';this.style.borderColor='transparent'"
                  />
                </div>
              </div>

              <!-- Usuario -->
              <div style="display:flex;align-items:center;gap:10px;background:rgba(0,0,0,0.4);border-radius:500px;padding:0.35rem 0.75rem 0.35rem 0.35rem;cursor:pointer;transition:background 0.2s;"
                onmouseover="this.style.background='rgba(255,255,255,0.08)'"
                onmouseout="this.style.background='rgba(0,0,0,0.4)'">
                <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#b07fff);display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">EA</div>
                <span style="font-size:0.875rem;font-weight:600;">Emily Adams</span>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style="color:#a0a0b0;"><path d="M7 10l5 5 5-5z"/></svg>
              </div>
            </div>

            <!-- CONTENIDO SCROLLABLE -->
            <div style="flex:1;overflow-y:auto;padding:2rem;scrollbar-width:thin;scrollbar-color:#3a3a50 transparent;">

              <!-- Greeting -->
              <div style="margin-bottom:2rem;">
                <h1 style="font-size:1.75rem;font-weight:800;margin:0 0 0.25rem;letter-spacing:-0.02em;">Buenas tardes 👋</h1>
              </div>

              <!-- Grid rápido de highlights -->
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:2.5rem;">
                ${[
                  {name:'Liked Songs',color:'#5a20d4'},
                  {name:'Daily Mix 1',color:'#1e3264'},
                  {name:'RapCaviar',color:'#2d4661'},
                  {name:'Gym Hits',color:'#4a2163'},
                  {name:'Late Night',color:'#1c3a2e'},
                  {name:'At Work',color:'#6b2020'},
                ].map(item => `
                <div style="background:${item.color};border-radius:6px;padding:1rem;display:flex;align-items:center;gap:1rem;cursor:pointer;transition:filter 0.2s;overflow:hidden;"
                  onmouseover="this.style.filter='brightness(1.2)'"
                  onmouseout="this.style.filter='brightness(1)'">
                  <div style="width:48px;height:48px;border-radius:4px;background:rgba(255,255,255,0.15);flex-shrink:0;"></div>
                  <span style="font-size:0.875rem;font-weight:700;">${item.name}</span>
                </div>`).join('')}
              </div>

              <!-- Tu heavy rotation -->
              <div style="margin-bottom:2.5rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
                  <h2 style="font-size:1.25rem;font-weight:800;margin:0;letter-spacing:-0.01em;">Tu heavy rotation</h2>
                  <a href="#" style="font-size:0.8rem;font-weight:600;color:#a0a0b0;text-decoration:none;letter-spacing:0.05em;text-transform:uppercase;"
                    onmouseover="this.style.color='white'"
                    onmouseout="this.style.color='#a0a0b0'">Ver todo</a>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:1.5rem;">
                  ${[
                    {title:'Thriller',artist:'Michael Jackson',img:'src/resources/img/thriller-album.png'},
                    {title:'Vinilo Classic',artist:'Various Artists',img:'src/resources/img/vinilo.png'},
                    {title:'Night Moves',artist:'Bob Seger',img:''},
                    {title:'Purple Rain',artist:'Prince',img:''},
                    {title:'Dark Side',artist:'Pink Floyd',img:''},
                    {title:'Kind of Blue',artist:'Miles Davis',img:''},
                  ].map((album,i) => `
                  <div style="cursor:pointer;" class="album-card-${i}"
                    onmouseover="this.querySelector('.play-btn').style.opacity='1';this.querySelector('.play-btn').style.transform='translateY(0)'"
                    onmouseout="this.querySelector('.play-btn').style.opacity='0';this.querySelector('.play-btn').style.transform='translateY(8px)'">
                    <div style="position:relative;width:100%;aspect-ratio:1;margin-bottom:0.75rem;">
                      ${album.img
                        ? `<img src="${album.img}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;box-shadow:0 8px 24px rgba(0,0,0,0.5);"/>`
                        : `<div style="width:100%;height:100%;border-radius:6px;background:linear-gradient(135deg,#${['2d1b69','1a1a3e','2a1a2e','1e2a1e','2e1a1a','1a2e2e'][i]},#${['6d28d9','4a4a8a','6a3a6a','3a6a3a','6a3a3a','3a6a6a'][i]});box-shadow:0 8px 24px rgba(0,0,0,0.5);"></div>`
                      }
                      <button class="play-btn" style="position:absolute;bottom:8px;right:8px;width:40px;height:40px;border-radius:50%;background:#7c3aed;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(8px);transition:all 0.2s;box-shadow:0 4px 12px rgba(0,0,0,0.4);">
                        <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </button>
                    </div>
                    <p style="font-size:0.875rem;font-weight:600;margin:0 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${album.title}</p>
                    <p style="font-size:0.775rem;color:#a0a0b0;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${album.artist}</p>
                  </div>`).join('')}
                </div>
              </div>

              <!-- Recomendado para ti -->
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
                  <h2 style="font-size:1.25rem;font-weight:800;margin:0;letter-spacing:-0.01em;">Recomendado para ti</h2>
                  <a href="#" style="font-size:0.8rem;font-weight:600;color:#a0a0b0;text-decoration:none;letter-spacing:0.05em;text-transform:uppercase;"
                    onmouseover="this.style.color='white'"
                    onmouseout="this.style.color='#a0a0b0'">Ver todo</a>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:1.5rem;">
                  ${[
                    {title:'Blinding Lights',artist:'The Weeknd'},
                    {title:'As It Was',artist:'Harry Styles'},
                    {title:'Levitating',artist:'Dua Lipa'},
                    {title:'Stay',artist:'The Kid LAROI'},
                    {title:'Industry Baby',artist:'Lil Nas X'},
                    {title:'Peaches',artist:'Justin Bieber'},
                  ].map((song,i) => {
                    const colors = ['#3b1f6e','#1f3b6e','#1f6e3b','#6e1f3b','#6e3b1f','#3b6e1f'];
                    const colors2 = ['#7c3aed','#3a7ced','#3aed7c','#ed3a7c','#ed7c3a','#7ced3a'];
                    return `
                  <div style="cursor:pointer;"
                    onmouseover="this.querySelector('.play-btn2').style.opacity='1';this.querySelector('.play-btn2').style.transform='translateY(0)'"
                    onmouseout="this.querySelector('.play-btn2').style.opacity='0';this.querySelector('.play-btn2').style.transform='translateY(8px)'">
                    <div style="position:relative;width:100%;aspect-ratio:1;margin-bottom:0.75rem;">
                      <div style="width:100%;height:100%;border-radius:6px;background:linear-gradient(135deg,${colors[i]},${colors2[i]});box-shadow:0 8px 24px rgba(0,0,0,0.5);"></div>
                      <button class="play-btn2" style="position:absolute;bottom:8px;right:8px;width:40px;height:40px;border-radius:50%;background:#7c3aed;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(8px);transition:all 0.2s;box-shadow:0 4px 12px rgba(0,0,0,0.4);">
                        <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </button>
                    </div>
                    <p style="font-size:0.875rem;font-weight:600;margin:0 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${song.title}</p>
                    <p style="font-size:0.775rem;color:#a0a0b0;margin:0;">${song.artist}</p>
                  </div>`}).join('')}
                </div>
              </div>

            </div>

            <!-- ══ PLAYER BAR ══ -->
            <div style="background:#0d0d14;border-top:1px solid rgba(255,255,255,0.06);padding:0.85rem 1.5rem;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
              
              <!-- Canción actual -->
              <div style="display:flex;align-items:center;gap:12px;width:30%;">
                <div style="width:52px;height:52px;border-radius:4px;background:linear-gradient(135deg,#2d1b69,#7c3aed);flex-shrink:0;"></div>
                <div>
                  <p style="font-size:0.85rem;font-weight:600;margin:0 0 2px;">Thriller</p>
                  <p style="font-size:0.75rem;color:#a0a0b0;margin:0;">Michael Jackson</p>
                </div>
                <svg width="20" height="20" fill="#b07fff" viewBox="0 0 24 24" style="margin-left:4px;cursor:pointer;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>

              <!-- Controles -->
              <div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:40%;">
                <div style="display:flex;align-items:center;gap:1.25rem;">
                  <button style="background:none;border:none;color:#a0a0b0;cursor:pointer;padding:4px;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#a0a0b0'">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
                  </button>
                  <button style="background:none;border:none;color:#a0a0b0;cursor:pointer;padding:4px;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#a0a0b0'">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
                  </button>
                  <button style="width:40px;height:40px;border-radius:50%;background:white;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.1s;"
                    onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="18" height="18" fill="#0a0a0f" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                  <button style="background:none;border:none;color:#a0a0b0;cursor:pointer;padding:4px;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#a0a0b0'">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zm2-8.14 4.96 2.64L8 16.28V9.86zM16 6h2v12h-2z"/></svg>
                  </button>
                  <button style="background:none;border:none;color:#a0a0b0;cursor:pointer;padding:4px;" onmouseover="this.style.color='white'" onmouseout="this.style.color='#a0a0b0'">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
                  </button>
                </div>
                <div style="display:flex;align-items:center;gap:10px;width:100%;">
                  <span style="font-size:0.7rem;color:#a0a0b0;width:32px;text-align:right;">1:23</span>
                  <div style="flex:1;height:4px;background:rgba(255,255,255,0.15);border-radius:2px;cursor:pointer;position:relative;">
                    <div style="width:35%;height:100%;background:#7c3aed;border-radius:2px;position:relative;">
                      <div style="position:absolute;right:-5px;top:-4px;width:10px;height:10px;border-radius:50%;background:white;"></div>
                    </div>
                  </div>
                  <span style="font-size:0.7rem;color:#a0a0b0;width:32px;">4:02</span>
                </div>
              </div>

              <!-- Volumen -->
              <div style="display:flex;align-items:center;justify-content:flex-end;gap:10px;width:30%;">
                <svg width="16" height="16" fill="#a0a0b0" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                <div style="width:100px;height:4px;background:rgba(255,255,255,0.15);border-radius:2px;cursor:pointer;position:relative;">
                  <div style="width:70%;height:100%;background:#7c3aed;border-radius:2px;"></div>
                </div>
              </div>
            </div>

          </main>
        </div>
        `;
    }
};

export default menuPrincipal;
