//imagen

let link = "https://drive.google.com/file/d/1Jn3S96hTm0goTFKaBvXh6BJ6B_gpUGRt/view?usp=share_link";
let part1 = "";
let part2 = "";

for (let i = 0; i < link.length; i++) {
  if (link.substring(i,i+2) === "d/") {
    i += 2;
    for (; link[i] !== "/"; i++) {
      part1 += link[i];
    }
  } else if (link.substring(i,i+2) === "v/") {
    i += 2;
    for (; link[i] !== "?"; i++) {
      part2 += link[i];
    }
  }
}
let doc = document.getElementById("img01")
let url = prompt ('Ingrse id Url gdrive');
doc.src=`https://drive.google.com/uc?export=view&id=${part1}`;

console.log(part1+part2);



