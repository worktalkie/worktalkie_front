import { revalidatePath } from "next/cache";
import { createClient } from "./client";

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/");
}

type loginProps = {
  email: string;
  password: string;
};

export async function login({ email, password }: loginProps) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  } else {
    return data;
  }
}

type signupProps = {
  name: string;
  email: string;
  ID: string;
  password: string;
};

export async function signUp({ name, email, ID, password }: signupProps) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name,
        ID: ID,
      },
    },
  });

  console.log(name, email, ID, password);
  if (error) {
    throw error;
  } else {
    return data;
  }
}
