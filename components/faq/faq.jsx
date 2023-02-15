import { FiPlus } from 'react-icons/fi';
import Sub from '../sub/sub';
export default function FAQ() {
  return (
    <div className="bg-black flex justify-center gap-4 flex-col items-center border-t-4 px-2 md:px-10 py-24 border-zinc-400">
      <h1 className="md:text-7xl text-2xl font-bold mb-8 text-white">
        Frequently Asked Questions
      </h1>
      {[1, 2, 4, 5, 6, 7].map((el) => (
        <div
          key={el}
          className=" w-full overflow-hidden   flex flex-col max-w-6xl "
        >
          <label
            className="text-white hover:bg-zinc-700  bg-zinc-600 text-xl md:text-3xl z-20 px-8 py-7 cursor-pointer flex items-center w-full justify-between"
            htmlFor={el}
          >
            watch is Netflix? <FiPlus />{' '}
          </label>
          <input
            type="radio"
            className="hidden peer"
            aria-label={el}
            name="faq"
            id={el}
          />
          <p className="text-white bg-zinc-600   md:text-xl transform h-0  py-0  px-8  transition-all peer-checked:border-t-[1px] border-zinc-900 peer-checked:h-min  peer-checked:py-7 duration-500 overflow-hidden ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Distinctio, quaerat repellendus facere neque commodi modi nam autem
            sed dolore? Dolores, illum ad vero cupiditate accusamus assumenda
            est ex praesentium iste, sed, iusto incidunt. Quaerat aliquam
            voluptates commodi amet, assumenda odio cumque corporis, distinctio
            mollitia possimus molestias dolorum. Suscipit, perspiciatis
            voluptatem culpa sequi rem iure eius modi quaerat itaque vitae et
            debitis qui repudiandae voluptatibus facere saepe temporibus!
            Numquam nemo a dolor ut, dolorum nulla harum corrupti! Quia eligendi
            porro aut ullam, dolores et quo harum facilis animi eos laborum,
            nemo incidunt eum odio fuga architecto dignissimos repellat dolore
            veniam dolorum? Itaque doloribus corrupti eius, esse quod alias vel
            ut id ratione eum
          </p>
        </div>
      ))}
      <span className="mt-11 text-center w-full flex items-center flex-col gap-8">
        <Sub />
      </span>
    </div>
  );
}
