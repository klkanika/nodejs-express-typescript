export const RES = {
  success: {
    status: 200,
    code: 0,
    message: "ยิงสำเร็จ",
  },
  unauthorize: {
    status: 503,
    code: 111,
    message: "JWTToken หรือ Whitelist ไม่ผ่าน",
  },
  error: {
    status: 500,
    code: 500,
    message: "Server Error",
  },
};
