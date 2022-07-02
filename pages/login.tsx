import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};
const Login = () => {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      // await signIn(email,password)
    } else {
      // await signUp(email, password)
    }
  };
  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt={"logo"}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          "relative mt-24 space-y-8 rounded-md bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        }
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4 ">
          {/*  Email Input*/}
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder={"Email"}
              className={"input"}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className={"text-red-600 pt-4 inline-block"}>
                Please enter a valid email
              </span>
            )}
          </label>

          {/*  Password Input*/}
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder={"Password"}
              className={"input"}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className={"text-red-600 pt-4 inline-block"}>
                Please enter a valid password{" "}
              </span>
            )}
          </label>
        </div>

        {/*  Sign In Button*/}
        <button
          onClick={() => setLogin(true)}
          type={"submit"}
          className="w-full rounded bg-[#e50914] py-3  font-semibold"
        >
          Sign In
        </button>
        <div className={"text-[gray]"}>
          New To Netflix?{" "}
          <button
            onClick={() => setLogin(false)}
            className={"text-white hover:underline "}
          >
            Sign Up Now!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
