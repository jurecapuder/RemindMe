import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className="flex flex-grow w-full justify-center dark:bg-netrual-950">
        <div className="max-w-[920px] flex flex-col flex-grow px-4 py-12">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;