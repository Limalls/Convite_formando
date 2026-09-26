import { createContext, useContext } from "react";

const GraduateContext = createContext(null);

export function GraduateProvider({ data, children }) {
  return <GraduateContext.Provider value={data}>{children}</GraduateContext.Provider>;
}

export function useGraduate() {
  const ctx = useContext(GraduateContext);
  if (!ctx) {
    throw new Error("useGraduate precisa ser usado dentro de um <GraduateProvider>");
  }
  return ctx;
}
