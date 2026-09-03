const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

// For Supporting the fetchAPI and submitAPI functions in TypeScript, we can declare them in the global window object. This allows us to use these functions without TypeScript throwing errors about them being undefined. We can do this by extending the Window interface in a declaration file (e.g., src/types/api.d.ts) or directly in the component file if it's a small project.
window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
