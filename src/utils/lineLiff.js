import liff from '@line/liff';

function logLiff() {
  console.log(liff.getLanguage());
  console.log(liff.getVersion());
  console.log(liff.isInClient());
  console.log(liff.isLoggedIn());
  console.log(liff.getOS());
  console.log(liff.getLineVersion());
}

export default logLiff;
