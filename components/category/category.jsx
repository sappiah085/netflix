import MovieCard from '../movieCard/movieCard';
export default function Category({ label }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-zinc-400 text-2xl font-medium">{label}</h2>
      <div className="flex scrollbar-hide w-full gap-[.1rem] md:gap-3 flex-nowrap overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 0, 4, 5, 6, 7, 8].map((el) => (
          <MovieCard key={el} />
        ))}
      </div>
    </div>
  );
}
