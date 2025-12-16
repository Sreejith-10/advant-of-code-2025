import fs from "fs/promises";

async function partTwo() {
  const ids = await fs.readFile("./input.txt", "utf8");
  const input = ids.replace("\n", "").split(",");

  let valid: number = 0;

  for (const ids of input) {
    const [start, end]: number[] = ids.split("-").map((i) => Number(i));
    for (let num = start; num <= end; num++) {
      const str = num.toString();
      const n = str.length;

      for (let blockLen = 1; blockLen <= n / 2; blockLen++) {
        if (n % blockLen !== 0) continue;

        const repetitions = n / blockLen;
        const block = str.slice(0, blockLen);

        let built = "";
        for (let i = 0; i < repetitions; i++) {
          built += block;
        }

        if (built === str) {
          valid += num;
          break;
        }
      }
    }
  }
  console.log(valid);
}

partTwo();
