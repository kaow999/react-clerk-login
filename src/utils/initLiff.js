import liff from "@line/liff";

function init() {
  const myLiffId = "1657304428-KNG5Ym3b";
  liff
    .init({
      liffId: myLiffId,
    })
    .catch((err) => {
      console.log(err.code, err.message);
    });
}

export default init;