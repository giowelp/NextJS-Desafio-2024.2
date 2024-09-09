"use server";

import { getMangaCard2 } from "@/actions/home/actions";
import AdminPage from "@/components/admin/admin";

export default async function Admin() {
  const mangas = await getMangaCard2();
  return(
    <AdminPage mangas={mangas}/>
  )
}