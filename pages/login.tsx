import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useGlobalcontext } from "../AuthState";
type errortype = {
  email: "";
  password: "";
};

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState<errortype>();
  const router = useRouter();

  const { dispatch } = useGlobalcontext();
  const LOGINUSER = gql`
    query login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;

  const [loginUser, { loading }] = useLazyQuery(LOGINUSER, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
      console.log(errors);
    },
    onCompleted(data) {
      console.log(data);

      dispatch({ type: "LOGIN", payload: data.login.token });
      router.push("/dashboard");
    },
  });

  const submit = (e) => {
    e.preventDefault();
    const userinfo = {
      email,
      password,
    };
    loginUser({
      variables: userinfo,
    });
  };
  return (
    <div className="grid grid-cols-1 place-items-center">
      <form
        onSubmit={submit}
        className="flex flex-col px-6 py-6 mt-10 border border-gray-100 rounded-sm bg-gray-50"
      >
        <p className="px-4 py-2 mb-10 text-2xl font-semibold text-center text-gray-500 border-b-2 border-gray-300 border-opacity-60 ">
          Login
        </p>
        <input
          type="email"
          required={true}
          placeholder={`Email`}
          className={`px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx ${
            errors?.email ? "border-red-600" : ""
          }`}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          required={true}
          placeholder={`Password`}
          className={`px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx ${
            errors?.password ? "border-red-600" : ""
          }`}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="px-4 mt-10 font-semibold text-center transition duration-200 bg-green-600 border border-green-600 rounded-sm cursor-pointer py-fpx text-gray-50 hover:bg-green-400"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
