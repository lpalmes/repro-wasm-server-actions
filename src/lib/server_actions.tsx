"use server";

import { Codeblock } from "@/components/Codeblock";

export const renderCodeblockInServerAction = async (randomId: string) => {
  // @ts-ignore
  return <Codeblock />;
};
