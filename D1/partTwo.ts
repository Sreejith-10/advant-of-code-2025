import fs from "fs/promises";

async function partTwo(): Promise<number> {
  const input = await fs.readFile("./D1/input.txt", "utf8");

  let START = 50;
  let count: number = 0;

  for (const rot of input.split("\n")) {
    const d: string | undefined = rot.split("")[0];
    const v: number = Number(rot?.slice(1));

    function checkCount() {
      if (START === 0) {
        count++;
      }
    }

    if (d === "R") {
      for (let i = 0; i < v; i++) {
        START = (START + 1) % 100;
        checkCount();
      }
    } else {
      for (let i = 0; i < v; i++) {
        START = (((START - 1) % 100) + 100) % 100;
        checkCount();
      }
    }
  }

  return count;
}

const p2Ans = await partTwo();

console.log(p2Ans);
