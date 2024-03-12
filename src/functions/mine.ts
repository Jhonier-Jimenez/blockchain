import { sha256 } from "js-sha256";

function mine(leftData: string, nonce:number, rightData: string) {

  
  let valid = false;
  

  while (!valid) {
    const shaEncoder = sha256.create();
    const data = `${leftData}${nonce}${rightData}`;
    shaEncoder.update(data);
    const hash = shaEncoder.hex();

    if (hash.slice(0, 4) === "0000") {
      valid = true;
      return hash;
    } else {
      nonce += 1;
    }
  }

  return "";
}

export default mine;
