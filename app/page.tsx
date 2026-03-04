'use client';

import { useState, useMemo } from 'react';
import MicrobeCard from '@/components/MicrobeCard';
import { microbesData } from '@/data/microbe';
import { MicrobeType } from '@/types/microbe';

type FilterOption = 'all' | MicrobeType;
type SortOption = 'desc' | 'asc';

export default function Home() {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [sortOrder, setSortOrder] = useState<SortOption>('desc');

  // using useMemo for optimisation
  const processedMicrobes = useMemo(() => {
    // 1. Filtration
    let result = microbesData;
    if (filter !== 'all') {
      result = result.filter((microbe) => microbe.type === filter);
    }

    // 2. Sort
    // making a copy of the array
    return [...result].sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.abundance - a.abundance;
      }
      return a.abundance - b.abundance;
    });
  }, [filter, sortOrder]);

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Skin Microbiome Explorer
          </h1>
          <p className="mt-2 text-slate-600">
            Analyze and explore the relative abundance of bacteria and fungi on
            human skin.
          </p>
        </header>

        {/* Control panel */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Filtration */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <span className="text-sm font-medium text-slate-700">
              Filter by Type:
            </span>
            <div className="flex bg-slate-100 p-1 rounded-lg w-full sm:w-auto justify-center">
              {(['all', 'bacteria', 'fungi'] as FilterOption[]).map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-colors duration-200 ${
                      filter === option
                        ? 'bg-white text-indigo-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <label
              htmlFor="sort"
              className="text-sm font-medium text-slate-700"
            >
              Sort by Abundance:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOption)}
              className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2 outline-none cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <option value="desc">Highest First (Descending)</option>
              <option value="asc">Lowest First (Ascending)</option>
            </select>
          </div>
        </div>

        {/* Microorganism card grid */}
        {processedMicrobes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processedMicrobes.map((microbe) => (
              <MicrobeCard key={microbe.id} microbe={microbe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500 text-lg">
              No microorganisms found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
