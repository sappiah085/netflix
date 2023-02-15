import { useState } from 'react';

export default function Form() {
  const [values, setValues] = useState({ email: '', password: '' });
  function handleInput(e, name) {
    setValues((pre) => ({ ...pre, [name]: e.target.value }));
  }
  return (
    <form
      action="#"
      className="flex md:bg-black/75 md:py-24 md:px-11 max-w-lg m-auto flex-col mb-44 w-full gap-8 justify-center p-4 "
    >
      <h3 className="text-white text-3xl font-bold">Sign In</h3>
      <div className="flex flex-col gap-6">
        <span className="relative">
          <input
            className="peer rounded-md border-0  invalid:border-b-2 border-orange-500 bg-zinc-400/40 md:bg-zinc-700 w-full  text-white outline-none px-4 py-4"
            placeholder=" "
            type="email"
            onInput={(e) => handleInput(e, 'email')}
            id="email"
            pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            value={values.email}
            aria-label="email"
          />
          <label
            htmlFor="email"
            className="transition scale-[.9] peer-placeholder-shown:scale-100 translate-y-[-95%] text-zinc-300 left-4 absolute top-[45%] peer-placeholder-shown:translate-y-[-50%]"
          >
            Email or phone number
          </label>
          <span className="peer-invalid:block absolute hidden text-orange-400 ">
            Please enter a valid email or phone number.
          </span>
        </span>
        <span className="relative inline-block">
          <input
            onInput={(e) => handleInput(e, 'password')}
            className="peer rounded-md border-0  invalid:border-b-2 border-orange-500 bg-zinc-400/40 md:bg-zinc-700 w-full  text-white outline-none px-4 py-4"
            minLength={4}
            maxLength={60}
            type="password"
            autoComplete="true"
            id="pass"
            placeholder=" "
            aria-label="password"
          />
          <label
            className="transition scale-[.9] peer-placeholder-shown:scale-100 translate-y-[-99%] text-zinc-300 left-4 absolute top-[45%] peer-placeholder-shown:translate-y-[-50%]"
            htmlFor="pass"
          >
            Password
          </label>
          <span className="peer-invalid:block absolute hidden text-orange-400 ">
            Your password must contain between 4 and 60 characters.
          </span>
        </span>
      </div>
      <button
        className="text-white mt-5 hover:bg-red-600/75  bg-red-600 cursor-pointer text-md font-bold rounded-md p-4"
        type="submit"
      >
        Sign In
      </button>
      <div className="text-zinc-300 flex w-full -mt-5 justify-between">
        <span className="flex items-center gap-1">
          <input type="checkbox" id="remember" aria-label="remember me" />
          <label htmlFor="remember">Remember me</label>
        </span>
        <a href="#"> Need help?</a>
      </div>
      <div className="text-zinc-300">
        New to Netflix?{' '}
        <a className="text-white font-bold" href="#">
          Sign up now
        </a>
      </div>
      <div className="w-full">
        <p className="text-zinc-200">
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot.{' '}
          <a className="text-blue-500" href="#">
            Learn more
          </a>
        </p>
      </div>
    </form>
  );
}
