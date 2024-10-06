import { revalidatePath } from "next/cache";
import { createClient } from "./client";

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/");
}

export async function login(email: string, password: string) {
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

export async function signUp(email: string, password: string) {
  const supabase = createClient();
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
}
