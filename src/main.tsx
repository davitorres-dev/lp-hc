import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Exporta função para montar em um container customizado (ex: Shadow DOM)
export default function mountReactApp(container: HTMLElement) {
  createRoot(container).render(<App />);
}

// Permite rodar normalmente se tiver um #root no DOM principal
const rootEl = document.getElementById("root");
if (rootEl) {
  mountReactApp(rootEl);
}

