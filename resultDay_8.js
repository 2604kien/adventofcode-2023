let response = await fetch("https://adventofcode.com/2023/day/8/input");
let txt = await response.text();
let inputs = txt.trim().split("\n");

let my_pos = "AAA";
let maps = {};
let iter = 0;
let instructions = inputs[0];
for (let i = 2; i < inputs.length; i++) {

  let map = inputs[i];
  maps[map.split(" ")[0]] = [map.split("(")[1].split(",")[0], map.split(",")[1].split(")")[0].trim()];
}

console.log("part 1 answer " + (function(pos) {
  while (true) {
    let move = instructions[iter % instructions.length] == "L" ? 0 : 1;
    pos = maps[pos][move];
    iter++;
    if (pos == "ZZZ") return iter;
  }
})(my_pos));


//part2
iter = 0;
let loops_length = [];
my_pos = [];

for (let x of Object.keys(maps))
  if (x[2] == "A") my_pos.push(x);

my_pos.forEach(pos => {
  let aggregator = [];
  (function(pos, iter) {
    while (true) {
      let move = instructions[iter % instructions.length] == "L" ? 0 : 1;
      pos = maps[pos][move];
      iter++;
      if (pos[2] == "Z") aggregator.push([iter, pos]);
      if (aggregator.length > 1 && aggregator[aggregator.length - 1][1] == aggregator[aggregator.length - 2][1] &&
        aggregator[aggregator.length - 1][0] == 2 * aggregator[aggregator.length - 2][0]) {
        loops_length.push(aggregator[aggregator.length - 2][0]);
        return
      }

    }
  })(pos, iter);
});


const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};

console.log("part 2 answer: " + lcm(...loops_length));