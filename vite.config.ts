import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT : Ceci doit correspondre au nom de votre dépôt GitHub.
  // Exemple : Si votre dépôt est https://github.com/Alicia-Ouedraogo/portfolio
  // Alors base doit être '/portfolio/'
  base: '/portfolio/',
});