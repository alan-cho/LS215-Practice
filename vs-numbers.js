// EXAMPLE
/*
Write a function that compares version numbers and returns which one is larger, or 'newer'.
Version numbers are notation for a complicated number system:
  1 = 1.0 > 0.1
  1.5 > 1.0
  2.3 > 1.9.5 > 1.9

Explicit:
  Compare version numbers.
  Return 1 if V1 > V2, 0 if V1 = V2, and -1 if V1 < V2.
  If there are characters other than digits and periods, return null.

Implicit:
  Do the version numbers have the same amount of digits?

Rules:
  Compare digits in the same position, which are determined by the periods that separate the digits.
  Larger numbers indicate greater or 'newer'.

Input: String
Output: Number
*/

function compareVersions(v1, v2) {
  const startEndRegex = new RegExp(/^\.|\.$/);
  if (startEndRegex.test(v1) || startEndRegex.test(v2)) {
    return null;
  }

  const multipleRegex = new RegExp(/\.\.+/);
  if (multipleRegex.test(v1) || multipleRegex.test(v2)) {
    return null;
  }

  let v1Digits = v1.split(".");
  let v2Digits = v2.split(".");

  let longerVersion;
  let smallerVersion;
  let reverseParams;
  if (v1Digits.length > v2Digits.length) {
    longerVersion = v1Digits;
    smallerVersion = v2Digits;
    reverseParams = false;
  } else {
    longerVersion = v2Digits;
    smallerVersion = v1Digits;
    reverseParams = true;
  }

  for (let i = 0; i < longerVersion.length; i += 1) {
    // Not numeric
    if (/[^0-9]/g.test(longerVersion[i])) {
      return null;
    } else if (Number(longerVersion[i]) > Number(smallerVersion[i])) {
      return reverseParams ? -1 : 1;
    } else if (Number(longerVersion[i]) < Number(smallerVersion[i])) {
      return reverseParams ? 1 : -1;
    } else if (!Number(smallerVersion[i]) && Number(longerVersion[i]) > 0) {
      return reverseParams ? -1 : 1;
    }
  }

  return 0;
}

console.log(compareVersions("1", "1")); // 0
console.log(compareVersions("1.1", "1.0")); // 1
console.log(compareVersions("2.3.4", "2.3.5")); // -1
console.log(compareVersions("1.a", "1")); // null
console.log(compareVersions(".1", "1")); // null
console.log(compareVersions("1.", "2")); // null
console.log(compareVersions("1..0", "2.0")); // null
console.log(compareVersions("1.0", "1.0.0")); // 0
console.log(compareVersions("1.0.0", "1.1")); // -1
console.log(compareVersions("1.0", "1.0.5")); // -1
