console.log("hellow Parcel");

async function test() {
  const promise = Promise.resolve(123);
  console.log(await promise);
}
test(); // test 함수를 호출해야 async/await가 제대로 동작합니다.
