import fs from "fs/promises";

async function partOne() {
  const input: string = await fs.readFile("./input.txt", "utf-8");
  const banks: string[] = input.split("\n").map((line) => line.trim());

  let total: number = 0;

  for (const battery of banks) {
    let largest: number = 0;
    let index: number = 0;
    let secondLargest: number = 0;

    for (let i = 0; i < battery.length - 1; i++) {
      const val = Number(battery[i]);
      if (val > largest) {
        largest = val;
        index = i;
      }

      if (val === 9) break;
    }

    for (let i = index + 1; i < battery.length; i++) {
      const val = Number(battery[i]);
      if (val > secondLargest) {
        secondLargest = val;
      }
    }

    total += 10 * largest + secondLargest;
  }

  console.log(total);
}

partOne();
