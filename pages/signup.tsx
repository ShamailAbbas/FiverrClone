import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const SIGNUP = gql`
    mutation register(
      $username: String!
      $email: String!
      $password: String!
      $confirmpassword: String!
    ) {
      register(
        username: $username
        email: $email
        password: $password
        confirmpassword: $confirmpassword
      ) {
        username
        email
        createdAt
      }
    }
  `;
  const [registerUser, { loading }] = useMutation(SIGNUP, {
    update(_, res) {
      console.log(res.data.register);
      router.push("/login");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
  });

  const submit = (e) => {
    e.preventDefault();

    const userinfo = {
      email,
      username: name,
      password,
      confirmpassword,
    };
    registerUser({
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
          Sign Up
        </p>
        <input
          type="text"
          required={true}
          placeholder={`Name`}
          className="px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="email"
          required={true}
          placeholder={`Email`}
          className="px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          required={true}
          placeholder={`Password`}
          className="px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="password"
          required={true}
          placeholder={`Confirm your password`}
          className="px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
        />
        <button
          className="px-4 mt-10 font-semibold text-center transition duration-200 bg-green-600 border border-green-600 rounded-sm outline-none cursor-pointer py-fpx text-gray-50 hover:bg-green-400"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
