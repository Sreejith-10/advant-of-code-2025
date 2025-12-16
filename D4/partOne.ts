import { truncate } from "fs";
import fs from "fs/promises";
import type { argv0 } from "process";

async function partOne() {
  const input = await fs.readFile("./input.txt", "utf-8");
  const grid = input.split("\n").map((line) => line.trim());

  let count: number = 0;

  for (let i = 0; i < grid.length; i++) {
    const line = grid[i] ?? "";
    let n: number = 0;

    while (n < line?.length) {
      if (line[n] !== "@") {
        n++;
        continue;
      }

      const rolls = getNumberOfRolesInAdjacentPos(i, n, grid);

      if (rolls < 4) {
        count++;
      }

      n++;
    }
  }

  console.log(count);
}

function getNumberOfRolesInAdjacentPos(
  row: number,
  col: number,
  grid: string[],
) {
  const rows = grid.length;
  const cols = grid[0]?.length || 0;
  let count = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;

    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
      if (grid[newRow][newCol] === "@") {
        count++;
      }
    }
  }

  return count;
}

partOne();
