import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users);
};

export const getOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const user = await getRepository(User).findOne(id);
  return res.json(user);
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userCreated = getRepository(User).create(req.body);
  const userSaved = await getRepository(User).save(userCreated);
  return res.json(userSaved);
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const user = await getRepository(User).findOne(id);
  if (user) {
    getRepository(User).merge(user, req.body);
    const responseUpdate = await getRepository(User).save(user);
    return res.json(responseUpdate);
  }
  return res.json({ msg: "No se encuentra el usuario" });
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const responseDeleted = await getRepository(User).delete(req.params.id);
  return res.json(responseDeleted);
};
