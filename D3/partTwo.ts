import fs from "fs/promises";

async function partTwo() {
  const input: string = await fs.readFile("./input.txt", "utf-8");
  const banks: string[] = input.split("\n").map((line) => line.trim());

  let total: number = 0;

  for (const bank of banks) {
    const digits = bank.split("").map(Number);
    const n = digits.length;
    const k = 12;
    const toRemove = n - k;

    if (toRemove < 0) {
      continue;
    }

    const stack: number[] = [];
    let removed: number = 0;

    for (const digit of digits) {
      while (
        removed < toRemove &&
        stack.length > 0 &&
        stack[stack.length - 1] < digit
      ) {
        stack.pop();
        removed++;
      }
      stack.push(digit);
    }

    while (removed < toRemove) {
      stack.pop();
      removed++;
    }

    const selected = stack.slice(0, k);
    const numStr = selected.join("");
    total += Number(numStr);
  }

  console.log(total);
}

partTwo();
