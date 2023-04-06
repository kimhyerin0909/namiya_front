import React, { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}>
      <div
        style={{
          width: "40%",
          padding: "0 10%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "20px",
        }}>
        {children}
      </div>
    </div>
  );
};
