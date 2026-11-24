// Entry for the make.fun one-liner competition
// "The Dog Ate My Homework: Funniest Excuse"

// The joke: the dog is innocent — the student ate the homework to hide the evidence.
const entryLine =
  "I did the homework first. All of it. Then I ate it, because a genius never leaves a paper trail.";

export { entryLine };

console.log(entryLine);

// Competition constraint: a one-liner must stay under 200 characters.
if (entryLine.length >= 200) {
  throw new Error("entryLine must be under 200 characters");
}
