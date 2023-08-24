import React from "react";
import { Button } from "@snowballtools/snowball-ts-framework-template";

export default function Home() {
  return (
    <>
      <h1>example app</h1>
      <Button label="Click me!" onClick={() => alert("Button clicked!")} />;
    </>
  );
}
