import { Api } from "@/shared/services/api-client";
// import { GenreDrawer } from ".";

export default async function Suspense() {
  const genre = await Api.genre.getAll();

  return genre
}

