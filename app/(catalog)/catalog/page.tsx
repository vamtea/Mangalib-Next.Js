import React from "react";

import { CatalogSide, Container, Filters } from "@/shared/components/shared";

export default async function Catalog() {
  return (
    <Container>
      <div className="flex py-4 gap-4">
        <CatalogSide />
        <div className="flex-grow">
          <Filters className="sticky top-[0px] z-10" />
        </div>
      </div>
    </Container>
  );
}
