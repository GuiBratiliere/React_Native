const JWTTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64";

const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "123456") {
        resolve({
          token: "JWTTokenMock",
          email: email,
          name: "Gui",
        });
      } else {
        reject(new Error("Credenciais incorretas"));
      }
    }, 1000);
  });
};

export const authService = {
  signIn,
};
