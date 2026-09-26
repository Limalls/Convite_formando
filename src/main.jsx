import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App, { RootRedirect } from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";

// --- Suporte a rotas "limpas" (ex: /Convite_formando/narija) no GitHub Pages ---
// O GitHub Pages só sabe servir arquivos reais; ele não entende que "/narija"
// deve cair nesse mesmo app. Por isso o public/404.html redireciona qualquer
// caminho desconhecido de volta para cá, guardando o caminho original numa
// querystring (?redirect=...). Aqui a gente lê essa querystring e devolve a
// URL "bonita" antes do React Router decidir o que renderizar.
(function restoreDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");
  if (redirect != null) {
    params.delete("redirect");
    const rest = params.toString();
    const newUrl =
      window.location.pathname.replace(/\/?$/, "/") +
      redirect +
      (rest ? `?${rest}` : "") +
      window.location.hash;
    window.history.replaceState(null, "", newUrl);
  }
})();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Convite_formando">
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:slug" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
