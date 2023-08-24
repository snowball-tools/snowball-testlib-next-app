import React, { useEffect } from "react";
import { Button } from "@snowballtools/snowball-ts-framework-template";
import { exLibFunction } from "@snowballtools/snowball-ts-lib-template";

export default function Home() {
  useEffect(() => {});

  return (
    <>
      <h1>example app</h1>
      <Button
        label="Click me!"
        onClick={() => alert(exLibFunction("worked!!!!!!!!"))}
      />
      ;
    </>
  );
}
