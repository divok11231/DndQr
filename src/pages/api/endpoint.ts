import { supabase } from "../../lib/supabase.client";
export async function onMount(data: any) {
  console.log(" test");
  const { data: result, error } = await supabase
    .from("currentPageUrl")
    .insert([{ data }]);
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
}
