
import React from 'react';

export type StrategyCategory = 'supervivencia' | 'corteza' | 'territorial' | 'otras';

export interface Strategy {
  id: number;
  category: StrategyCategory;
  title: string;
  vivencias: string[];
  manifestacion: string;
  icon: React.ReactElement;
}

export interface Filter {
  key: StrategyCategory | 'all';
  label: string;
}
