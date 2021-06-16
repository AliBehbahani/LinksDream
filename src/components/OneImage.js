import vases from "../vases";
function getRandomInt(max) {
  return vases[Math.floor(Math.random() * vases.length)].id;
}

export default getRandomInt;
