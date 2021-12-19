import Image from "next/image";
import { useEffect } from "react";
// https://velocity-umber.vercel.app/
export default function IndexPage() {
  useEffect(() => {
    fetch("http://172.16.0.30:8090/login.xml", {
      mode: "no-cors",
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Origin": "https://velocity-umber.vercel.app/",
    "Referer": "http://172.16.0.30:8090/httpclient.html",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "mode=191&username=f20191435&password=ashish498009&a=1639894318963&producttype=0",
  "method": "POST"
}).then(res => console.log("Success", res)).catch(err => console.log("Error", err));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! You can now autologin to BITS WIFI.
      </h2>
    </div>
  );
}


/**
 * 
 *  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});
 */