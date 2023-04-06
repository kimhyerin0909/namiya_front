import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Navigation } from "@/components/shared/navigation/Navigation";
import { Store } from "@/components/shared/store/Store";
import { Letter } from "@/components/shared/letter/Letter";

export const Main = () => {
  return (
    <Layout>
      <Navigation />
      <Letter />
      <Store />
    </Layout>
  );
};
