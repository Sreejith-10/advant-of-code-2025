import fs from "fs/promises";

async function partOne(): Promise<number> {
  const input = await fs.readFile("./D1/input.txt", "utf8");

  let START = 50;
  let count: number = 0;

  for (const rot of input.split("\n")) {
    const d: string | undefined = rot.split("")[0];
    const v: number = Number(rot?.slice(1));

    if (d === "R") {
      START = (START + v) % 100;
    } else {
      START = (((START - v) % 100) + 100) % 100;
    }

    if (START === 0) count += 1;
  }

  return count;
}

const p1Ans = await partOne();

console.log(p1Ans);
