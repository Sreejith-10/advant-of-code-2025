import fs from "fs/promises";

async function partOne() {
  const ids = await fs.readFile("./input.txt", "utf8");
  const input = ids.replace("\n", "").split(",");

  let valid: number = 0;

  for (const ids of input) {
    const [start, end]: number[] = ids.split("-").map((i) => Number(i));

    for (let i = start; i <= end; i++) {
      const num: string = i?.toString();
      if (num.length % 2 !== 0) continue;

      if (
        num.slice(0, num.length / 2) === num.slice(num.length / 2, num.length)
      ) {
        valid += i;
      }
    }
  }

  console.log(valid);
}

partOne();
