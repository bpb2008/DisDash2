import { expressjwt } from "express-jwt";
import express, { Request, Response } from "express";
import JwksRsa from "jwks-rsa";

export const checkJwt = (req: Request,  res: Response) => {
  console.log("hola");
  return expressjwt({
    secret: "randomstring",
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
  })
};