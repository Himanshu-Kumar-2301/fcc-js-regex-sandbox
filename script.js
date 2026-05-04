const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
  let result = "";
  if (caseInsensitiveFlag.checked === true) {
    result += "i";
  }
  if (globalFlag.checked === true) {
    result += "g";
  }
  return result;
};

const handleClick = () => {
  const flagResult = getFlags();
  const regex = new RegExp(regexPattern.value, flagResult);
  const result = stringToTest.textContent.match(regex);
  stringToTest.innerHTML = stringToTest.textContent.replace(
    regex,
    (match) => `<span class="highlight">${match}</span>`,
  );
  testResult.textContent = result ? result.join(", ") : "no match";
};

testButton.addEventListener("click", () => handleClick());
