import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
    persist(
        (set) => ({
            theme: "light",
            toggleTheme: () =>
                set((state) => {
                    const newtheme = state.theme === "light" ? "dark" : "light"
                    document.documentElement.classList.remove(state.theme)
                    document.documentElement.classList.add(newtheme)
                    return { theme: newtheme }
                })
        }),
        { name: "theme-storage" } 
    )
) 
