import { Request, Response, NextFunction } from "express";
import { categoriaRepository } from "./categoria.repository.js";
import { Categoria } from "./categoria.entity.js";

const repository = new categoriaRepository();


//satinizacion de datos
function sanitizeCategoriaInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    IdCategoria: req.body.IdCategoria,
    NombreCategoria: req.body.NombreCategoria,
  };

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] == undefined) {
      delete req.body.sanitizedInput[key];
    }
  });

  next();
}

//GET
async function findAll(req: Request, res: Response) {
  res.json({ data: await repository.findAll() });
};

//Get X id
async function findOne(req: Request, res: Response) {
  const categoriaEncontrada = await repository.findOne({ id: req.params.id });
  if (!categoriaEncontrada) {
    return res.status(404).send({ message: 'Categoria no encontrada' });
  }
  res.json({ data: categoriaEncontrada });
};

//Post

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput;

  const categoriaNueva = new Categoria(
    input.IdCategoria,
    input.NombreCategoria
  );

  const categoria = await repository.add(categoriaNueva);
  res.status(201).send({ message: 'Categoria creada', data: Categoria });
};

//Put actualizar una categoria completa

async function update(req: Request, res: Response) {
  req.body.sanitizedInput.IdCategoria = req.params.id;
  req.body.sanitizedInput.NombreCategoria = req.body.NombreCategoria;
  console.log(req.body.sanitizedInput);
  const categoria = await repository.update(req.body.sanitizedInput);
  console.log(categoria);
  if (!categoria) {
    return res.status(404).send({ message: 'Categoria no encontrada' });
  }
  return res.status(200).send({ message: 'Categoria actualizada', data: categoria });
};

//Delete eliminar una categoria

async function remove(req: Request, res: Response) {
  const categoriaID = await repository.delete({ id: req.params.id });
  if (!categoriaID) {
    res.status(404).send({ message: 'Categoria no encontrada' });
  } else {
    res.status(200).send({ message: 'Categoria eliminada' });
  }
};

export { sanitizeCategoriaInput, findAll, findOne, add, update, remove };