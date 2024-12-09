import React from "react";

import { CatalogSide, Container, Filters } from "@/shared/components/shared";

export default function Catalog() {
  return (
    <Container>
      <div className="flex py-4 gap-4">
        <CatalogSide />
        <Filters   className=" sticky top-[1px]"/>
      </div>
    </Container>
  );
}
