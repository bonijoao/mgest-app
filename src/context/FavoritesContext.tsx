import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FavoritesContextType = {
  favorites: Record<string, boolean>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const FAVORITES_KEY = 'rbseagro:favorites';

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(FAVORITES_KEY);
        if (stored) setFavorites(JSON.parse(stored));
      } catch {}
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)).catch(() => {});
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const value = useMemo(() => ({
    favorites,
    toggleFavorite,
    isFavorite: (id: string) => !!favorites[id]
  }), [favorites]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
};


