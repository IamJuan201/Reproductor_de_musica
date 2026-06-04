import { router } from '../../router.js';

const API_URL = import.meta.env.VITE_API_URL;

const Login = {
    render() {
        return `
        <div style="min-height:100vh;background:#0a0a0f;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;position:relative;overflow:hidden;">
          
          <!-- Fondo decorativo tipo Spotify -->
          <div style="position:absolute;top:-200px;left:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(138,43,226,0.18) 0%,transparent 70%);pointer-events:none;"></div>
          <div style="position:absolute;bottom:-150px;right:-150px;width:500px;height:500px;background:radial-gradient(circle,rgba(100,20,180,0.12) 0%,transparent 70%);pointer-events:none;"></div>

          <!-- Logo Riwiflow -->
          <div style="margin-bottom:2.5rem;text-align:center;">
            <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:0.5rem;">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#7c3aed"/>
                <ellipse cx="18" cy="22" rx="10" ry="2.5" stroke="white" stroke-width="2" fill="none"/>
                <ellipse cx="18" cy="17" rx="7" ry="2" stroke="white" stroke-width="2" fill="none"/>
                <ellipse cx="18" cy="12.5" rx="4" ry="1.5" stroke="white" stroke-width="2" fill="none"/>
              </svg>
              <span style="font-family:'Circular Std','Montserrat',sans-serif;font-size:2rem;font-weight:800;color:white;letter-spacing:-0.03em;">Riwiflow</span>
            </div>
            <p style="color:#a0a0b0;font-size:0.875rem;letter-spacing:0.02em;">Reproduce tu música favorita</p>
          </div>

          <!-- Card del formulario -->
          <div style="width:100%;max-width:420px;background:#111118;border-radius:12px;padding:2.5rem;border:1px solid rgba(255,255,255,0.06);">
            
            <h2 style="color:white;font-size:1.5rem;font-weight:700;text-align:center;margin-bottom:2rem;letter-spacing:-0.02em;">Inicia sesión en Riwiflow</h2>

            <!-- Botón Google -->
            <button id="googleBtn" style="width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:0.85rem;border-radius:500px;border:1px solid rgba(255,255,255,0.15);background:transparent;color:white;font-size:0.9rem;font-weight:600;cursor:pointer;transition:border-color 0.2s,background 0.2s;margin-bottom:1.5rem;"
              onmouseover="this.style.borderColor='rgba(255,255,255,0.4)';this.style.background='rgba(255,255,255,0.05)'"
              onmouseout="this.style.borderColor='rgba(255,255,255,0.15)';this.style.background='transparent'">
              <img src="src/resources/img/google-icon.png" alt="Google" style="width:20px;height:20px;opacity:0.9;"/>
              Continuar con Google
            </button>

            <!-- Separador -->
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
              <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
              <span style="color:#a0a0b0;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;">o</span>
              <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
            </div>

            <form id="loginForm" onsubmit="return false;" style="display:flex;flex-direction:column;gap:1.25rem;">
              
              <!-- Email -->
              <div>
                <label style="display:block;color:#a0a0b0;font-size:0.8rem;font-weight:600;letter-spacing:0.05em;margin-bottom:0.5rem;text-transform:uppercase;">Correo electrónico</label>
                <input id="email" name="email" type="email" placeholder="name@domain.com" required
                  style="width:100%;padding:0.85rem 1rem;background:#1a1a24;border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:white;font-size:0.95rem;outline:none;transition:border-color 0.2s,box-shadow 0.2s;box-sizing:border-box;"
                  onfocus="this.style.borderColor='#7c3aed';this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.15)'"
                  onblur="this.style.borderColor='rgba(255,255,255,0.1)';this.style.boxShadow='none'"
                />
              </div>

              <!-- Password -->
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                  <label style="color:#a0a0b0;font-size:0.8rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Contraseña</label>
                  <a href="#" style="color:#b07fff;font-size:0.8rem;font-weight:600;text-decoration:none;"
                    onmouseover="this.style.textDecoration='underline'"
                    onmouseout="this.style.textDecoration='none'">¿Olvidaste tu contraseña?</a>
                </div>
                <input id="password" name="password" type="password" placeholder="••••••••" required
                  style="width:100%;padding:0.85rem 1rem;background:#1a1a24;border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:white;font-size:0.95rem;outline:none;transition:border-color 0.2s,box-shadow 0.2s;box-sizing:border-box;"
                  onfocus="this.style.borderColor='#7c3aed';this.style.boxShadow='0 0 0 3px rgba(124,58,237,0.15)'"
                  onblur="this.style.borderColor='rgba(255,255,255,0.1)';this.style.boxShadow='none'"
                />
              </div>

              <!-- Error -->
              <div id="loginError" style="display:none;background:rgba(186,26,26,0.12);border:1px solid rgba(186,26,26,0.3);border-radius:6px;padding:0.75rem 1rem;color:#ff6b6b;font-size:0.875rem;">
                Correo o contraseña incorrectos.
              </div>

              <!-- Submit -->
              <button type="submit"
                style="width:100%;padding:0.9rem;background:#7c3aed;border:none;border-radius:500px;color:white;font-size:0.95rem;font-weight:700;cursor:pointer;letter-spacing:0.03em;transition:background 0.15s,transform 0.1s;margin-top:0.25rem;"
                onmouseover="this.style.background='#6d28d9'"
                onmouseout="this.style.background='#7c3aed'"
                onmousedown="this.style.transform='scale(0.98)'"
                onmouseup="this.style.transform='scale(1)'">
                Iniciar sesión
              </button>
            </form>
          </div>

          <!-- Link registro -->
          <p style="margin-top:2rem;color:#a0a0b0;font-size:0.875rem;">
            ¿No tienes cuenta?
            <a href="#" style="color:white;font-weight:700;text-decoration:none;margin-left:4px;"
              onmouseover="this.style.color='#b07fff'"
              onmouseout="this.style.color='white'">Regístrate en Riwiflow</a>
          </p>
        </div>
        `;
    },

    mounted() {
        const loginForm = document.getElementById('loginForm');

        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
            const matchingUsers = await response.json();

            if (matchingUsers.length === 0) {
                const errorEl = document.getElementById('loginError');
                errorEl.style.display = 'block';
                setTimeout(function() {
                    errorEl.style.display = 'none';
                }, 3000);
                return;
            }

            const user = matchingUsers[0];
            const userWithoutPassword = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            };
            localStorage.setItem('user', JSON.stringify(userWithoutPassword));

            history.pushState(null, null, '/dashboard');
            router();
        });
    }
};

export default Login;
