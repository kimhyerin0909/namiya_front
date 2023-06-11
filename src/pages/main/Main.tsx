import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Navigation } from "@/components/shared/navigation/Navigation";
import { Store } from "@/components/shared/store/Store";
import { TodayLetter } from "@/components/shared/letter/today/TodayLetter";
import { useRecoilValue } from "recoil";
import { navState } from "@/atoms/navigation/navigation.atom";
import { ReplyLetter } from "@/components/shared/letter/reply/ReplyLetter";
import { YourLetter } from "@/components/shared/letter/yours/YourLetter";

export const Main = () => {
  const nav = useRecoilValue(navState);

  return (
    <Layout>
      <Navigation />
      {nav === "today" && <TodayLetter />}
      {nav === "reply" && <ReplyLetter />}
      {nav === "yours" && <YourLetter />}
      <Store />
    </Layout>
  );
};
