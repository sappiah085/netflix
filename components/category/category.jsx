import MovieCard from '../movieCard/movieCard';
export default function Category({ label, edit }) {
  const className = edit
    ? ' flex-col gap-2 w-full hidden md:flex'
    : 'md:pl-14 pl-5 flex flex-col gap-2 w-full';
  return (
    <div className={className}>
      <h2
        className={`${
          edit ? 'md:pl-14' : ''
        } text-zinc-300 text-2xl font-medium`}
      >
        {label}
      </h2>
      <div className="flex scrollbar-hide w-full gap-[.1rem] relative flex-nowrap overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el) => (
          <MovieCard key={el} />
        ))}
      </div>
    </div>
  );
}
