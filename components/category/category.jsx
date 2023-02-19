import MovieCard from '../movieCard/movieCard';
export default function Category({ label }) {
  return (
    <div className={' flex-col gap-2 w-full  md:flex'}>
      <h2 className={`md:pl-14 text-zinc-300 text-2xl font-medium`}>{label}</h2>
      <div className="flex scrollbar-hide w-full gap-[.1rem] relative flex-nowrap overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => (
          <MovieCard key={el} />
        ))}
      </div>
    </div>
  );
}
